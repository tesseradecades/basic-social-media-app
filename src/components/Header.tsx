import React from 'react';

function Header({ user, setUser }: {user: string,setUser:React.Dispatch<React.SetStateAction<string>>}){
    return (
        <div>
            Welcome, {user}!
            <button onClick={()=>setUser('')}>
                Logout
            </button>
        </div>
    );
}

export default Header