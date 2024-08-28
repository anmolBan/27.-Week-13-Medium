import { useState } from "react";
import SearchModal from "./SearchModal";

function SearchBar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="bg-gray-50 min-w-10 max-w-60 h-10 rounded-full flex flex-col justify-center cursor-pointer" onClick={openModal}>
                <div className="flex">
                    <div className="mx-2">
                        <img className="rounded-full object-contain h-7" src="/search-icon.svg" alt="Search Icon" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-full bg-transparent focus:outline-none text-sm placeholder-gray-600 cursor-pointer"
                        readOnly
                    />
                </div>
            </div>
            <SearchModal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}

export default SearchBar;