import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user-image.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if(!profile){
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
       if(e.target.files.length) {
           savePhoto(e.target.files[0]);
       }
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto} src={profile.photos.large || userPhoto} />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                <ProfileStatusWithHooks status = {status} updateStatus = {updateStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;
