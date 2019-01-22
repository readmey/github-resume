import React, { Component } from 'react';
import Tasks from '../components/Tasks';
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
      const tasksItems = [
        'Create a landing page where the user can enter his or her github account',
        'Implement a “generate button” on the landing page that starts processing the previously entered account name and shows a result view to the user (the generated resumé)',
        'The result view shows a summary showing which programming languages the github account owner has used in his/her repository. That is sufficient. Feel free to add more statistics or to aggregate more data if you wish to',
        'Implement a model that connects the data to the given HTML / Javascript template',
        'Make sure to use the github API, please dont start parsing web pages manually'
      ]

    return (
      <div id="home">
        <div className="container container--bg-white">
            <h2>Github Resume 1.1</h2>
            <Tasks items={tasksItems}>
              <div className="description">
              <p>Please implement a Javascript one-page-application that lets users build a github resumé</p>
              </div>
            </Tasks>
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