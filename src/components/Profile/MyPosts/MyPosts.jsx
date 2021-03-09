import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
  
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostBody);
    }
    // let onPostChange = () => {
    //     let text = newPostElement.current.value;
    //     props.updateNewPostText(text);
    // }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost} />
            {/* <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value = {props.newPostText} ></textarea>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div> */}
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component = 'textarea' name ='newPostBody' placeholder ='Write your post' />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddPostForm'})(AddPostForm);

export default MyPosts;
