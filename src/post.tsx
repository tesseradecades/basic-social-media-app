import React from 'react';

export type IPost={image:File,content:string,user:string,id:number}

export interface PostState{
    posts: IPost[]
}

export enum PostReducerCommand{
    ADD_POST,
    DELETE_POST
}

interface PostReducerActions{
    payload:{
        id:number
        post:IPost
    }
    type:PostReducerCommand
}

export function postReducer(state:PostState, action:PostReducerActions){
    switch(action.type){
        case PostReducerCommand.ADD_POST:{
            const newPost = action.payload.post;
            return {posts: [newPost, ...state.posts] };
        }
        case PostReducerCommand.DELETE_POST:{
            const deletedPostId = action.payload.id;
            return {posts: state.posts.filter(post => post.id !== deletedPostId)};
        }
        default:{
            return state;
        }
    }
}

export interface IContextProps{
    state:PostState;
    dispatch: React.Dispatch<PostReducerActions>;
}

export const PostContext = React.createContext({state: {posts: []} as PostState} as IContextProps);

export default postReducer;