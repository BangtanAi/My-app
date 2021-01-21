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
    let dialogs = [
        {id: 1, name: 'Aidana'},
        {id: 2, name: 'Dima'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valery'}

    ]
    let messages = [
        {id: 1, message: 'Hi'},
        {id: 1, message: 'How are you doing?'},
        {id: 1, message: 'Where are you from?'},
        {id: 1, message: 'Yo'},
        {id: 1, message: 'Yo'},   
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message ={m.message} />)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;