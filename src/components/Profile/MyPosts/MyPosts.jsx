import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 25},
    {id: 1, message: "It's my first message", likesCount: 13},  
]
    return (
        <div className={s.postsBlock}>
          <h2>My posts</h2>
          <div>
            <div><textarea></textarea></div>
            <div><button>Add post</button></div>
            
          </div>
          <div className = {s.posts}>
            <Post message = {postsData[0].message} likesCount = {postsData[0].likesCount} />
            <Post message = {postsData[1].message} likesCount = {postsData[1].likesCount} />
            <Post />
            <Post />
            <Post />
          </div> 
        
      </div>
    )
}

export default MyPosts;