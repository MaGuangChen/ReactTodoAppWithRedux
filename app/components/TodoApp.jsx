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
          text: 'Walk the dog',
          completed: false
        }, {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        }, {
          id: uuid(),
          text: 'Leave mail on porch',
          completed: true
        }, {
          id: uuid(),
          text: 'Play video games',
          completed: false
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
          text:text,//這邊接AddTodo component傳來的user輸入就好
          completed:false//預設當然為false因為才剛增加應該還沒做吧
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
  //切換顯示的待辦事項，已完成或未完成
  //經過Todo component -> TodoList component -> TodoApp component
  handleToggle: function(id){
   //找出state.todos.id等於傳進來的id，如果等於那就切換狀態
   let updateTodos = this.state.todos.map((todo)=>{
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        //不用else的原因是，預設就顯示todo啦，也就是todos裡面單一的object
        return todo;
   });
   

   this.setState({todos:updateTodos});
  },
  render: function () {
    let {todos} = this.state;

    return (
      <div>
        <h1>代辦事項</h1>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
