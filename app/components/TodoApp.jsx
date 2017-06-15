import React from 'react';
import uuid  from 'node-uuid';//一個專門產出獨特id的npm 套件

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
          id: uuid(),//id如果要是獨特獨有的，我們要用node的套件node-uuid
          text: 'Walk the dog'
        }, {
          id: uuid(),
          text: 'Clean the yard'
        }, {
          id: uuid(),
          text: 'Leave mail on porch'
        }, {
          id: uuid(),
          text: 'Play video games'
        }
      ],
      showCompleted: false,
      searchText: ''
    };
  },
  //經過AddTodo component回傳更新state
  handleAddTodo: function(text){

    this.setState({
      todos:[
        ...this.state.todos,//將目前的state引入進來
        {
          id:uuid(),//id如果要是獨特獨有的，我們要用node的套件node-uuid
          text:text//這邊接AddTodo component傳來的user輸入就好
        }
      ]
    });
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
