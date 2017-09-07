import expect from 'expect';
const actions = require('actions');

describe('Actions',()=>{
    it('應該要產生search text action',()=>{
        const action = {
            type:'SET_SEARCH_TEXT',
            searchText: 'something else'
        };
        //等於這邊action obj帶入actions.jsx中的
        const res = actions.setSearchText(action.searchText);
        //期望res的值會跟action obj一樣
        expect(res).toEqual(action);
    });
     it('應該要產生add todo action',()=>{
        const action = {
            type:'ADD_TODO',
            text: '待辦事項1'
        };
        //等於這邊action obj帶入actions.jsx中的
        const res = actions.addTodo(action.text);
        //期望res的值會跟action obj一樣
        expect(res).toEqual(action);
    });
    it('應該要產生toggle show completed action',()=>{
       const action ={
           type:'TOGGLE_SHOW_COMPLETED'
       }
       const res = actions.toggleShowCompleted();
       expect(res).toEqual(action);
    });
    it('應該要產生toggle to do action',()=>{
       const action = {
           type:'TOGGLE_TODO',
           id:1
       }
       const res = actions.toggleTodo(action.id);
       expect(res).toEqual(action);
    });
});