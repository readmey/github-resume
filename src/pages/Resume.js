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
      console.log('ERR', err)
    })
  }

  handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json();
}
  
  fetchUserData(username) {
      return fetch(GITHUB_API_USER + username, headers)
      .then(this.handleErrors)
      .catch(err => Promise.reject(err))
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
              url: repo.url,
              languages: repoLanguages,
              stars: repo.stargazers_count,
              watchers: repo.watchers_count
            }
          })
      )))
      .catch(err => Promise.reject(err))
  }

  render () {
    const { data } = this.state
    if(data) {
      console.log('data', data)
      const biography = data.bio ? (<p><i className="icon fas fa-book"></i> {data.bio}</p>) : null
      const location = data.location ? (<p><i className="icon fas fa-map-marker-alt"></i>{data.location}</p>) : null

      return (
        <div className="resume container">
          <Link to="/" className="link--back">
          <i className="icon fas fa-chevron-circle-left fa-2x"></i>
          </Link>
          <div className="block--flex">
            <div className="block__item--flex">
              <img className="avatar__img" src={data.avatar_url} alt="avatar" />
            </div>
            <div className="block__item--flex">
              <h3><i className="icon fas fa-user"></i> {data.name}</h3>
              <p><i className="icon fab fa-github-alt"></i> {data.login}</p>
              {location}
              {biography}
            </div>
          </div>
          <br />
          <div className="block--flex respositories">
            { data.repositories.map((repo, index) => (
              <Card item={repo} key={index} />
            ))}
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