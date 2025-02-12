import avatar from "../assets/avatartion.svg";
import {TfiMenu} from "react-icons/tfi";
import {IoSearch} from "react-icons/io5";
import {FaHome, FaRegQuestionCircle} from "react-icons/fa";
import {MdOutlineEmail} from "react-icons/md";
import {LuCalendarCheck2} from "react-icons/lu";
import {BsSend} from "react-icons/bs";

export default function Navbar() {
    return (
        <aside id="default-sidebar"
               className="fixed top-0 left-0 z-40 w-84 h-screen transition-transform -translate-x-full sm:translate-x-0"
               aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-950 flex flex-col">

                <ul className="space-y-2 font-medium flex-1">
                    <li>
                        <button
                            className="flex items-center gap-4 w-full text-left p-2 rounded-lg active:border-2 dark:active:border-blue-500"
                            onClick={() => console.log("Клик по профилю")}
                        >
                            <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-xl"/>
                            <div className="font-medium dark:text-white">
                                <div>Самрук-Казына</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">Enterprise
                                </div>
                            </div>
                            <TfiMenu className={'ml-18 dark:text-white'}/>
                        </button>
                    </li>
                    <li>
                        <form className="max-w-md mx-auto">
                            <label htmlFor="default-search"
                                   className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div className="relative">
                                {/* Иконка поиска */}
                                <div
                                    className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <IoSearch
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-white group-hover:text-gray-900 dark:group-hover:text-white"/>
                                </div>
                                {/* Поле ввода */}
                                <input
                                    type="search"
                                    id="default-search"
                                    className="block w-full p-3 ps-10 text-sm
                                                    border-[#292524] border-2 rounded-lg bg-gray-50
                                                    focus:border-[#292524] focus:ring-blue-500 focus:ring-2 focus:outline-none
                                                    dark:bg-[#0c0a09] dark:border-[#292524] dark:placeholder-white dark:text-white"
                                    placeholder="Search documentation"
                                />


                                <div className="absolute end-2.5 bottom-2.5 flex items-center space-x-1">
                                    <div
                                        className="bg-gray-200 dark:bg-[#292524] px-2 py-0 rounded-md text-gray-700 dark:text-gray-300 text-xl font-mono">
                                        ⌘
                                    </div>
                                    <div
                                        className="bg-gray-200 dark:bg-[#292524] px-2.5 py-0.5 rounded-md text-gray-700 dark:text-gray-300 text-md font-mono">
                                        K
                                    </div>
                                </div>
                            </div>
                        </form>
                    </li>

                    <p className={'dark:text-[#b2b2b3] ml-2 mt-10'}>General</p>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#27272a] group">
                            <FaHome
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            />
                            <span className="ms-2">Analytics</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#27272a] group">
                            <MdOutlineEmail
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            />
                            <span className="flex-1 ms-2 whitespace-nowrap">Press Releases</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#27272a] group">
                            <LuCalendarCheck2
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            />
                            <span className="flex-1 ms-2 whitespace-nowrap">Materials</span>
                            <span
                                className="text-lg mr-32 inline-flex items-center justify-start px-3 py-0.5 text-sm font-medium text-blue-800 bg-blue-100 rounded-lg dark:bg-[#adfa1b] dark:text-black">New</span>
                        </a>
                    </li>
                </ul>
                {/* Последние два элемента, которые должны быть внизу */}
                <ul className="space-y-2 font-medium mt-auto">
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#27272a] group">
                            <FaRegQuestionCircle
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            />
                            <span className="flex-1 ms-2 whitespace-nowrap">Help & Support</span>
                        </a>
                    </li>
                    <li>
                        <a href="#"
                           className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-[#27272a] group">
                            <BsSend
                                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                            />
                            <span className="flex-1 ms-2 whitespace-nowrap">Feedback</span>
                        </a>
                    </li>
                </ul>
                <button
                    className="flex items-center gap-4 mt-4 w-full text-left p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#27272a]"
                    onClick={() => console.log("Клик по профилю")}
                >
                    <img src={avatar} alt="Avatar" className="w-10 h-10 rounded-xl"/>
                    <div className="font-medium dark:text-white">
                        <div>Jese Leos</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Joined in August 2014</div>
                    </div>
                    <TfiMenu className={'ml-12 dark:text-white'}/>
                </button>

            </div>

        </aside>
    )
}
