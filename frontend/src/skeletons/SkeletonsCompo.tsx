function Skeletons(){
    return(
        <div role="status" className="animate-pulse">

            <div className="flex flex-col justify-center h-[202px] w-[680px]">
                <div className="w-full">
                    <div className="flex gap-2 h-[36px] w-[680px]">
                        <div id="anmol1" className="h-6 bg-gray-200 rounded-full w-6 mb-4"></div>
                        <div id="anmol2" className="h-2 bg-gray-200 rounded-full w-24 mb-2.5 mt-2"></div>
                        <div id="anmol3" className="h-2 bg-gray-200 rounded-full w-24 mb-2.5 mt-2"></div>
                    </div>
                    <div className="h-[166px]">
                        <div className="h-[108px]">
                            <div className="h-5 bg-gray-200 rounded-full mb-2.5 mt-2"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5 mt-5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                            <div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <div className="leading-7 text-sm bg-gray-200 mt-1 h-7 rounded-2xl pl-3 pr-3">
                                <div className="h-2 bg-gray-200 rounded-full w-10 mb-2.5"></div>
                            </div>
                            <div className="h-2 bg-gray-200 mt-3 rounded-full w-24"></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <span className="sr-only">Loading...</span> */}
        </div>
    )
}

export default Skeletons;