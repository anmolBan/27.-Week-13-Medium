import { ChangeEvent, useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { SigninInput } from "@anmolban/medium-common";
import axios from "axios";
import { BACKEND_URL } from "../config";

function Signin(){

    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token){
            navigate("/blogs")
        }
    })
    
    const [postInputs, setPostInputs] = useState<SigninInput>({
        email: "",
        password: ""
    });


    async function sendRequest(){
        try{
            const response  = await axios .post(`${BACKEND_URL}/api/v1/user/signin`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt.jwt);
            navigate("/blogs");
        } catch(error){
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center">
            <div className="h-screen w-6/12 flex justify-center flex-col">
                <div className="flex justify-center ">
                    <div>
                        <div className="text-4xl font-extrabold text-center">
                            Sign in
                        </div>
                        <div className="text-slate-500 mt-2 text-center">
                            Enter your credentials to access your account
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <div className="w-9/12">
                        <LabeledInput label="Email" placeholder="xyz@email.com" type={"email"} onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                email: e.target.value
                            });
                        }}/>
                        <LabeledInput label="Password" placeholder="Password" type={"password"} onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            });
                        }}/>
                        <button onClick={sendRequest} type="button" className="mt-5 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign in</button>
                        <div className="text-slate-500 text-center">
                            Don't have an account?
                            <Link className="underline pl-2" to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface LabledInputType{
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

function LabeledInput({label, placeholder, onChange, type}: LabledInputType){
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-black mt-4">{label}</label>

            <input onChange={onChange} type={type || "text"} id={label} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    )
}

export default Signin