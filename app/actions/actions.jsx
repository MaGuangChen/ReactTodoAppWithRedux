//searchText action generator
export let setSearchText = (searchText)=>{
    return {
       type: 'SET_SEARCH_TEXT',
       searchText//等於searchText:searchText
    };
}

//toggleShowCompleted action generator
//不用參數因為我們只有兩個state，要馬true要馬false
export let toggleShowCompleted = ()=>{
    return {
        type:'TOGGLE_SHOW_COMPLETED'
    }
}

//addTodo action generator
export let addTodo = (text) => {
   return {
       type:'ADD_TODO',
       text
   };
};

//toggleTodo action generator
export let toggleTodo = (id)=>{
    return {
        type:'TOGGLE_TODO',
        id
    }
}