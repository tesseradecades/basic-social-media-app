import React from 'react';

function Login({ setUser }: {setUser:React.Dispatch<React.SetStateAction<string>>}){
    const [username,setUsername] = React.useState('');

    function handleSubmit(event: React.FormEvent){
        event.preventDefault();
        setUser(username);
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={event=> setUsername(event.target.value)}
                    placeholder="Input username"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login