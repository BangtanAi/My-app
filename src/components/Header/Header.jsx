import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://1.bp.blogspot.com/-xfZ-qzG3Y_U/VuDoUu4gl4I/AAAAAAAAAIw/JiX_55duj_M/s1600/00205-3D-art-logo-design-free-logos-online-011.png' />

        <div className={s.loginBlock}>
            { props.isAuth ? 
            <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>  
            : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;

