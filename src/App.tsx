import React from 'react';

import CreatePost from './components/CreatePost';
import Header from './components/Header';
import Login from './components/Login';
import PostList from './components/PostList';
import {IContextProps, PostContext, postReducer} from './post';
import {UserContext} from './user';


function App(){
    //user management
    const [user, setUser] = React.useState('');

    //post management
    const initialContext: IContextProps = React.useContext(PostContext);
    const [state, dispatch] = React.useReducer(postReducer,initialContext.state);
    const postProviderContext={state,dispatch}

    React.useEffect(()=>{
        document.title=user ? `${user}'s feed` : 'Please Login' 
    },[user]);

    if(!user){
        return <Login setUser={setUser}/>
    }else if(!initialContext.state){
        return <h1>error loading state</h1>
    }
    return (
        <PostContext.Provider value={postProviderContext}>
            <UserContext.Provider value={user}>
                <Header user={user} setUser={setUser}/>
                <CreatePost user={user} />
                <PostList posts={state}/>
            </UserContext.Provider>
        </PostContext.Provider>
        
    );
}

export default App