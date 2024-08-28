import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import { BACKEND_URL } from "../config";
import SmallAvatar from "./SmallAvatar";
import { Link } from "react-router-dom";
// import Blog from "../hooks";

interface Blog {
    id: string;
    title: string;
    author: {
        name: string;
    };
}

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

let count = 1;

function SearchModal({ isOpen, onClose }: SearchModalProps) {
    const [inputText, setInputText] = useState("");
    const [searchResults, setSearchResults] = useState<Blog[]>([]);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleSearch = async (query: string) => {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/blog/search`, { 
                title: query 
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                },
            });
            setSearchResults(response.data.posts);
        } catch (error) {
            console.log("Error fetching search results:", error);
        }
    };

    // Close the modal if clicked outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setInputText("");
                setSearchResults([]);
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div ref={modalRef} className="bg-white p-6 rounded-lg w-11/12 max-w-lg">
                <input
                    type="text"
                    placeholder="Search by Title"
                    className="w-full p-2 mb-4 border border-gray-300 rounded"
                    value={inputText}
                    onChange={(e) => {
                        setInputText(e.target.value);
                        handleSearch(e.target.value);
                    }}
                />
                <div className="h-52 overflow-auto">
                    {searchResults.map((blog) => (
                        <SearchModalBlogCard key={count++} id={blog.id} title={blog.title} author={blog.author} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function SearchModalBlogCard({id, title, author}: Blog){
    return (
        <Link to={`/blog/${id}`}>
            <div key={id} className="border-b py-2">
                <h2 className="font-bold">{title}</h2>
                <div className="flex gap-2 mt-2">
                    <SmallAvatar name={author.name}/>
                        <p className="text-sm">{author.name}</p>
                </div>
            </div>
        </Link>
    )
}

export default SearchModal;