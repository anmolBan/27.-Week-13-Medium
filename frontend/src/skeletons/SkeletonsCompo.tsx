export function BlogsSkeletons(){
    return(
        <div role="status" className="animate-pulse">

            <div className="flex flex-col justify-center mx-5 md:mx-0 w-screen  md:w-[680px]">
                <div className="w-full">
                    <div className="flex gap-2 h-[36px] w-[680px] mx-5 md:mx-0">
                        <div id="anmol1" className="h-6 bg-gray-200 rounded-full w-6 mb-4"></div>
                        <div id="anmol2" className="h-2 bg-gray-200 rounded-full w-24 mb-2.5 mt-2"></div>
                        <div id="anmol3" className="h-2 bg-gray-200 rounded-full w-24 mb-2.5 mt-2 hidden sm:block"></div>
                    </div>
                    <div className="mx-5 md:mx-0">
                        <div className="">
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5 mt-2"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5 mt-5 hidden sm:block"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5 hidden sm:block"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5 hidden sm:block"></div>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <div className="leading-7 text-sm bg-gray-200 mt-1 h-7 rounded-2xl pl-3 pr-3">
                                <div className="h-2 bg-gray-200 rounded-full w-10 mb-2.5"></div>
                            </div>
                            <div className="h-2 bg-gray-200 mt-3 rounded-full w-24 hidden sm:block"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <span className="sr-only">Loading...</span> */}
        </div>
    )
}

export function BlogSkeleton(){
    return(
        <div role="status" className="animate-pulse">

            <div className="flex justify-center">
                    <div className=" min-w-[400px] md:w-[680px] w-screen flex flex-col justify-center px-6">
                        <div className="font-bold text-5xl break-words">
                            <div className="h-10 bg-gray-200 rounded-full mb-4"></div>
                            <div className="h-10 bg-gray-200 rounded-full mb-4"></div>
                            <div className="h-10 bg-gray-200 rounded-full mb-4"></div>
                        </div>
                        <div className="flex gap-2 my-10 h-[36px] w-[680px] border-b">
                            <div id="anmol1" className="h-6 bg-gray-200 rounded-full w-6 mb-4"></div>
                            <div id="anmol2" className="h-2 bg-gray-200 rounded-full w-24 mb-2.5 mt-2"></div>
                            <div id="anmol3" className="h-2 bg-gray-200 rounded-full w-24 mb-2.5 mt-2 hidden sm:block"></div>
                        </div>
                        <div className="leading-[32px] text-[18px] font-medium font-blog text-gray-600 break-words">
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div className=" mt-5 leading-[32px] text-[18px] font-medium font-blog text-gray-600 break-words">
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div className=" mt-5 leading-[32px] text-[18px] font-medium font-blog text-gray-600 break-words">
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                    </div>
                </div>





            {/* <div >
                
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                <span className="sr-only">Loading...</span>
            </div> */}
        </div>

    )
}