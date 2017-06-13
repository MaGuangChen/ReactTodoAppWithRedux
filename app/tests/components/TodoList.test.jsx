//要用到的庫
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect'; 

//要用到的component 
import TodoList from 'TodoList';
import Todo from 'Todo';

describe('TodoList component',()=>{
    it('測試TodoList component是否存在',()=>{
       expect(TodoList).toExist();
    });
    it('有多少 待辦事項 就render多少Todo component',()=>{
          //要測試這個要先render，所以要先做測試的data
          let todos = [
              {id:1,text:'測試代辦事項1'},
              {id:2,text:'測試代辦事項2'}
          ]
          //render上文件啦
          let todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
          //變數todosComponents將會儲存所有Todo component
          //利用TestUtils.scryRenderedComponentsWithType()   method
          //TestUtils.scryRenderedComponentsWithType()的用途是測試 A component中
          //總共render了幾次 B component
          //第一個參數為要render的component（上述的A component），第二個參數則為被render的component（上述的B component）
          let todosComponents = TestUtils.scryRenderedComponentsWithType(todoList,Todo);
          //make our assertion啦
          expect(todosComponents.length).toBe(todos.length);
          expect(todos.length).toBe(2);
      });
});