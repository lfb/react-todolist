import React, {Component} from 'react'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.remove = this.remove.bind(this)
  }

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
