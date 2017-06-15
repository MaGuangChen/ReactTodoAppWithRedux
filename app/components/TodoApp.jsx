import React from 'react';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
/*
性質：stateful component
負責工作：將state傳遞給子component，並藉由他們更新之
接收props：無
*/
let TodoApp = React.createClass({
  getInitialState: function () {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Leave mail on porch'
        }, {
          id: 4,
          text: 'Play video games'
        }
      ],
      showCompleted: false,
      searchText: ''
    };
  },
  //經過AddTodo component回傳更新state
  handleAddTodo: function(text){
    alert(`新增代辦 ${text}`);
  },

  //經過TodoSearch component回傳更新state
  handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    })
  },

  render: function () {
    let {todos} = this.state;

    return (
      <div>
        <h1>代辦事項</h1>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
