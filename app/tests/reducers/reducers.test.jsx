const expect = require('expect');
const reducers = require('reducers');

// 此套件為凍結一個物件不給改
const deepFreeze = require('deep-freeze-strict');

describe('Reducers', () => {
  describe('search text reducer', () => {
    it('應設置search text (set search text)', () => {
       const action = {
           type: 'SET_SEARCH_TEXT',
           searchText: '搜尋',
       }
       const res = reducers.searchTextReducer(deepFreeze(''), deepFreeze(action));
       
       expect(res).toEqual(action.searchText);
    });

   describe('show completed', () => {
      it('應該要切換state.showCompleted為相反', () => {
          const action = {
              type: 'TOGGLE_SHOWCOMPLETED'
          }
          const res = reducers.showCompletedReducer(deepFreeze(false), deepFreeze(action));

          expect(res).toEqual(true);
      });
   });

   describe('todos reducer', () => {
       it('應該要新增新的todo', () => {
         const action = {
            type: 'ADD_TODO',
            text: 'some text',
         }
         const res = reducers.todosReducer(deepFreeze([]), deepFreeze(action));
         expect(res.length).toEqual(1);
         expect(res[0].text).toEqual(action.text);
       });

       it('應該要將點選的todo切換完成或是未完成狀態', () => {
           let todos = [
               {
                   id: '123',
                   text: '測試用todos',
                   completed: true,
                   createdAt: 123,
                   completedAt: 125,
               },
           ];
           const action = {
             type: 'TOGGLE_TODO',
             id: '123',
           };
           const res = reducers.todosReducer(deepFreeze(todos), deepFreeze(action));
           expect(res.length).toEqual(1);
           expect(res[0].completed).toEqual(false);
           expect(res[0].completedAt).toEqual(undefined);
           expect(res[0].text).toEqual('測試用todos');
       });
   });

  

  });
});