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
});