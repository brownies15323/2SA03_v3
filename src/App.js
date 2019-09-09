import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard.js';
import WordCard from './WordCard.js';

const word = "alone";
class App extends Component {
  render() {
    return (
      <div>
        <WordCard value="alone" />
      </div>
    );
  }
}
export default App;