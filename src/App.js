import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content';

let x = 20
class App extends Component{
  render(){
    return (
      <div className="App">
        Hello {x}
        <Content/>
      </div>
    );
  }
}

export default App;

