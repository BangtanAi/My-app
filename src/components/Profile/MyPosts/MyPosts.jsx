import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../utils/validators/validator';
import { Textarea } from '../../common/FormsControls/FormsControl';

const MyPosts = React.memo(props => {
    console.log('RENDERRR');
    let postsElements =
        props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                { postsElements }
            </div>
        </div>
    )
});
const maxLength10 = maxLengthCreator(10);
const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name ='newPostText' component ={Textarea} placeholder ='Post message'
                validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm);

export default MyPosts;
