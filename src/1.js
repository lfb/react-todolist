import React, {Component} from 'react'
import store from './store'

class TodoList extends Component {
  constructor(props) {
    super(props)

    this.changeVal = this.changeVal.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)

    this.state = {
      val: store.getState().val
    }

    // 订阅 store
    store.subscribe(this.handleStoreChange)
  }

  // 表单change方法
  changeVal(e) {
    const action = {
      type: 'change_input_value',
      val: e.target.value
    }
    store.dispatch(action)
  }

  // 当 store 的数据发生更新时
  handleStoreChange() {
    this.setState({
      val: store.getState().val
    })
  }

  render() {
    return (
      <div>
        <input
          value={this.state.val}
          onChange={this.changeVal}
          type="text"/>
      </div>
    )
  }
}

export default TodoList
