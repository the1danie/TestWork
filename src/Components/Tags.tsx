import { useState } from "react";
import { PiLineVerticalLight } from "react-icons/pi";
import { IoCloseSharp } from "react-icons/io5";
import { GoPlusCircle } from "react-icons/go";
import { LuListFilter } from "react-icons/lu";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Tags() {
    // Состояние для выбранной даты и строки поиска
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>("");

    // Функция для обновления строки поиска
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="grid mb-4">

            {/* Search and Filter Section */}
            <div className="flex justify-between mb-4">
                {/* Search Form */}
                <div className="flex">
                    <form className="flex items-center mt-2">
                        <div className="relative w-full">
                            <input
                                type="text"
                                id="voice-search"
                                className="bg-gray-50 text-xl border border-gray-300 text-gray-100 text-sm rounded-lg block w-80 p-1.5 pl-4 dark:bg-black dark:border-[#292524] dark:placeholder-gray-400 dark:text-white"
                                placeholder="Search materials..."
                                value={searchQuery}  // Связываем значение с состоянием
                                onChange={handleSearchChange}  // Обработчик изменения
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap"
                        >
                            <GoPlusCircle className="w-5 h-5 mr-3" />
                            Add tag
                        </button>
                    </form>
                </div>

                {/* Date Picker and Filter Button */}
                <div className="flex">
                    <form className="flex items-center mt-2">
                        <DatePicker
                            selected={startDate}
                            onChange={(date: Date | null) => setStartDate(date)}  // Обработчик изменения даты
                            className="bg-gray-50 text-white border border-[#292524] text-sm rounded-lg focus:ring-blue-500 focus:border-[#292524] block w-full p-2.5 dark:bg-black dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholderText="Выбрать дату"
                        />
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap"
                        >
                            <LuListFilter className="w-5 h-5 mr-3" />
                            Filter
                        </button>
                    </form>
                </div>
            </div>

            {/* Tag Filters Section */}
            <div className="flex justify-between mb-4">
                <div className="flex">
                    <form className="flex flex-wrap items-center mt-2 gap-3">
                        {/* Material Filters */}
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap"
                        >
                            <span className="text-md flex flex-wrap items-center">
                                Materials
                                <PiLineVerticalLight />
                                <span className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">Processed</span>
                                <span className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">Saved</span>
                            </span>
                        </button>

                        {/* Sentiment Filters */}
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap"
                        >
                            <span className="text-md flex flex-wrap items-center">
                                Sentiment
                                <PiLineVerticalLight />
                                <span className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">Positive</span>
                            </span>
                        </button>

                        {/* Geography Filters */}
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap"
                        >
                            <span className="text-md flex flex-wrap items-center">
                                Geography
                                <PiLineVerticalLight />
                                <span className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">Kazakhstan</span>
                            </span>
                        </button>

                        {/* Tag Filters */}
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap"
                        >
                            <span className="text-md flex flex-wrap items-center">
                                Tags
                                <PiLineVerticalLight />
                                <span className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">meeting</span>
                                <span className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">work</span>
                                <span className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">important</span>
                            </span>
                        </button>

                        {/* More Filters */}
                        <button
                            type="submit"
                            className="inline-flex items-center py-2.5 px-3 text-sm font-medium text-white bg-black border border-[#292524] border-dashed rounded-lg whitespace-nowrap"
                        >
                            <span className="text-md flex flex-wrap items-center">
                                More
                                <PiLineVerticalLight />
                                <span className="bg-[#292524] text-white px-2 py-1 rounded-lg ml-2">+ 4 selected</span>
                            </span>
                        </button>
                    </form>
                </div>

                {/* Reset Button */}
                <button className="text-white inline-flex items-center whitespace-nowrap text-lg">
                    Reset <IoCloseSharp className="ml-3" />
                </button>
            </div>
        </div>
    );
}
