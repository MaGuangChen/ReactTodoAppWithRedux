//要用到的庫
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect'; 

//要用到的component
import Todo from 'Todo';

describe('Todo component',()=>{
    it('測試Todo component是否存在',()=>{
       expect(Todo).toExist();
    });

    it('應該接收onToggle prop並一路傳回TodoApp進行更新state',()=>{
        let todoData = {
            id:199,
            text: '一些測試文字',
            completed: true
        };
        //render component
        let spy = expect.createSpy();
        let todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
        //jq找到那個dom
        let $el = $(ReactDOM.findDOMNode(todo));
        //模擬todo被點擊
        TestUtils.Simulate.click($el[0]);
        //期望某個function被執行且
        expect(spy).toHaveBeenCalledWith(199);
    });
});