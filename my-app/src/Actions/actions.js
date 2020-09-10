/*
 * action types
 */

export const ADD_FILTER = "ADD_FILTER";
export const REMOVE_FILTER = "REMOVE_FILTER";

export const ADD_ITEM = "ADD_ITEM";

export const ADD_CART = "ADD_CART";

export const REMOVE_CART = "REMOVE_CART";

/*
 * action creators
 */

export function addFilter(object) {
  return { type: ADD_FILTER, object };
}
export function removeFilter(object) {
  return { type: REMOVE_FILTER, object };
}

export function addItem(object) {
  return { type: ADD_ITEM, object };
}

export function addCart(object) {
  return { type: ADD_CART, object };
}

export function removeCart(object) {
  return { type: REMOVE_CART, object };
}
