import React from 'react';

const NotFoundPage = (props) => {
  const { location } = props

  setInterval(() => {props.history.push('/')}, 1000)

  return (
    <div id="not-found">
      <div className="container container--bg-white">
        <div className="text--center ">
          <i className="far fa-meh fa-4x"></i>
          <h3>404 - {location.state.user} was not found</h3>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage