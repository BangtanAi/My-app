import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.dialog + ' ' + s.active}>
    <NavLink to={path}>{props.name}</NavLink>
</div>
}

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
}


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Aidana' id='1'/>
                <DialogItem name='Dima' id='2'/>
                <DialogItem name='Andrey' id='3'/>
                <DialogItem name='Sasha' id='4'/>
                <DialogItem name='Victor' id='5'/>
                <DialogItem name='Valera' id='6'/>
            </div>
            <div className={s.messages}>
                <Message message ='Hi' />
                <Message message ='How are you doing?' />
                <Message message ='Where are you from?' />
                <Message message ='Yo' />
                <Message message ='Yo' />
            </div>
        </div>
    )
}

export default Dialogs;