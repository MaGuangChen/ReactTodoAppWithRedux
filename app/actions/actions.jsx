
export const setSearchText = (searchText) => {
    return {
       type: 'SET_SEARCH_TEXT',
       searchText
    };
}

export const showCompleted = () => {
    return {
        type:'SHOW_COMPLETED'
    }
}

export const addTodo = (text) => {
   return {
       type:'ADD_TODO',
       text
   };
};


export let toggleTodo = (id) => {
    return {
        type:'TOGGLE_TODO',
        id
    }
}