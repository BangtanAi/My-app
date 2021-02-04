import React from 'react';
import styles from './users.module.css';

const Users = (props) => {
  if(props.users.length === 0){
    props.setUsers([
        {id: 1, photoUrl: 'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MDg5NTgzMTE1/robert-pattinson-438798-1-402.jpg', 
            followed: false, fullname: 'Dmitry', status: 'I am a boss', location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, photoUrl: 'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MDg5NTgzMTE1/robert-pattinson-438798-1-402.jpg', 
            followed: true, fullname: 'Sasha', status: 'I am a boss too', location: {city: 'Astana', country: 'Kazakhstan'}},
        {id: 3, photoUrl:'https://www.biography.com/.image/t_share/MTE5NTU2MzE2MDg5NTgzMTE1/robert-pattinson-438798-1-402.jpg', 
            followed: false, fullname: 'Andrew', status: 'I am a boss too', location: {city: 'Kiev', country: 'Ukraine'}}
      ]
    )
  }
  
    return <div>
       {
         props.users.map( u => <div key={u.id}>
           <span>
             <div>
                <img src={u.photoUrl} className={styles.userPhoto}/>
             </div>
             <div>
               { u.followed
                ? <button onClick = {() => {props.unfollow(u.id)}}>Unfollow</button>
                : <button onClick = {() => {props.follow(u.id)}}> Follow </button>}
             </div>
           </span >
           <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
           </span>
           </div>) 
       } 
      </div>
  
}

export default Users;
