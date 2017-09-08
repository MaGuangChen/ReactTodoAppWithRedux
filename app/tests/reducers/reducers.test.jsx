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
  });
});