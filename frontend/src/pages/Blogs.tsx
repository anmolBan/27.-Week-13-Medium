import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";

function Blogs(){
    return (
        <div>
            <AppBar/>
            <div className="flex justify-center">
                <div className="flex flex-col items-center w-full">
                    <BlogCard authorName="Anmol Bansal" publishedDate="Jun 11 1998" title="The ChatGPT list of lists: A collection of 3000+ prompts, GPTs, use-cases, tools, APIs, extensions, fails and other resources." content="Oh, ChatGPT! One year on the market and a giant ecosystem has emerged all on its own, with lists of prompts, tips, APIs, use cases, extensions, success stories and failures. ChatGPT is the first true foundation model for the mass-market. Some of the posts, blogs, and articles dealing with this new phenomenom, well, really don’t deserve any attention. Like “The 10 Best Side Hustles with ChatGPT that Can Earn You $4,000 a Week.” But some of them are genuinely interesting. I’ll try to give you an overview on the more exciting applications." topic="Random"/>
                    <BlogCard authorName="Anmol Bansal" publishedDate="Jun 11 1998" title="The ChatGPT list of lists: A collection of 3000+ prompts, GPTs, use-cases, tools, APIs, extensions, fails and other resources." content="Oh, ChatGPT! One year on the market and a giant ecosystem has emerged all on its own, with lists of prompts, tips, APIs, use cases, extensions, success stories and failures. ChatGPT is the first true foundation model for the mass-market. Some of the posts, blogs, and articles dealing with this new phenomenom, well, really don’t deserve any attention. Like “The 10 Best Side Hustles with ChatGPT that Can Earn You $4,000 a Week.” But some of them are genuinely interesting. I’ll try to give you an overview on the more exciting applications." topic="Random"/>
                </div>
            </div>
        </div>
    )
}

export default Blogs;