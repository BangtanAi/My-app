import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        newPostText: 'it-kamasutra'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    sidebar: {}
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;

// import {rerenderEntireTree} from './../render.js'
// let state = {
//     profilePage: { 
//         posts: [
//         {id: 1, message: 'Hi, how are you?', likesCount: 25},
//         {id: 2, message: "It's my first message", likesCount: 13},
//         {id: 3, message: "Omggg", likesCount: 5},  
//         {id: 4, message: "Amazing", likesCount: 0}
//     ]},
//     dialogPage: {
//         dialogs: [
//         {id: 1, name: 'Aidana'},
//         {id: 2, name: 'Dima'},
//         {id: 3, name: 'Andrey'},
//         {id: 4, name: 'Sasha'},
//         {id: 5, name: 'Victor'},
//         {id: 6, name: 'Valery'}
//     ],
//         messages: [
//         {id: 1, message: 'Hi'},
//         {id: 1, message: 'How are you doing?'},
//         {id: 1, message: 'Where are you from?'},
//         {id: 1, message: 'Yo'},
//         {id: 1, message: 'Yo'}
//     ]},
// }

// export let addPost = (postMessage) => {
//     let newPost = {
//         id: 5,
//         message: postMessage,
//         likesCount: 0
//     }

//     state.profilePage.posts.push(newPost);
//     rerenderEntireTree(state);
// }


// export default state;