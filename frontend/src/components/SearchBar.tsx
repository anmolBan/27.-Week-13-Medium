function SearchBar(){
    return (
        <div className="bg-gray-50 min-w-10 max-w-60 h-10 rounded-full flex flex-col justify-center">
            <div className="flex">
                <div className="mx-2">
                    <img className=" rounded-full object-contain h-7" src="/search-icon.svg"></img>
                </div>
                <input type="text" placeholder="Search" className="w-full h-full bg-transparent focus:outline-none text-sm placeholder-gray-600 "></input>
            </div>
        </div>
    )
}

export default SearchBar;