import { useNavigate } from "react-router-dom";
import LargeAvatar from "./LargeAvatar";
// import Avatar from "./LargeAvatar";
import SearchBar from "./SearchBar";

function AppBar(){

    const navigate = useNavigate();
    return(
        <div className="flex justify-between border-b w-screen h-14 mb-10">
            <div className="flex flex-col justify-center">
                <div className="flex w-80 mx-6">
                    <div className="">
                        <img className="object-contain h-11" src="/medium-logo.svg"></img>
                    </div>
                    <div className="flex flex-col justify-center ml-5">
                        <SearchBar/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center">
                <div className=" w-44 mx-6 flex justify-between">
                    <div className="flex flex-col justify-center">
                        <button onClick={() => navigate("/create-blog")} className="flex gap-2 items-center text-gray-500 hover:text-gray-700 text-sm">
                            <svg className="" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Write">
                                <path d="M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z" fill="currentColor"></path>
                                <path d="M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2" stroke="currentColor"></path>
                            </svg>
                            Write
                        </button>
                    </div>
                    <div className="flex flex-col justify-center">
                        <div className="text-gray-500 hover:text-gray-700 cursor-pointer">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-label="Notifications">
                                <path d="M15 18.5a3 3 0 1 1-6 0" stroke="currentColor" strokeLinecap="round"></path>
                                <path d="M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z" stroke="currentColor" strokeLinejoin="round"></path>
                            </svg>
                        </div>
                    </div>
                    <div>
                        <LargeAvatar name="Anmol Bansal"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppBar;