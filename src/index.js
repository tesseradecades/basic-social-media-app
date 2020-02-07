import React from 'react';
import ReactDOM from 'react-dom';

const rootNode = document.getElementById('root');


function App(){
    const people = ["Nate",'Nolan','Frank']
    function handleInputChange(event){
        const inputValue = event.target.value;
        console.log(inputValue);
    }
    return(
        <ul>
            {people.map( (person,i)=><Person key={i} person={person}/>)}
            <input onChange={handleInputChange}/>
        </ul>
    );            
}

function Person(props){
    function handlePersonClick(event){
        alert(props.person);
        console.log(event);
    }
    return <li onClick={handlePersonClick}>{props.person}</li>
}

ReactDOM.render(<App/>,rootNode);