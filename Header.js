
import { useState } from "react";

const Header =  () => {
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header Render");

    return  (
        <div className="header">
            <div className="logo-container">
              
            <img className="logo" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsyoNF-X5TDarm3VdUjvWxpExeVDnSdIc-3g&s"} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>SERVICE</li>
                    <li>TECHNOLOGY</li>
                    <li>COMPANY</li>
                    <li>PORTFOLIO</li>
                    <li>CONTACT US</li>
                    <button className="login"
                    onClick={() => {
                        btnNameReact === "Login"
                        ? setBtnNameReact("Logout")
                        : setBtnNameReact("Login");
                    }}
                    >{btnNameReact}</button>
                </ul>

            </div>
        </div>
    );
};

export default Header;