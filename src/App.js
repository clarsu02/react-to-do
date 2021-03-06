import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

 class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false },
         { description: 'Buy new dishes', isCompleted: false }
       ],
       newTodoDescription: ""
     };
   }

   handleChange(e) {
      this.setState({ newTodoDescription: e.target.value })
}
   handleSubmit(e) {
     e.preventDefault();//this prevents the default page from reloading
     if (!this.state.newTodoDescription) { return }
     console.log("handleSubmit called");
     const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
   }

   toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  } // this code changes the state of the App component and the UI

    deleteTodo(index) {
      const todos = this.state.todos.slice(); //this is the constant that creates the new slice of data that allows us to delete items from the array
      const toDelete = todos[index]; //this gives them there own index
      const filteredList = todos.filter(todos => todos !==toDelete ); //creates a const that passes the filtered or deleted items to const "filterListed"
      this.setState({ todos: filteredList }); //sets the state to the filterd lists

  }
   render() {
     return (
      <div className="App">
       <ul>
       { this.state.todos.map( (todo, index) =>
         <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteTodo={ () => this.deleteTodo(index) }/> )}
       </ul>

       <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
        </form>
     </div>
     );
   }
 }

 export default App;
// onSubmit is an attribute,// e is the parameter and e is short for event
