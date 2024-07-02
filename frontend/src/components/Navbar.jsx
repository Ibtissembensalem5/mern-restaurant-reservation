import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";  // Assurez-vous que le nom de l'icône est correct
import { data } from "../restApi.json";

function Navbar() {
    const [show, setShow] = useState(false);

    return (
        <nav> {/* Utilisation de <nav> à la place de <Nav> */}
            <div className="logo">Ben salem</div>
            <div className={show ? "navLinks showmenu" : "navLinks"}>
                <div className="links">
                    {data && data[0] && data[0].navbarLinks && data[0].navbarLinks.map(element => {
                        return (
                            <Link
                                to={element.link}
                                key={element.id}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                {element.title}
                            </Link>
                        );
                    })}
                </div>
                <button className="menuBtn">OUR MENU</button>
            </div>
            <div className="hamburger" onClick={() => setShow(!show)}>
                <GiHamburgerMenu /> {/* Assurez-vous que le nom de l'icône est correct */}
            </div>
        </nav>
    );
}

export default Navbar;
