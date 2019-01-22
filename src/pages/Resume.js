import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
import '../styles/Resume.css';

const { REACT_APP_GITHUB_ACCESS_TOKEN } = process.env
const GITHUB_API_USER = 'https://api.github.com/users/';

const headers = {
  method: 'GET',
  headers: {
    Authorization: `token ${REACT_APP_GITHUB_ACCESS_TOKEN}`
  }
}

export default class Resume extends Component {
  state = {
    data: null
  }

  componentDidMount() {
    const { username } = this.props.match.params
    Promise.all([
      this.fetchUserData(username),
      this.fetchUserRepos(username)])
    .then(fetchedData => {
      const data = { ...fetchedData[0], repositories: fetchedData[1] }
      this.setState({ data: data })
    })
    .catch(err => {
      console.log(err)
      this.props.history.push({
        pathname: '/404',
        state: { user: this.props.match.params.username }
      });
    })
  }

  handleErrors(response) {
    if (!response.ok) {
      var error = new Error(response.statusText || response.status)
      error.response = response
      return Promise.reject(error)
    }
    return response.json();
}
  
  fetchUserData(username) {
      return fetch(GITHUB_API_USER + username, headers)
      .then(this.handleErrors)
  }
  
  fetchUserRepos(username) {
    return fetch(GITHUB_API_USER + username + '/repos', headers)
      .then(this.handleErrors)
      .then(repositories => 
        Promise.all(repositories.map(repo =>
          fetch(repo.languages_url, headers)
          .then(data => data.json())
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
      )))
  }

  render () {
    const { data,  } = this.state
    const { username } = this.props.match.params

    if(data) {
      const name = data.name ? (<p><i className="icon fas fa-user"></i> {data.name}</p>) : null
      const biography = data.bio ? (<p><i className="icon fas fa-book"></i> {data.bio}</p>) : null
      const location = data.location ? (<p><i className="icon fas fa-map-marker-alt"></i>{data.location}</p>) : null
      const company = data.company ? (<p><i className="icon far fa-building"></i>{data.company}</p>) : null

      return (
        <div id="resume">
        <div className="container container--bg-white">
          <Link to="/" className="link--back">
            <i className="icon fas fa-chevron-left fa-2x"></i>
          </Link>
          <div className="block--flex">
            <div className="block__item--flex">
              <img className="avatar__img" src={data.avatar_url} alt="avatar" />
            </div>
            <div className="block__item--flex">
              {name}
              <p><i className="icon fab fa-github"></i> {data.login}</p>
              {biography}
              {location}
              {company}
            </div>
          </div>
          <br />
          <div className="block--flex respositories">
            { data.repositories.length > 0 ? data.repositories.map((repo, index) => (
              <Card item={repo} key={index} />
            )) : (
              <div className="info">
               <i className="icon fas fa-info-circle"></i>               
               <span>{username} does not has any repositories</span>
              </div>
            )}
          </div>
        </div>
      </div>
      )
    } else {
      return (
        <div className="resume container">
          <p>Loading..</p>
        </div>
      )
    }
  }
}