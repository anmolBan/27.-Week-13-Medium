import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import axios from 'Axios';
import { useNavigate } from "react-router-dom";

let count = 1;

function Blogs(){

    const navigate = useNavigate();

    const [allBlogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {

        if(!localStorage.getItem("token")){
            navigate("/signin");
            return;
        }

        async function useEffectFunction(){
            try{
                const response = await axios.get("http://127.0.0.1:8787/api/v1/blog/bulk");
    
                setAllBlogs(response.data.posts);
                setLoading(false);
            } catch(error){
                console.log(error);
            }
        }
        useEffectFunction();
    }, []);

    return (
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className="flex flex-col items-center w-full">
                    {loading ? "Loading..." : allBlogs.map((blog: {authorId: string; title: string; content: string
                    }) => (<div><BlogCard id="1" key={count++} authorName="Anmol Bansal" title={blog.title} content={blog.content} publishedDate="Jun 11, 1998" topic="programming"/>
                    <div className="border-b my-10"></div></div>))}
                </div>
            </div>
        </div>
    )
}

export default Blogs;