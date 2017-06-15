//要用到的庫
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect'; 

//要用到的component
import AddTodo from 'AddTodo';

describe('AddTodo component',()=>{
    it('測試AddTodo component是否存在',()=>{
       expect(AddTodo).toExist();       
    });
    it('測試當user輸入有效值時呼叫onAddTodo prop回傳的動作',()=>{
       let todoText = '檢查郵件囉';
       let spy = expect.createSpy();
       //先render到螢幕
       let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
       //使用el讓我們可以使用jquery然後尋找到dom
       let $el = $(ReactDOM.findDOMNode(addTodo));

       addTodo.refs.todoText.value =  todoText;
       TestUtils.Simulate.submit($el.find('form')[0]);

       expect(spy).toHaveBeenCalledWith( todoText);
    });

    it('測試當user輸入無效值時不呼叫onAddTodo prop回傳的動作',()=>{
       let todoText = '';
       let spy = expect.createSpy();
       let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy}/>);
       let $el = $(ReactDOM.findDOMNode(addTodo));

       addTodo.refs.todoText.value = todoText;
       TestUtils.Simulate.submit($el.find('form')[0]);

       expect(spy).toNotHaveBeenCalled();
    });
});