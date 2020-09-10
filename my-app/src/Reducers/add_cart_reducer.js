const initialState = [];

export default function addCartReducer(state = initialState, action) {
  console.log("REDUCEER");
  switch (action.type) {
    case "ADD_CART":
      console.log("ADD CART REDUCER");
      var test;
      if (Object.keys(state).length === 0 && state.constructor === Object) {
        test = [{ cartItem: action.object }];
      } else {
        let arr = Object.keys(state).map((k) => state[k]);
        test = arr.concat([{ cartItem: action.object }]);
      }
      return JSON.parse(JSON.stringify(test));
    case "REMOVE_CART":
      // return {
      //   ...state,
      //   list: [...state.list.slice(0, state.list.length - 1)],
      // };\
      console.log("REMOVE REDUCER");
      // state.forEach((current, index) => {
      //   if (current.cartItem.uuid == action.object.props.uuid) {
      //     console.log("EQAUAL");
      //     state.slice
      //   } else {
      //     console.log("DIFFERENT");
      //   }
      // });
      console.log("action.object ", action.object);
      return state.filter(
        (current) => current.cartItem.uuid !== action.object.uuid
      );
  }
  return state;
}
