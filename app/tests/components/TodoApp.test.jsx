//要用到的庫
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect'; 

//要用到的component
import TodoApp from 'TodoApp';

describe('TodoApp component',()=>{
    it('測試TodoApp component是否存在',()=>{
       expect(TodoApp).toExist();
    });

    it('透過handleAddTodo應該會增加待辦事項object到this.state.todos',()=>{
        let todoText = 'paul傳過來啦test test';
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        //掏空目前的state.todos
        todoApp.setState({todos:[]});
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe('paul傳過來啦test test');

    });
});