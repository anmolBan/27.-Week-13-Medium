import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import { BlogsSkeletons } from "../skeletons/SkeletonsCompo";

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
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`);
    
                setAllBlogs(response.data.posts);
                setLoading(false);
            } catch(error){
                console.log(error);
            }
        }
        useEffectFunction();
    }, []);

    function getDate(date: string){
        const splitDate = date.split("T");
        return splitDate[0];

    }

    function getSkeletons(){
        return <div className="flex flex-col gap-10">
            <BlogsSkeletons/>
            <BlogsSkeletons/>
            <BlogsSkeletons/>
            <BlogsSkeletons/>
            <BlogsSkeletons/>
            <BlogsSkeletons/>
            <BlogsSkeletons/>
            <BlogsSkeletons/>
            <BlogsSkeletons/>
        </div>
    }

    return (
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className="flex flex-col items-center w-full">
                    {loading ? getSkeletons() : allBlogs.map((blog: {id: string; title: string; content: string, topic: string, createdAt: string, author: {name: string}
                    }) => (
                    <div key={count++}><BlogCard id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={getDate(blog.createdAt)} topic={blog.topic === "" ? "Random" : blog.topic}/>
                    <div className="border-b my-5 sm:my-8"></div></div>))}
                </div>
            </div>
        </div>
    )
}

export default Blogs;