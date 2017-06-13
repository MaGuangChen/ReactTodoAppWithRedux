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
});