import {MdDone} from "react-icons/md";
import avatar from "../assets/avatartion.svg";
import done from "../assets/Vector.svg";
import smile from "../assets/Vector (1).svg";
import bookmark from "../assets/stash_save-ribbon.svg";
import trash from "../assets/material-symbols_delete-outline-rounded.svg";
import dots from "../assets/mage_dots.svg";

export default function RenderObject() {
    return (
        <div
            className=" h-48 mt-4 rounded-sm bg-gray-50 dark:bg-black p-4 border border-gray-300 dark:border-[#292524]">
            <div className="flex flex-row justify-between items-start mt-2 w-full">
                <MdDone className="text-white text-2xl mr-2 mt-2"/>
                <img src={avatar} alt="Avatar" className="w-10 h-10"/>
                <div className="flex flex-col ml-3">
                    <span className="text-white text-sm font-semibold">William Smith</span>
                    <a href="#" className="text-blue-500 underline text-xs">instagram.com</a>
                </div>
                <div className="ml-auto flex flex-col items-end">
                    <p className="text-white text-xs mt-2">27.01.2024, 17:30</p>
                </div>
            </div>
            <div className="text-white mt-4">
                <p>Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project
                    details and have some ideas I'd like to share. It's crucial that we
                    align on our next steps to ensure the project's success. Please come prepared with any
                    questions or insights you may have. Looking forward to</p>
            </div>
            <div className="text-white mt-4 flex flex-row justify-between">
                <div>
                    <span className="text-md bg-[#292524] text-white px-2 py-1 rounded-lg">meeting</span>
                    <span className="text-md bg-[#22C55E] text-black px-2 py-1 rounded-lg ml-2">work</span>
                    <span
                        className="text-md bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">important</span>
                </div>
                <div className={'flex flex-row gap-2'}>
                    <img src={done} alt="Avatar" className="w-6 h-6"/>
                    <img src={smile} alt="Avatar" className="w-6 h-6"/>
                    <img src={bookmark} alt="Avatar" className="w-6 h-6"/>
                    <img src={trash} alt="Avatar" className="w-6 h-6"/>
                    <img src={dots} alt="Avatar" className="w-6 h-6"/>
                </div>
            </div>

        </div>
    )
}
