import $ from 'jquery';
//專門負責儲存localStorage，上傳以及抓取快取
//讓user每次重整網頁時能夠有快取，才不會每次重整網頁待辦事項都自動消失
//並讓TodoApp component能直接抓到資料

//會在TodoApp component的state.todos呼叫getTodos() method
//因此傳進來的參數todos其實是TodoApp component的state.todos
//詳情可看TodoApp的componentDidMount
module.exports = {
    //將待辦事項陣列傳上localStorage
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
    //從localStorage叫快取下來，並轉為可處理並render的陣列
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
         return $.isArray(todos) ?todos: [];//$.isArray(todos)是否為array不是todos就是空陣列

     },
     //用filter處理快取array，並且返回一個符合條件的array傳回TodoAPP component
     //三個參數為TodoApp的state
     filterTodos: function(todos,showCompleted,searchText){
       let filteredTodos = todos;

       //filter by showCompleted
       filteredTodos = filteredTodos.filter((todo)=>{
           //只返回todos陣列中property completed為false
           //或是showCompleted為true的陣列元素
           return !todo.completed || showCompleted;
       });

       //filter by serchText
        filteredTodos = filteredTodos.filter((todo)=>{
            //製作一個變數，值為傳進來的參數的property text並轉為小寫字串
            let text = todo.text.toLowerCase();
            //indexOf如果返回-1則代表沒有東西被找到，如果返回大於0則代表有東西找到
            //返回search bar沒被輸入的狀態，以及傳入參數中有
            return (searchText.length === 0) || text.indexOf(searchText) > -1 ;
        });


       //Sort todos with non-completed first
       //將未完成事項永遠往前排
       filteredTodos.sort((a,b)=>{
          //在此案例內，參數a跟b都為todo，但不同情況或狀態
          //return -1 為例
          //返回值為1時，代表參數b排序在a之前
          //返回值為0時，則a跟b相等，不排序
          //返回值為-1時，代表參數a排序在b之前
          if(!a.completed && b.completed){
              //如果a.completed為false以及b.completed為true
              //則a排序在b之前，也就是未完成的待辦事項在已完成的待辦事項之前
              return -1;
          }else if(a.completed && !b.completed){
              return 1;
          }else{
              return 0;
          }
          
       });
       


       return filteredTodos;
     }
}