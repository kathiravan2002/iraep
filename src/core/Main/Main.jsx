import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx"


export default function Main() {
    return (

        <div className="flex flex-col justify-between min-h-screen">
            <Header />

            <main className={` w-auto mx-auto lg:mt-[140px] mt-[125px] max-w-screen-xl  px-5 2xl:px-0 py-5 lg:mb-6 mb-3 `}>

                <Outlet />
            </main>
            <Footer />
        </div>


    );
}
