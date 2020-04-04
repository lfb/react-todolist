import React, {Component} from 'react'
import PropTypes from "prop-types";

class Data extends Component {
  // 当组件的render函数被执行时，子组件的render也会被执行
  render() {
    return <div>{this.props.content}</div>
  }
}

Data.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
export default Data
