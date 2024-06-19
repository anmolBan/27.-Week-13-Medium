import { useEffect, useState } from "react";
import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../config";
import Skeletons from "../skeletons/SkeletonsCompo";

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
        const splitDate = date.split("/");
        let month = splitDate[0];
        const day = splitDate[1];
        const year = splitDate[2];

        if(month === "1"){
            month = "JAN"
        }

        else if(month === "2"){
            month = "FEB"
        }

        else if(month === "3"){
            month = "MAR"
        }

        else if(month === "4"){
            month = "APR"
        }

        else if(month === "5"){
            month = "MAY"
        }

        else if(month === "6"){
            month = "JUN"
        }

        else if(month === "7"){
            month = "JUL"
        }

        else if(month === "8"){
            month = "AUG"
        }

        else if(month === "9"){
            month = "SEP"
        }

        else if(month === "10"){
            month = "OCT"
        }

        else if(month === "11"){
            month = "NOV"
        }

        else if(month === "12"){
            month = "DEC"
        }

        return month + day + ", " + year;

    }

    function getSkeletons(){
        return <div className="flex flex-col gap-10">
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
            <Skeletons/>
        </div>
    }

    return (
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className="flex flex-col items-center w-full">
                    {/* <Skeletons/> */}
                    {loading ? getSkeletons() : allBlogs.map((blog: {id: string; title: string; content: string, topic: string, date: string, author: {name: string}
                    }) => (<div key={count++}><BlogCard id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate={blog.date === "" ? "N/A" : getDate(blog.date)} topic={blog.topic === "" ? "Random" : blog.topic}/>
                    <div className="border-b mb-10"></div></div>))}
                </div>
            </div>
        </div>
    )
}

export default Blogs;