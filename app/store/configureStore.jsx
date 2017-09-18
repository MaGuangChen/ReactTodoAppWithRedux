const redux = require('redux');
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';

export const configure = () => {
  const reducer = redux.combineReducers({
      searchTextReducer: searchTextReducer,
      showCompletedReducer: showCompletedReducer,
      todosReducer: todosReducer,
  });
  // 在我們combined reducer後我們就可以建立一個store
  // 來儲存state;
  // 我們的store所compose的是redux的chrome工具
  const store = redux.createStore(reducer, redux.compose(
      window.devToolsextension ? window.devToolsextension : f => f
    ));
  // 一定要返回store,不然根本沒有store啊
    return store;
};