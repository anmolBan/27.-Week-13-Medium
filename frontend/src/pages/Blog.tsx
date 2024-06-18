import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import AppBar from "../components/AppBar";
import SmallAvatar from "../components/SmallAvatar";

function Blog(){

    const {id} = useParams();

    const {blog, loading} = useBlog({
        id: id || ""
    });

    if(loading){
        return <div>Loading...</div>
    }

    const authorName = blog?.author.name || "";
    const publishedDate = blog?.date || "";

    return (
        <div className="w-full">
            <AppBar></AppBar>
            <div className="flex justify-center">
                <div className=" md:w-[680px] w-screen flex flex-col justify-center px-6">
                    <div className="font-bold text-5xl">
                        {blog?.title}
                    </div>
                    <div className="flex gap-2 my-10 h-[36px] w-[680px] border-b">
                        <SmallAvatar name={authorName} />
                        <div className=" font-normal text-sm leading-6 ">
                            {authorName}
                        </div>
                        <div className=" text-slate-700 text-sm leading-6">
                            {publishedDate}
                        </div>
                    </div>
                    <div className="leading-[32px] text-[18px] font-medium font-blog text-gray-600 break-words">
                        {blog?.content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog