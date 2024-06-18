import AppBar from "../components/AppBar";
import { useEffect, useState } from "react";
import axios from "Axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

function CreateBlog(){

    const navigate = useNavigate();

    const [title, setTitle] = useState(localStorage.getItem("title") || "");
    const [content, setContent] = useState(localStorage.getItem("content") || "");

    async function onPublishButtonClickHandler(){
        try{
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog`, {
                title,
                content
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            console.log(response);
            localStorage.setItem("title", "");
            localStorage.setItem("content", "");
            navigate(`/blog/${response.data.id}`);
        } catch(error){
            console.log(error);
        }

    }

    useEffect(() => {
        const title = document.getElementById("auto-resize-title-area");
        const content = document.getElementById("auto-resize-content-area");

        const adjustHeight = (element: any) => {
            element.style.height = 'auto';
            element.style.height = element.scrollHeight + 'px';
        };

        const handleTitleInput = () => adjustHeight(title);
        const handleContentInput = () => adjustHeight(content);

        if (title) {
            title.addEventListener("input", handleTitleInput);
            adjustHeight(title);
        }

        if (content) {
            content.addEventListener("input", handleContentInput);
            adjustHeight(content);
        }

        return () => {
            if (title) title.removeEventListener("input", handleTitleInput);
            if (content) content.removeEventListener("input", handleContentInput);
        };
    }, []);

    return (
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className=" md:w-[820px] w-screen flex flex-col justify-center px-6">
                    <div className="flex justify-center">
                        <button onClick={onPublishButtonClickHandler} type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 w-32 text-center">Publish</button>
                    </div>

                    <textarea id="auto-resize-title-area" className=" outline-none focus:border-l break-words p-4 font-blog font-medium text-[40px] overflow-hidden resize-none" placeholder="Title" onChange={(e) => {
                        setTitle(e.target.value);
                        localStorage.setItem("title", e.target.value);
                    }} value={title}></textarea>

                    <textarea id="auto-resize-content-area" className=" outline-none p-4 font-blog  leading-[32px] text-[21px] overflow-hidden resize-none text-gray-500" placeholder="Tell your story..." onChange={(e) => {
                        setContent(e.target.value);
                        localStorage.setItem("content", e.target.value);
                    }} value={content}></textarea>
                </div>
            </div>
        </div>
    )
}

export default CreateBlog;