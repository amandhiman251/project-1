import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './UserOutput/UserOutput.css';

class App extends Component {
  state = (
    { username: "Aman Dhiman"}
  )
  userChangeHandler = (event) => {
    this.setState( {
      username: event.target.value
    });
  }
   
  render() {
    const myStyle = {
      width: "176px",
      margin: "20px auto",
      border: "2px solid #eee",
      boxShadow: "0 2px 2px #ccc"
    };
    return (
      <div className="App">
        <UserInput style = {myStyle} change = {this.userChangeHandler} username = {this.state.username} />
        <UserOutput username = {this.state.username} />
        <UserOutput username = {this.state.username} />
        <UserOutput username = {this.state.username} />
        <UserOutput username = {this.state.username} />
      </div>
    );
  }
}


export default App;
