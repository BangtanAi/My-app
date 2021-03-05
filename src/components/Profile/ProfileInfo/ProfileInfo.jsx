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
                <ProfileStatus status = {'Hello my friends'} />
                {/* <p>About me: {props.profile.aboutMe}</p>
                <p>instagram: {props.profile.contacts.instagram}</p>
                <p>youtube: {props.profile.contacts.youtube}</p> */}

                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;

// import React from 'react';
// import s from './Profile.module.css';
// import MyPosts from './MyPosts/MyPosts';
// import ProfileInfo from "./ProfileInfo/ProfileInfo";

// const Profile = (props) => {

//     return (
//         <div>
//             <ProfileInfo />
//             <MyPosts posts={props.state.posts} addPost={props.addPost} />
//         </div>
//     )
// }

// export default Profile;
// import React from 'react';
// import s from './ProfileInfo.module.css';

// const ProfileInfo = () => {
//     return (
//       <div>
//        <div>
//         <img className = {s.img} src="https://cdn.wallpapersafari.com/33/45/x7E5WA.jpg" alt=""/>
//         </div>
//         <div className={s.descriptionBlock}>
//           ava + description
//         </div>
//       </div>
      
//     )
// }

// export default ProfileInfo;