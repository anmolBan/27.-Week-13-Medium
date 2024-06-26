import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign } from 'hono/jwt'
import { signupInput, signinInput } from "@anmolban/medium-common";

export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string
    }
}>();

userRouter.post('/signup', async (c) => {
    const body = await c.req.json();
    
    const parsedPayload = signupInput.safeParse(body);
    if(!parsedPayload.success){
        c.status(403);
        return c.json({
            message: "Invalid inputs"
        });
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    try{
        const user = await prisma.user.create({
            data: {
                email: body.email,
                password: body.password,
                name: body.name
            }
        });
  
        const token = await sign({id: user.id}, c.env.JWT_SECRET);
  
        c.status(200);
        return c.json({token});
    } catch(error){
        console.log(error);
        c.status(411);
        return c.text("Invalid");
    }
    
});
  
userRouter.post('/signin', async (c) => {
    const body = await c.req.json();

    const parsedPayload = signinInput.safeParse(body);
    if(!parsedPayload.success){
        c.status(403);
        return c.json({
            message: "Invalid inputs"
        });
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());
  
    try{
        const user = await prisma.user.findUnique({
            where: {
                email: body.email,
                password: body.password
            }
        });
        if(!user){
            c.status(403);
            return c.text("Invalid credentials");
        }
        const jwt = await sign({id: user.id}, c.env.JWT_SECRET);
  
        c.status(200);
        return c.json({jwt});

    } catch(error){
        c.status(411);
        c.json({error});
    }
});