
import $ from 'jquery';
//專門負責儲存localStorage，上傳以及抓取快取
module.exports = {
    //傳上去
    setTodos: function(todos){
        //isArray method是jquery的可以檢查資料是否為array
        //如果todos是陣列則執行
       if($.isArray(todos)){
          //.setItem() method可以查https://dotblogs.com.tw/jimmyyu/archive/2011/03/27/html5-client-storage.aspx
          //.setItem() method要求兩個參數且都要為字串，並將第一個參數的值設為第二個參數
          //並且由於我們要代入的第二個參數值不為字串
          //因此我們使用JSON.stringify() method將他們轉為字串
          localStorage.setItem('todos',JSON.stringify(todos));
          //跟傳進來的一模一樣，因為我們確認過將要上傳的資料型態為陣列了
          return todos;
       }
    },
    //叫下來
    getTodos: function(){
         //我們先從localStorage抓到資料值，也就是cookie
         let stringTodos = localStorage.getItem('todos');
         //
         let todos = [];

         //將這裡的local 變數todos變為從localStorage儲存的陣列
         //try跟catch可以查一下
         try {
            todos = JSON.parse(stringTodos);//JSON.parse() method可以將這樣的字串'[1,2]'轉回[1,2]
         }catch(e){
           
         }
         return $.isArray(todos) ?todos: [];//$.isArray(todos)不是todos或空陣列

    }
}