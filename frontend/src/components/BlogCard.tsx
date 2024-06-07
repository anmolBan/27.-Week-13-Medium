// import Avatar from "./LargeAvatar";

import SmallAvatar from "./SmallAvatar";

interface BlogCardProps {
    authorName: string;
    title: string;
    content: string;
    publishedDate: string;
    topic: string
}

function BlogCard({authorName, title, content, publishedDate, topic}: BlogCardProps){
    return (
        <div className="flex flex-col justify-center h-80 w-[772px] border-b">
            <div className="w-3/4">
                <div className="flex gap-2 ">
                    <SmallAvatar name={authorName} />
                    <div className=" font-normal text-sm leading-6 ">
                        {authorName}
                    </div>
                    <div className=" text-slate-700 text-sm leading-6">
                        {publishedDate}
                    </div>
                </div>
                <div className=" font-bold text-xl mt-3">
                    {title}
                </div>
                <div className="mt-2">
                    {content.slice(0, 100) + "..."}
                </div>
                <div className="flex gap-2 mt-10 ">
                    <div className="leading-7 text-sm bg-gray-200 mt-1 h-7 rounded-2xl pl-3 pr-3">
                        {topic}
                    </div>
                    <div className="text-slate-700 text-sm leading-9">
                        {Math.ceil(content.length / 200) + " min read"}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;