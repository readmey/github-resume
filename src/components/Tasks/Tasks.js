import React, { Component } from 'react'
import './Tasks.css'

export default class Tasks extends Component {
    state = {
        checked: false
    }

    toggleChecked (index) {
      this.setState({ checked: !this.state.checked})
    }

    render () {
        const tasks = this.props.items.map((item, index) => {
            return (
            <div className="tasks__item" key={index}>
                <input type="checkbox" className="input"  onClick={this.toggleChecked.bind(this, index)} /> {item}
            </div>
            )}
        )
        return (
            <div className="tasks">
            {this.props.children}
            {tasks}
        </div>
        )
    }
}