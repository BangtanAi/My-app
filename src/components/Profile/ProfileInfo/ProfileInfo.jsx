import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
      <div>
       <div>
        <img className = {s.img} src="https://cdn.wallpapersafari.com/33/45/x7E5WA.jpg" alt=""/>
        </div>
        <div className={s.descriptionBlock}>
          ava + description
        </div>
      </div>
      
    )
}

export default ProfileInfo;