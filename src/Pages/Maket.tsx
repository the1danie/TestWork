import {useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import RenderObject from "../Components/RenderObject.tsx";
import Navbar from "../Components/Navbar.tsx";
import HiddenBurger from "../Components/HiddenBurger.tsx";
import TopNavbar from "../Components/TopNavbar.tsx";
import Information from "../Components/Information.tsx";
import Tags from "../Components/Tags.tsx";



const Maket = () => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => { // Указываем тип события как KeyboardEvent
            if ((event.metaKey || event.ctrlKey) && event.key === "k") {
                event.preventDefault(); // Предотвращаем стандартное действие браузера
                document.getElementById("default-search")?.focus();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    return (
        <>
            <HiddenBurger/>
            <Navbar/>
            <div className="sm:ml-88">
                <div className="p-4 border-2 rounded-lg">
                    <TopNavbar/>
                    <Information/>
                    <Tags/>
                    <RenderObject/>
                    <RenderObject/>
                    <RenderObject/>
                    <RenderObject/>
                </div>
            </div>
        </>
    )
        ;
};

export default Maket;
