import React, { Component } from 'react';
import '../styles/LandingPage.css';

export default class Home extends Component {
  state = { username: null }

  handleChange = (event) => {
    this.setState({username: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.username) {
      this.props.history.push('/user/'+this.state.username+'/resume')
    }
  }

  render() {
    return (
      <div id="home">
        <div className="container container--bg-white">
            <h2>Github Resume 1.1</h2>
            <div className="description">
            <p>Please implement a Javascript one-page-application that lets users build a github resumé</p>
            </div>
            <br />
            <div className="text--center">
            <form className="form">
              <input className="form__input" type="text" onChange={this.handleChange} placeholder="type in github username" />
              <input className="form__input--submit" type="submit" onClick={this.handleSubmit} value="generate" />
            </form>
          </div>
        </div>
      </div>
    )
  }
}