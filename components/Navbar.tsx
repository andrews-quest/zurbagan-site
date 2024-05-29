import React from "react";
import "./Navbar.css";
import logo from "../resources/images/logo_navbar.png";

export const Navbar: React.FC <{

}> = ({

}) => {
    return (
        <div id="navbar">
            <div>
                <img src={logo}></img>
            </div>
            <div id="navbar_menu">
                <div><p>Aбонентам</p></div>
                <div><p>Інтернет</p></div>
                <div><p>Телебачення</p></div>
            </div>
            <div>
                <div id="account_button">Мій Кабінет</div>
            </div>
        </div>
    )
}