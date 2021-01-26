
import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogItem;

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import s from './../Dialogs.module.css';

// const DialogItem = (props) => {
//     let path = '/dialogs/' + props.id;
//     return <div className={s.dialog + ' ' + s.active}>
//         <img src="https://img.discogs.com/4FDnoFEJvPZwpVOqyL4XfJCixF4=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-1362134-1545052515-4503.jpeg.jpg" alt=""/>
//     <NavLink to={path}>{props.name}</NavLink>
// </div>
// }


// export default DialogItem;