let React = require('react');
let TodoList = require('TodoList');

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
      ]
    };
  },
  render: function () {
    let {todos} = this.state;

    return (
      <div>
        <h1>代辦事項</h1>
        <TodoList todos={todos}/>
      </div>
    )
  }
});

module.exports = TodoApp;
