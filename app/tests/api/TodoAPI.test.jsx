import expect from 'expect';

import TodoAPI from 'TodoAPI';

describe('TodoAPI component',()=>{
    //mocha的生命週期函示，將會在每次測試執行前運行，
    //這邊使用的原因是因為要刷新快取，不然每次測試都會抓到前面
    //setItem()所傳上的快取
    //所以這個mocha 生命週期method將會在每次測試執行前清理todos快取
    beforeEach(()=>{
        localStorage.removeItem('todos');
    });
    it('TodoAPI component是否存在',()=>{
        expect(TodoAPI).toExist();
    });

    describe('setTodos()是否正確執行上傳快取資料的工作',()=>{
       it('正確的接收到todos,且資料型態必須要是陣列',()=>{
         //測試用資料
         let todos = [{
              id:23,
              test:'test all files',
              completed: false
         }];
         //呼叫setTodos()，並貼測試用資料進來
         TodoAPI.setTodos(todos);
         //將todos將要被快取的部分轉成字串並存在變數中
         let actualTodos = JSON.parse(localStorage.getItem('todos'));
         //toEqual()專門側陣列，因為陣列中時常會有不相同的狀態發生
         expect(actualTodos).toEqual(todos);
       });
       //這個測試如果沒有搭配mocha的生命週期函示執行，將會fail
       //因為瀏覽器依然存著上一個it測試的cookie
       it('如果傳無效資料到localStorage，那不能上傳待辦事項的快取',()=>{
           //故意讓資料不是陣列而只是一個object
           let badTodos = {a: 'b'};
           TodoAPI.setTodos(badTodos);
           //將要上傳的資料不是陣列所以不傳啦
           expect(localStorage.getItem('todos')).toBe(null);
       });
    });
    //getTodos test
    describe('getTodos()是否正確執行下載快取的動作',()=>{
       it('當我們傳入的資料不能被parse成陣列時，我們將返回空陣列',()=>{
           let actualTodos = TodoAPI.getTodos();
           //只要是測試陣列，就要用toEqual
           expect(actualTodos).toEqual([]);
       });
       it('如果下載的todos快取資料型態是能夠被轉為陣列的，那getTodos()正常執行',()=>{
           //測試用資料，這次要傳正確的因為我們要測試抓到正確資料時的情況
         let todos = [{
              id:23,
              test:'test all files',
              completed: false
          }];
          //我們在這邊不直接叫setTodos() 的原因是，我們不想要讓事情變複雜
          //因為如果我們在這邊呼叫了setTodos，我們可能要再這個getTodos()裡面
          //在另外測試看看setTodos()，而只要setTodos()沒有辦法正確執行
          //將會造成這個getTodos()的測試break，因此我們保持單純
          
          //因為我們有用生命週期清快取，我們另外setItem讓getTodos()能夠有快取抓
          localStorage.setItem('todos',JSON.stringify(todos));
          //抓todos快取下來轉陣列
          let actualTodos = TodoAPI.getTodos();
          //我們下的assertion，我們期待經過getTodos()後的資料將會等於todos變數
          expect(actualTodos).toEqual(todos);
          
       });
    });

})