//第三方lib
import React from 'react';
import uuid  from 'node-uuid';//一個專門產出獨特id的npm 套件
import moment from 'moment';
//components
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from 'TodoAPI';
/*
性質：stateful component
負責工作：將state傳遞給子component，並藉由他們更新之
接收props：無
*/
let TodoApp = React.createClass({
  getInitialState: function () {
    return {
      //從TodoAPI呼叫getTodos()得到成為state.todos
      todos: TodoAPI.getTodos(),
      showCompleted: false,
      searchText: ''
    };
  },
  //在render function後執行，如果state或props有更新的話才會執行
  componentDidUpdate:function(){
    //呼叫TodoAPI component的setTodos()
    //將目前state傳入TodoAPI為參數
    TodoAPI.setTodos(this.state.todos);
  },
  //經過AddTodo component回傳更新state
  handleAddTodo: function(text){

    this.setState({
      todos:[
        ...this.state.todos,//將目前的state引入進來
        {
          id:uuid(),//id如果要是獨特獨有的，我們要用node的套件node-uuid
          text:text,//這邊接AddTodo component傳來的user輸入就好
          completed:false,//預設當然為false因為才剛增加應該還沒做吧
          createAt: moment().unix(),//將會返回timestamp，我們要轉為format
          completedAt: undefined//完成時間
         }
      ]
    });
  },

  //經過TodoSearch component回傳更新state
  handleSearch:function(showCompleted,searchText){
    this.setState({
      showCompleted:showCompleted,
      searchText:searchText.toLowerCase()
    });
  },
  //切換顯示的待辦事項，已完成或未完成
  //經過Todo component -> TodoList component -> TodoApp component
  handleToggle: function(id){
   //找出state.todos.id等於傳進來的id，如果等於那就切換狀態
   let updateTodos = this.state.todos.map((todo)=>{
        if(todo.id === id){
          todo.completed = !todo.completed;
          //todo.completed為true時返回 moment().unix()，為false返回undefined
          //再勾選時會切換完成狀態並視情況返回時間
          todo.completedAt = todo.completed ? moment().unix() : undefined;
        }
        //不用else的原因是，預設就顯示todo啦，也就是todos裡面單一的object
        return todo;
   });
   

   this.setState({todos:updateTodos});
  },
  render: function () {
    let {todos,showCompleted,searchText} = this.state;
    //這個會透過prop傳至TodoList且在TodoList內map
    let filteredTodos = TodoAPI.filterTodos(todos,showCompleted,searchText);
    return (
      <div>
        <h1>購物車component測試，TodoAPP版本</h1>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
