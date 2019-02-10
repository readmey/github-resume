import React from 'react';
import Proptypes from 'prop-types'

const NotFoundPage = (props) => {
  const { location } = props

  setTimeout(() => {props.history.push('/')}, 1000)

  return (
    <div id="not-found">
      <div className="container container--bg-white">
        <div className="text--center ">
          <i className="far fa-meh fa-4x"></i>
          <h3>404 - {location.state.error} </h3>
          <p></p>
        </div>
      </div>
    </div>
  )
}

NotFoundPage.propTypes = {
  location: Proptypes.object.isRequired
}

export default NotFoundPage