# react-todolist
A react todolist example

## 继承 react 组件
```js
import React, {Component} from 'react'

class TodoList extends Component {
    // ...
}
```

## 绑定 this
```js
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.changeVal = this.changeVal.bind(this)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }
  
  // ...
}
```

## 定义组件的数据 state
```js
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      val: '',
      list: [],
    }
  }
  // ..
}
```
修改state，通过 setState 方法修改：
```js
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
  this.setState({
    list
  })
}
```

## 绑定样式和事件
```
<button
    className='btn'
    style={{color: '#fff', background: 'red'}}
    onClick={this.addItem}>
    新增
</button>
```

## 父子通信
- 父组件在子组件上通过属性的方法传递属性或者方法
- 子组件通过 props 的方法接收属性和方法

```js
<TodoItem
    remove={this.removeItem}
    item={item}
    index={index}
    key={index}
  />
```

```js

class TodoItem extends Component {
  remove() {
    const {remove, index} = this.props
    remove(index)
  }

  render() {
    return (
      <li>
        {this.props.item.title}
        <span onClick={this.remove}> 删除</span>
      </li>
    )
  }
}

export default TodoItem
```
