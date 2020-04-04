import {ADD_TODO_ITEM, CHANGE_INPUT_VALUE, DELETE_TODO_ITEM, INIT_DATA_ACTION} from "./actionTypes";

export const getInputChangeAction = val => ({
  type: CHANGE_INPUT_VALUE,
  val
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM,
})

export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initData = data => ({
  type: INIT_DATA_ACTION,
  data
})
