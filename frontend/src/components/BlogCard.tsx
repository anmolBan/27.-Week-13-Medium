// import Avatar from "./LargeAvatar";

import { Link } from "react-router-dom";
import SmallAvatar from "./SmallAvatar";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    topic: string;
    id: string
}

function BlogCard({authorName, title, content, publishedDate, topic, id}: BlogCardProps){
    return (
        <Link to={`/blog/${id}`}>
            <div className="flex flex-col justify-center h-[202px] w-[680px]">
                <div className="w-full">
                    <div className="flex gap-2 h-[36px] w-[680px]">
                        <SmallAvatar name={authorName} />
                        <div className=" font-normal text-sm leading-6 ">
                            {authorName}
                        </div>
                        <div className=" text-slate-700 text-sm leading-6">
                            {publishedDate}
                        </div>
                    </div>
                    <div className="h-[166px]">
                        <div className="h-[108px]">
                            <div className="font-bold text-xl break-words">
                                {title}
                            </div>
                            <div className="mt-2 break-words">
                                {content.slice(0, 130) + "..."}
                            </div>
                        </div>
                        <div className="flex gap-2 mt-5">
                            <div className="leading-7 text-sm bg-gray-200 mt-1 h-7 rounded-2xl pl-3 pr-3">
                                {topic}
                            </div>
                            <div className="text-slate-700 text-sm leading-9">
                                {Math.ceil(content.length / 200) + " min read"}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard;