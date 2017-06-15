import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI component',()=>{
    //mocha的生命週期函示，將會在每次測試執行前運行
    beforeEach(()=>{
        localStorage.removeItem('todos');
    });
    it('TodoAPI component是否存在',()=>{
        expect(TodoAPI).toExist();
    });

    describe('setTodos()是否正確執行傳遞快取資料的工作',()=>{
       it('正確的接收到todos,且資料型態必須要是陣列',()=>{
         //測試用資料
         let todos = [{
              id:23,
              test:'test all files',
              completed: false
         }];
         //呼叫setTodos()，並貼測試用資料進來
         TodoAPI.setTodos(todos);

         let actualTodos = JSON.parse(localStorage.getItem('todos'));
         //toEqual()專門側陣列，因為陣列中時常會有不相同的狀態發生
         expect(actualTodos).toEqual(todos);
       });
       //這個測試如果沒有搭配mocha的生命週期函示執行，將會fail
       //因為瀏覽器依然存著上一個it測試的cookie
       it('如果傳無效資料到localStorage，那不能改變待辦事項',()=>{
           let badTodos = {a: 'b'};
           TodoAPI.setTodos(badTodos);

           expect(localStorage.getItem('todos')).toBe(null);
       });
    });
})