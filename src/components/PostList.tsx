import React from 'react';
import PostComponent from './PostComponent';
import { PostState } from '../post';

function PostList({posts}: {posts:PostState}){
    return (
        <>
        {posts.posts.map( post=>(<PostComponent key={post.id} {...post}/>))}
        </>
    );
}

export default PostList