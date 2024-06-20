import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import AppBar from "../components/AppBar";
import SmallAvatar from "../components/SmallAvatar";
import { BlogSkeleton } from "../skeletons/SkeletonsCompo";

function Blog(){

    const {id} = useParams();

    const {blog, loading} = useBlog({
        id: id || ""
    });

    // if(loading){
    //     return (
    //         <div>
    //             <AppBar/>
    //             <BlogSkeleton/>
    //         </div>
    //     )
    // }

    const authorName = blog?.author.name || "";
    const publishedDate = blog?.date || "";

    const paragraphs = blog?.content.split('\n').filter(paragraph => paragraph.trim() !== "");

    return (
        <div className="w-full">
            <AppBar></AppBar>
            <div className="flex justify-center">
                {loading ? <BlogSkeleton/> : 
                <div className=" min-w-[400px] md:w-[680px] w-screen flex flex-col justify-center px-6">
                    <div className="font-bold text-5xl break-words">
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
                        {(paragraphs || []).map((paragraph, index) => (
                            <div key={index}>
                                <p>{paragraph}</p>
                                <br></br>
                            </div>
                        ))}
                    </div>
                </div>
                }
            </div>
        </div>
    )
}

export default Blog