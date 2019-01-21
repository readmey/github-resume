import React, { Component } from 'react';


const NotFoundPage = (props) => {
  const { location } = props
  console.log(location)
  return (
    <div id="not-found">
      <section className="section">
          <div className="container">
              <h2>User {location.state.user} not found</h2>
          </div>
      </section>
    </div>
  )
}

export default NotFoundPage