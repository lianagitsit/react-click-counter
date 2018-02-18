import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Click Counter</h1>
        </header>
        <ClickCounter />
        <KeyLogger />
      </div>
    );
  }
}

class ClickCounter extends Component {
  constructor(props){
    super(props);
    this.state = {counter: 0, win: ""};

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }))

    if (this.state.counter === 4){
      this.setState({win: "You win!"})
    }
  }

  render(){
    var winstring = (<h2>You Won!</h2>);
    var victoryString = this.state.counter >= 5 ? winstring : false;
    if (this.state.counter <= 7) {
    return(
      <div className="Click-counter">
        <button onClick={this.handleClick}>Click me</button>
        <p>You have clicked {this.state.counter} times!</p>
        <h2>{this.state.win}</h2>
        {victoryString}
      </div>
    );
  }
    else {
      return (<div><ClickCounter /><ClickCounter /></div>)
    }
  
  }
}

class KeyLogger extends Component {
  constructor(props){
    super(props);
    this.state = {
      letters: []
    };
  }

  componentWillMount(){
    document.addEventListener("keyup", this.handleKeyUp.bind(this));
  }

  handleKeyUp(e) {
    var newStateArray = this.state.letters.slice();
    newStateArray.push(e.key);
    this.setState({
      key: e.key,
      letters: newStateArray
    })
  }

  render(){
    return(
      <div>
        {this.state.key}
        <p>Log: {this.state.letters}</p>
      </div>
    );
  }
}

export default App;
