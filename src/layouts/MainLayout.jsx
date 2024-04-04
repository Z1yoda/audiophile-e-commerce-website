import { Outlet, NavLink, Link } from "react-router-dom";
import Navigation from "../Components/Navigation";
import CategoryCards from "../Components/CategoryCards";
import { useContext } from "react";
import Footer from "../Components/Footer";

function MainLayout() {

    return (
        <div>
            <Navigation />
            <div className="">
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
}

export default MainLayout;
