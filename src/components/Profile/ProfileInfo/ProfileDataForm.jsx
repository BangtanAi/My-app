import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from '../../common/FormsControls/FormsControl';
import s from './ProfileInfo.module.css';

const ProfileDataForm = ({handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit}>
    <div><button onClick={() => {}}>save</button></div>
    <div>
        <b>Full name:</b> <Field validate={[]} placeholder={'Full name'} name={'fullName'} component={Input} />
    </div> 
    <div>
        <b>Looking for a job:</b> <Field validate={[]} name={'lookingForAJob'} component={Input} type={'checkbox'} />
    </div> 
    <div>
        <b>My professional skills:</b> <Field validate={[]} placeholder={'My professional skills'} name={'lookingForAJobDescription'} component={Textarea} />
    </div>  
     <div>
        <b>About me:</b> 
         <Field validate={[]} placeholder={'About me'} name={'aboutMe'} component={Textarea} />
    </div> 
     <div>
        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <div className={s.contact} >
                <b>{key}:</b> <Field validate={[]} name={'contacts.' + key} component={Input} placeholder={key} />
            </div>
        })}
    </div>  
 </form>
}

const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormRedux;