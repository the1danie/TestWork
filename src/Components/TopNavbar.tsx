import {HiOutlineMenuAlt1} from "react-icons/hi";
import {PiLineVerticalLight} from "react-icons/pi";
import {MdNavigateNext} from "react-icons/md";

export default function TopNavbar() {
    return (
        <div className="grid mb-4">
            <div
                className="flex items-center justify-between h-16 rounded-sm bg-gray-50 dark:bg-black w-full">
                <div className="text-xl text-gray-400 dark:text-gray-500 flex items-center">
                    <HiOutlineMenuAlt1 className={'text-white'}/>
                    <PiLineVerticalLight className={'text-[#292524] ml-2 mr-2'}/>
                    <p className={'text-grey-500'}>Home</p>
                    <MdNavigateNext className={'ml-3 mr-3'}/>
                    <p className={'text-white'}>Materials</p>
                </div>
            </div>
            <hr className="my-1 border-t-2 border-gray-300 dark:border-[#252120]"/>


        </div>

    )
}
