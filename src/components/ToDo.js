import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li> A To-Do Will Go Here</li>
    );
  }

}
export default ToDo;
import React { Component } from "react";
import'.App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <ul>
        <ToDo />
        <ToDo />
      </ul>
    </div>
  );
  }
}
export default App;
