import React, { Component } from 'react';
import SearchForm from '../components/SearchForm/'

export default class Home extends Component {
  state = { 
    username: "",
    validationError: false
  }

  handleChange = (event) => {
    this.setState({username: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.username.trim() !== "") {
      this.props.history.push('/user/'+this.state.username+'/resume')
    } else {
      this.setState({ validationError: true })
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
              <SearchForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} validationError={this.state.validationError}/>
          </div>
        </div>
      </div>
    )
  }
}