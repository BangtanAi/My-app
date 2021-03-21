import React from 'react';
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from '../../common/FormsControls/FormsControl';

const ProfileDataForm = ({handleSubmit}) => {
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
    {/* <div>
        <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
        })}
    </div>  */}
 </form>
}

const ProfileDataFormRedux = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormRedux;