import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
            </div>
            <div className={s.item}>
                <a>News</a>
            </div>
            <div className={s.item}>
                <a>Music</a>
            </div>
            <div className={s.item}>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import s from './Navbar.module.css';

// // let s = {
// //   'nav': 'Navbar_nav__3oxgY',
// //   'item': 'Navbar_item__330ta',
//     //  'active': 'bdhbhbffj'
// // }

// let c1 = 'item';
// let c2 = 'active';
// let classes = c1 + ' ' + c2;
// let classesNew = `${s.item} ${c2}`;


// const Navbar = () => {
//     return (
//       <nav className = {s.nav}>
//       <div className = {s.item}>
//         <NavLink to = '/profile' activeClassName={s.activeLink}>Profile</NavLink>
//       </div>
//       <div className = {`${s.item} ${s.active}`}>
//         <NavLink to = '/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
//       </div>
//       <div className = {s.item}>
//         <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
//       </div>
//       <div className = {s.item}>
//         <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
//       </div>
//     </nav>
//     )
// }

// export default Navbar;