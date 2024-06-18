import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

interface Blog{
    title: string;
    content: string;
    date: string;
    topic: string;
    id: string;
    author: {
        name: string
    }
}

export function useBlog({id} : {id: string}){
    const [blog, setBlog] = useState<Blog>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function useEffectFunction(){
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            });
            setBlog(response.data.post);
            setLoading(false);
        }
        useEffectFunction();
    }, [id]);

    return {blog, loading};
}