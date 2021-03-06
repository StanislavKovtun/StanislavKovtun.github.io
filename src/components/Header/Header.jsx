import React from "react";
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    // debugger
    return (
        <header className={s.header}>
            <img src='https://logodix.com/logo/1597112.png' />
            <div className={s.loginBlock}>
                {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;