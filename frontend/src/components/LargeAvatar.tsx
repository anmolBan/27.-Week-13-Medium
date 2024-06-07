function LargeAvatar({name}: {name: string}){
    return (
        <div>
            <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-white ">{name[0]}</span>
            </div>
        </div>
    )
}

export default LargeAvatar;