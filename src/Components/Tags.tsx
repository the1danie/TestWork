import {PiLineVerticalLight} from "react-icons/pi";
import {IoCloseSharp} from "react-icons/io5";

export default function Tags() {
    return (
        <div className="flex justify-between">
            <div className="flex">
                <form className="flex flex-wrap items-center mt-2 gap-3">
                    <button type="submit"
                            className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap">
                                        <span className="text-md flex flex-wrap items-center">
                                            Materials
                                            <PiLineVerticalLight/>
                                            <span
                                                className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">Processed</span>
                                            <span
                                                className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">Saved</span>
                                        </span>
                    </button>
                    <button type="submit"
                            className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap">
                                        <span className="text-md flex flex-wrap items-center">
                                            Sentiment
                                            <PiLineVerticalLight/>
                                            <span
                                                className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">Positive</span>
                                        </span>
                    </button>
                    <button type="submit"
                            className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap">
                                        <span className="text-md flex flex-wrap items-center">
                                            Geography
                                            <PiLineVerticalLight/>
                                            <span
                                                className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">Kazakhstan</span>
                                        </span>
                    </button>
                    <button type="submit"
                            className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap">
                                        <span className="text-md flex flex-wrap items-center">
                                            Tags
                                            <PiLineVerticalLight/>
                                            <span
                                                className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">meeting</span>
                                            <span
                                                className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">work</span>
                                            <span
                                                className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">important</span>
                                        </span>
                    </button>
                    <button type="submit"
                            className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap">
                                        <span className="text-md flex flex-wrap items-center">
                                            More
                                            <PiLineVerticalLight/>
                                            <span className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">+ 4 selected</span>
                                        </span>

                    </button>
                </form>
            </div>
            <button className="text-white inline-flex items-center whitespace-nowrap text-lg">
                Reset <IoCloseSharp className={'ml-3'}/>
            </button>

        </div>
    )
}
