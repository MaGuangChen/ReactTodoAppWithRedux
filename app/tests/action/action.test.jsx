import expect from 'expect';
var actions = require('actions');

describe('Actions',()=>{
    it('應該要產生search text action',()=>{
        let action = {
            type:'SET_SEARCH_TEXT',
            searchText: 'something else'
        };
        //等於這邊action obj帶入actions.jsx中的
        let res = actions.setSearchText(action.searchText);
        //期望res的值會跟action obj一樣
        expect(res).toEqual(action);
    });
     it('應該要產生add todo action',()=>{
        let action = {
            type:'ADD_TODO',
            text: '待辦事項1'
        };
        //等於這邊action obj帶入actions.jsx中的
        let res = actions.addTodo(action.text);
        //期望res的值會跟action obj一樣
        expect(res).toEqual(action);
    });
    it('應該要產生toggle show completed action',()=>{
       let action ={
           type:'TOGGLE_SHOW_COMPLETED'
       }
       let res = actions.toggleShowCompleted();
       expect(res).toEqual(action);
    });
    it('應該要產生toggle to do action',()=>{
       let action ={
           type:'TOGGLE_TODO',
           id:1
       }
       let res = actions.toggleTodo(action.id);
       expect(res).toEqual(action);
    });
});