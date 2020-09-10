const initialState = {
  filterObject: []
};

export default function filterListReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FILTER':
      return Object.assign(state, {filterObject: action.object}) ;
    case 'REMOVE_FILTER':
      return {
        ...state,
        list: [...state.list.slice(0, state.list.length - 1)]
      };
  }
  return state;
}
