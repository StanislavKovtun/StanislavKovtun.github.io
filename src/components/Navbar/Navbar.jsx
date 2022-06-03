import React from "react";
import s from './Navbar.module.css';

// console.log(s);

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <a>Profile</a>
            </div>
            <div className={s.item}>
                <a>Messages</a>
            </div>
            <div className={s.item}>
                <a>Main content</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;