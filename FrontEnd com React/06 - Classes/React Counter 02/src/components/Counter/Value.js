import React, { Component } from 'react'

import css from './counter.module.css'

export default class Value extends Component {
  render() {
    console.log(this.props)
    return (
      <span className={css.counterValue}>{this.props.value}</span>
    )
  }
}
