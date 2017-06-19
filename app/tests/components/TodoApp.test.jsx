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
        //預期createAt toBeA number
        //expect(todoApp.state.todos[0].createdAt).toBeA('number');

    });
    it('透過handleToggle，應該toggle 已完成事項',()=>{
        //一個測試用的object
        let todoData = {
            id:11,
            text: 'Test features',
            completed: false,
            createdAt: 0,
            completeAt: undefined
        };
        //render上文件
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        //設定state
        todoApp.setState({todos: [todoData]});
        //測試todoData中的first item裡面的completed為false
        expect(todoApp.state.todos[0].completed).toBe(false);
        //用id:11測試handleToggle
        todoApp.handleToggle(11); 
        expect(todoApp.state.todos[0].completed).toBe(true);
        //預期completedAt toBeA number
        expect(todoApp.state.todos[0].completedAt).toBeA('number');
    });
    //Test that when toggle from true to false , completedAt get removed
      it('測試待辦事項的建立時間切換完成時間的切換功能',()=>{
        //一個測試用的object
        let todoData = {
            id:11,
            text: 'Test features',
            completed: true,
            createdAt: 0,
            completeAt: 123
        };
        //render上文件
        let todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
        //設定state
        todoApp.setState({todos: [todoData]});
        //測試todoData中的first item裡面的completed為true
        expect(todoApp.state.todos[0].completed).toBe(true);
        //用id:11測試handleToggle
        todoApp.handleToggle(11); 
        //將完成狀態勾選掉，並測試completed是否為false
        expect(todoApp.state.todos[0].completed).toBe(false);
        //預期completedAt 會是undefined，因為被勾選成未完成
        expect(todoApp.state.todos[0].completedAt).toNotExist();
     });
});