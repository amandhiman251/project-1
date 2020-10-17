import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import './UserInput/UserInput.css';
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
    return (
      <div className="App">
        <UserInput change = {this.userChangeHandler} username = {this.state.username} />
        <UserOutput username = {this.state.username} />
        <UserOutput username = {this.state.username} />
        <UserOutput username = {this.state.username} />
        <UserOutput username = {this.state.username} />
      </div>
    );
  }
}


export default App;
