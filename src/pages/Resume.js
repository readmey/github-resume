import React, { Component } from 'react'
import UserProfile from '../components/UserProfile'
import Loader from '../components/Loader';

const GITHUB_API_USER = 'https://api.github.com/users/';

export default class Resume extends Component {
  state = {
    data: null,
    isFetching: false
  }

  async componentDidMount() {
    const { username } = this.props.match.params
    this.setState({ isFetching: true })

    try {
      const userData = await this.fetchUserData(username)
      const userRepos = await this.fetchUserRepos(username)
      this.setState({
        isFetching: false, 
        data: { ...userData, repositories: userRepos }
      })
    } catch(err) {
      this.props.history.push({
        pathname: '/404',
        state: { 
          user: this.props.match.params.username,
          error: err.message
        }
      })
    }
  }

  handleErrors(response) {
    if (!response.ok) {
      var error = new Error(response.statusText || response.status)
      return Promise.reject(error)
    }
    return response.json();
}
  
  fetchUserData(username) {
      return fetch(GITHUB_API_USER + username)
      .then(this.handleErrors)
  }
  
  fetchUserRepos(username) {
    return fetch(GITHUB_API_USER + username + '/repos')
      .then(this.handleErrors)
      .then(repositories => this.fetchReposLanguages(repositories))
  }

  fetchReposLanguages(repositories) {
    return Promise.all(repositories.map(repo =>
      fetch(repo.languages_url)
      .then(this.handleErrors)
      .then(repoLanguages => {
        return {
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          languages: repoLanguages,
          stars: repo.stargazers_count,
          watchers: repo.watchers_count
        }
      })
    ))
  }

  render () {
    const { username } = this.props.match.params
    const { data, isFetching } = this.state

    if(!isFetching && data) {
      return (
        <div id="resume">
          <UserProfile data={data} username={username} />
        </div>
      )
    } else {
      return (
        <Loader />
      )
    }
  }
}