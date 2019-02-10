import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Card from '../Card'

import './UserProfile.css'

const UserProfile = (props) => {
  const { username } = props
  const {name, bio, location, company, login, avatar_url, repositories} = props.data

  return (
    <div className="container container--bg-white">
      <Link to="/" className="link--back">
        <i className="icon fas fa-chevron-left fa-2x"></i>
      </Link>
      <div className="block--flex">
        <div className="block__item--flex">
          <img className="avatar__img" src={avatar_url} alt="avatar" />
        </div>
        <div className="block__item--flex">
          {name ? (<p><i className="icon fas fa-user"></i> {name}</p>) : null}
          {login ? <p><i className="icon fab fa-github"></i> {login}</p> : null}
          {bio ? (<p><i className="icon fas fa-book"></i> {bio}</p>) : null}
          {location ? (<p><i className="icon fas fa-map-marker-alt"></i>{location}</p>) : null}
          {company ? (<p><i className="icon far fa-building"></i>{company}</p>) : null}
        </div>
      </div>
      <br />
      <div className="block--flex respositories">
        { repositories.length > 0 ? repositories.map((repo, index) => (
          <Card item={repo} key={index} />
        )) : (
          <div className="info">
            <i className="icon fas fa-info-circle"></i>               
            <span>{username} does not has any repositories</span>
          </div>
        )}
      </div>
    </div>
  )
}

UserProfile.propTypes = {
  data: PropTypes.object.isRequired
}

export default UserProfile