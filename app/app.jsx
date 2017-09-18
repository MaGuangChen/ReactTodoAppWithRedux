const React = require('react');
const ReactDOM = require('react-dom');
const { Route, Router, IndexRoute, hashHistory } = require('react-router');

var TodoApp = require('TodoApp');

// 加入redux的store
const actions = require('actions');
//要使用configure method才可以讓store可以用
const store = require('configureStore').configure();
store.subscribe(() => {
  console.log('new state', store.getState());
});

store.dispatch(actions.addTodo('掃地'));
store.dispatch(actions.setSearchText('掃'));
store.dispatch(actions.showCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
