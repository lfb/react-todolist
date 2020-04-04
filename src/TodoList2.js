import React, {Component, Fragment} from 'react'
import Data from './Data'
import TodoItem from './TodoItem'
import './todoList.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class TodoList extends Component {
  // 初始化工作 props 和 state
  constructor(props) {
    console.log('初始化工作 props 和 state')

    super(props)
    this.changeVal = this.changeVal.bind(this)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.changeToggle = this.changeToggle.bind(this)

    /**
     * 当组件的 state或 props 发生改变的时候，
     * render 函数会重新执行
     */
    this.state = {
      val: '',
      list: [],
      show: true
    }
  }

  // 挂载阶段：组件挂载完成
  // 一般异步加载接口数据放在这里
  componentDidMount() {
    console.log('componentDidMount：组件挂载完成')
  }

  // 更新阶段：组件被更新之前，他会自动被执行
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('shouldComponentUpdate：组件即将更新前')
    // true 需要更新 | false 不需要更新
    return true
  }

  // 更新阶段：组件更新完毕执行
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate：组件更新完毕')
  }

  // 当组件卸载前执行
  componentWillUnmount() {
    console.log('componentWillUnmount：组件准备卸载..')
  }

  /**
   * 新增项
   */
  addItem() {
    // 修改完毕数据后，进行回调函数
    this.setState((preState, props) => ({
      list: [...preState.list, {
        title: preState.val
      }],
      val: ''
    }), () => {
      console.log(this.state.list)
    })
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
      // val: this.input.value
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

  changeToggle() {
    this.setState((preState) => ({
      show: !preState.show
    }))
  }

  // 渲染函数
  render() {
    console.log('render 函数执行')
    return (
      <Fragment>
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          unmountOnExit
          classNames='fade'
          appear={true}
          onEntered={el => el.style.color = '#2d8cf0'}>
          <div>Hello React</div>
        </CSSTransition>
        <button onClick={this.changeToggle}>切换</button>
        <div>
          <label htmlFor="insertInput">
            请输入内容
          </label>
          <input
            id="insertInput"
            value={this.state.val}
            onChange={this.changeVal}
            ref={(input) => this.input = input}
            type="text"/>
          <button
            className='btn'
            style={{color: '#fff', background: 'red'}}
            onClick={this.addItem}>
            新增
          </button>
        </div>
<ul>
  <TransitionGroup>
    {this.state.list.map((item, index) => {
      return (
        <CSSTransition
          in={this.state.show}
          timeout={1000}
          unmountOnExit
          classNames='fade'
          appear={true}
          key={index}
          onEntered={el => el.style.color = '#2d8cf0'}>
          <TodoItem
            remove={this.removeItem}
            item={item}
            index={index}
          />
        </CSSTransition>
      )
    })}
  </TransitionGroup>
</ul>
        <Data content={this.state.val}/>
      </Fragment>
    )
  }
}

export default TodoList
