import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_DATA_ACTION} from './actionTypes'

const defaultState = {
  val: '',
  data: null,
  list: []
}

// reducer 可以接受 state，但是不能修改 state
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.val = action.val

    return newState
  }

  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push({
      title: newState.val
    })
    newState.val = ''

    return newState
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)

    return newState
  }

  if(action.type === INIT_DATA_ACTION){
    const newState = JSON.parse(JSON.stringify(state))
    newState.data  = action.data

    return newState
  }

  return state
}
