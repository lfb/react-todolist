import React, {Component} from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component {
  constructor(props) {
    super(props)
    this.remove = this.remove.bind(this)
  }

  // 当组件卸载前执行
  componentWillUnmount() {
    console.log('Child componentWillUnmount：组件卸载前')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return nextProps.item.title !== this.props.item.title
  }

  remove() {
    const {remove, index} = this.props
    remove(index)
  }

  /**
   * 渲染函数
   * @return {*}
   */
  render() {
    console.log('Child Render')
    const {test} = this.props
    return (
      <li>
        {test} - {this.props.item.title}
        <span onClick={this.remove}> 删除</span>
      </li>
    )
  }
}

/**
 * 指定类型设置
 *
 * 官网文档：https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes
 */
TodoItem.propTypes = {
  item: PropTypes.object,
  remove: PropTypes.func,
  index: PropTypes.number,
  // isRequired 必须传递
  test: PropTypes.string.isRequired
}

/**
 * 默认值设置
 *
 * 官网文档：https://reactjs.org/docs/typechecking-with-proptypes.html
 */
TodoItem.defaultProps = {
  test: '您好'
}

export default TodoItem
