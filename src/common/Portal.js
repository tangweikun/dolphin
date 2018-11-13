import React from 'react'
import ReactDOM from 'react-dom'

export class Portal extends React.Component {
  constructor(props) {
    super(props)
    this.node = document.createElement('div')
    document.body.appendChild(this.node)
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.node)
  }

  componentWillUnmount() {
    document.body.removeChild(this.node)
  }
}
