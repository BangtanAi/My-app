import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = props.messages.map(m => <Message message ={m.message} />)
    let newPostElement = React.createRef();
    let addPost = ()=>{
        let text = newPostElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div className={s.addPostBlock}>
            <div><textarea ref={newPostElement}></textarea></div>
            <div><button onClick={addPost}>Add post</button></div>
          </div>
            </div>
            
        </div>
    )
}

export default Dialogs;