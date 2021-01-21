import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 25},
    {id: 1, message: "It's my first message", likesCount: 13},  
]
  let postsElements = posts.map(p => <Post message = {p.message} likesCount = {p.likesCount} />)
    return (
        <div className={s.postsBlock}>
          <h2>My posts</h2>
          <div>
            <div><textarea></textarea></div>
            <div><button>Add post</button></div>
            
          </div>
          <div className = {s.posts}>
            {postsElements}
            <Post />
            <Post />
            <Post />
          </div> 
        
      </div>
    )
}

export default MyPosts;