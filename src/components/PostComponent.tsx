import React from 'react';
import {IPost,PostContext, PostReducerCommand} from '../post';
import {UserContext} from '../user'

function PostComponent({image, content, user, id}: IPost){
    const currentUser = React.useContext(UserContext);
    const {dispatch} = React.useContext(PostContext);
    const isCurrentUser = currentUser === user;

    function handleDeletePost(){
        dispatch({type: PostReducerCommand.DELETE_POST, payload:{id, post:{} as IPost}});
    }

    return (
        <>
            {image && (
                <img 
                    style={{ height: 100, width: 200, objectFit: 'cover'}}
                    src={URL.createObjectURL(image)}
                    alt="Post cover"
                />
            )}
            <p>{content}</p>
            <div style={{color: isCurrentUser && "green"} as React.CSSProperties}>{user}</div>
            <div>
                {isCurrentUser && <button onClick={handleDeletePost}>Delete</button>}
            </div>
        </>
    );
}

export default PostComponent