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

    describe('filterTodo()是否正確執行篩選動作',() => {
      //將測試資料放在公共域，不然每個it() method都要寫
      let todos = [
          {
            id:1,
            text: 'Some text here',
            completed: true
          },
          {
            id:2,
            text: 'Other text',
            completed: false
          },
          {
            id:3,
            text: 'Some text here',
            completed: true
          }
      ];
      it('返回所有符合showCompleted為true條件的待辦事項，也就是勾起來的待辦事項',() => {
         //呼叫filteredTodos() method並且帶入showCompleted為true
         //searchText為空字串
         let filteredTodos = TodoAPI.filterTodos(todos,true,'');
         //全部都會符合，剛好有符合completed為false或showCompleted為true
         expect(filteredTodos.length).toBe(3);
      });
       it('返回所有符合showCompleted為false條件的待辦事項，也就是未完成的待辦事項',() => {
         //呼叫filteredTodos() method並且帶入showCompleted為false
         //searchText為空字串
         let filteredTodos = TodoAPI.filterTodos(todos,false,'');
         //因為只有id：2的object會被返回，只有他符合completed為false或showCompleted為true
         expect(filteredTodos.length).toBe(1);
      });
      it('排序待辦事項陣列，將未完成的往上排將完成的往下排',()=>{
         //傳參數進filterTodos method，並帶入checkbox為勾選狀態
         let filteredTodos = TodoAPI.filterTodos(todos,true,'');
         //檢查陣列中是否已經將未完成的項目排至第一個陣列位置
         expect(filteredTodos[0].completed).toBe(false);
      });
       it('將顯示的待辦事項與search bar所輸入的字串相符合',()=>{
         //傳參數進filterTodos method，並且使用字串'some'
         //然後我們故意全使用小寫測試我們在可以通用
         let filteredTodos = TodoAPI.filterTodos(todos,true,'some');
         //因為字串有some的陣列元素只有兩個，因此toBe(2)
         expect(filteredTodos.length).toBe(2);
      });
      it('如果search bar沒有輸入任何字串，則顯示所有待辦事項',()=>{
         //傳參數進filterTodos method，如果我們的字串為空值
         //我們應該返回陣列全部元素
         let filteredTodos = TodoAPI.filterTodos(todos,true,'');
         //整個陣列長度為3因此，toBe(3)
         expect(filteredTodos.length).toBe(3);
      });
      
    });

})