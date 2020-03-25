import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './todoList.css'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.changeVal = this.changeVal.bind(this)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)

    this.state = {
      val: '',
      list: [],
    }
  }

  /**
   * 新增项
   */
  addItem() {
    if (this.state.val !== '') {
      this.setState({
        list: [...this.state.list, {
          title: this.state.val
        }],
        val: ''
      })
    }
  }

  /**
   * 移除项
   * @param index
   */
  removeItem(index) {
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({list})
  }

  /**
   * 表单change方法
   * @param e
   */
  changeVal(e) {
    this.setState({
      val: e.target.value
    })
  }

  /**
   * 获取todoItem
   * @return {*}
   */
  getTodoItems() {
    return (
      this.state.list.map((item, index) => {
        return (
          <TodoItem
            remove={this.removeItem}
            item={item}
            index={index}
            key={index}
          />
        )
      })
    )
  }

  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.val}
            onChange={this.changeVal}
            type="text"/>
          <button
            className='btn'
            style={{color: '#fff', background: 'red'}}
            onClick={this.addItem}>
            新增
          </button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </Fragment>
    )
  }
}

export default TodoList
