import React from 'react';
import ReactDOM from 'react-dom';

const rootNode = document.getElementById('root');

const base_url ='https://api.github.com/users/';
function App(){
    const [user, setUser] = React.useState(null);
    const [username, setUsername] = React.useState('tesseradecades');
    const searchInput = React.useRef();
    React.useEffect(()=>{
        getUser();
    },[]);

    async function getUser(){
        const response = await fetch(`${base_url}${username}`);
        const data = await response.json();
        setUser(data);
    }

    function handleClearInput(){
        searchInput.current.value = '';
        searchInput.current.focus();
    }

    return (
    <div>
        <input 
            type="text" 
            placeholder="Input username" 
            onChange={event=>setUsername(event.target.value)}
            ref={searchInput}
        />
        <button onClick={getUser}>Search</button>
        <button onClick={handleClearInput}>Clear Input</button>
        {user ? (
            <div>
                <h2>{user.name}</h2>
                <p>{user.bio}</p>
                <img alt="avatar" src={user.avatar_url} style={{ height: 50}}/>
            </div>
        ) : <p>Element loading...</p>}
    </div>
    );            
}

ReactDOM.render(<App/>,rootNode);
