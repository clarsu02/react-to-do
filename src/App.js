import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { description: 'Walk Dog', isCompleted: true},
        { description: 'Do Laundry', isCompleted: false},
        { description: 'Vaccumm House',isCompleted: true},
      ]
    };
  }
  render() {
    return (
      <div className="App">
      <ul>
        <ToDo />
        <ToDo />
        { this.state.todos.map ( (todo,index)=>
          <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } />
           )}
         </ul>
       </div>
     );
   }
 }
    )}
    </ul>
    </div>
    );
  }
}

export default App;
