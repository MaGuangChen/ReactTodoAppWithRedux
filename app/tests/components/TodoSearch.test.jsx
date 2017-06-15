//要用到的庫
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import expect from 'expect';

//要用到的component 
import TodoSearch from 'TodoSearch';

describe('TodoSearch component', ()=>{
    it('測試TodoSearch component是否存在',()=>{
        expect(TodoSearch).toExist();
    });
    
    it('如果user改變了搜尋bar的字，render會跟著改變',()=>{
       //儲存我們要搜尋的字
       let searchText = '洗';
       //這將會讓我們的component中的function可以被呼叫才能測試
       let spy = expect.createSpy();
       let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
       //讓user輸入的值為變數searchText
       todoSearch.refs.searchText.value = searchText;
       //模擬onChange的動作，利用TestUtils.Simulate來進行模擬
       TestUtils.Simulate.change(todoSearch.refs.searchText);
       //用spy來看到底function被呼叫沒，且對應到適當的值
       expect(spy).toHaveBeenCalled(false,'洗');
       //
    });

    it('如果user勾選了顯示已完成按鈕或是取消勾選，render會跟著改變',()=>{
        let spy = expect.createSpy();
        let todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        //測check box
        todoSearch.refs.showCompleted.checked = true;
        //模擬更換
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        //看function被呼叫沒，且對應到適當的值
        expect(spy).toHaveBeenCalled(true,'');
    });



});