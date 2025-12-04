import React, { useState } from "react";
import "./burger.css"; // ton CSS

export default function BurgerMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* Burger button */}
            <div className={`burger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Sidebar menu */}
            <div className={`menu ${open ? "open" : ""}`}>
                <button>big</button>
                <button>bb</button>
                <button>jn</button>
            </div>
        </>
    );
}
