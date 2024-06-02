import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt'
import { createPostInput, updatePostInput } from "@anmolban/medium-common";

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string
    },
    Variables: {
        userId?: string;
    },
}>();

blogRouter.use("/*", async (c, next) => {


    try{
        if(c.req.path.includes("/bulk")){
            await next();
            return;
        }
    
        const token = c.req.header("Authorization")?.split(" ")[1] || "";
        const user = await verify(token, c.env.JWT_SECRET);
    
        if(!user || typeof user.id !== 'string'){
            c.status(403);
            return c.json({
                message: "You are not logged in"
            });
        }
    
        const userId: string = user.id;
        c.set("userId", userId);
        await next();
        return;
    } catch(error){
        console.log(error);
        return c.json({error});
    }

})

blogRouter.post('/', async (c) => {
    const body = await c.req.json();

    const parsedPayload = createPostInput.safeParse(body);
    if(!parsedPayload.success){
        c.status(403);
        return c.json({
            message: "Invalid inputs"
        });
    }

    const authorId = c.get("userId") || "";
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const post = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: authorId
            }
        });

        c.status(200);
        return c.json({
            id: post.id
        });
    } catch(error){
        c.status(411);
        return c.json({
            message: "Error while creating blog post"
        })
    } finally{
        await prisma.$disconnect();
    }

});
  
blogRouter.put('/', async (c) => {
    
    const body = await c.req.json();

    const parsedPayload = updatePostInput.safeParse(body);
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
        await prisma.post.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content,
            }
        });

        c.status(200);
        return c.json({
            message: "Post updated"
        });

    } catch(error){
        c.status(411);
        return c.json({
            message: "Error while creating blog post"
        });
    } finally{
        await prisma.$disconnect();
    }
});

blogRouter.get('/bulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const posts = await prisma.post.findMany();
        c.status(200);
        return c.json({posts});
    } catch(error){
        console.log(error);
        c.status(411);
        return c.json({
            message: "Error fetching posts"
        });
    } finally{
        await prisma.$disconnect();
    }
});
  
blogRouter.get('/:id', async (c) => {
    const id = c.req.param("id");

    if(typeof id !== 'string'){
        c.status(403);
        return c.json({
            message: "Invalid inputs"
        });
    }

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL
    }).$extends(withAccelerate());

    try{
        const post = await prisma.post.findUnique({
            where: {
                id: id
            }
        });
        c.status(200);
        return c.json({post});
    } catch(error){
        console.log(error);
        c.status(411);
        return c.json({
            message: "Error fetching blog"
        });
    } finally{
        await prisma.$disconnect();
    }
});
  