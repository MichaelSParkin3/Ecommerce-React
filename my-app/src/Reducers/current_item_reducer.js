const initialState = {
  itemObject: []
};

export default function currentItemReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, itemObject: action.object };
    case 'REMOVE_ITEM':
      return {
        ...state,
        list: [...state.list.slice(0, state.list.length - 1)]
      };
  }
  return state;
}
