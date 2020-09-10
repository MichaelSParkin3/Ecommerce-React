import filterListReducer from "./filter_list_reducer.js";
import currentItemReducer from "./current_item_reducer.js";
import addCartReducer from "./add_cart_reducer.js";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["filterList", "currentItem", "cartArray"],
};

const rootReducer = combineReducers({
  filterList: filterListReducer,
  currentItem: currentItemReducer,
  cartArray: addCartReducer,
});

const newReducer = persistReducer(persistConfig, rootReducer);

export default newReducer;

// export default combineReducers({
//   filterList: filterListReducer,
//   currentItem: currentItemReducer,
//   cartArray: addCartReducer,
// });
