import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../utils/validators/validator';
import { Textarea } from '../common/FormsControls/FormsControl';

const Dialogs = (props) => {
   let state = props.dialogsPage;

   let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />  );
   let messagesElements = state.messages.map( m => <Message message={m.message}/> );
   let newMessageBody = state.newMessageBody;

   let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);
}
   
   return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component = {Textarea}
                validate={[required, maxLength50]}
                name ='newMessageBody' placeholder ='Enter your message' />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;

