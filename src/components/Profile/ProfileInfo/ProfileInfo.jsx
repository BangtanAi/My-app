import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader />
    }
    return (
        <div>
            {/* <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'/>
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status = {props.status} updateStatus = {props.updateStatus}/>
                {/* <p>About me: {props.profile.aboutMe}</p>
                <p>instagram: {props.profile.contacts.instagram}</p>
                <p>youtube: {props.profile.contacts.youtube}</p> */}
            </div>
        </div>
    )
}

export default ProfileInfo;
