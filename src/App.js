import React from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './UserOutput/UserOutput.css';

const App =() => {
  const state = (
    { username: "Aman Dhiman"}
  )
 const userChangeHandler = (event) => {
    this.setState( {
      username: event.target.value
    });
  }
   
  const myStyle = {
    width: "176px",
    margin: "20px auto",
    border: "2px solid #eee",
    boxShadow: "0 2px 2px #ccc"
  };
  return (
    <div className="App">
      <UserInput style = {myStyle} change = {userChangeHandler} username = {state.username} />
      <UserOutput username = {state.username} />
      <UserOutput username = {state.username} />
      <UserOutput username = {state.username} />
      <UserOutput username = {state.username} />
    </div>
  );
}


export default App;
