import React from 'react'
import PropTypes from 'prop-types'
import './SearchForm.css'

const SearchForm = (props) => {
  return (
    <form className="form">
    <input className="form__input" id="username" type="text" onChange={props.handleChange} placeholder="type in github username" />
    <input className="form__input--submit" type="submit" onClick={props.handleSubmit} value="generate" />
    { props.validationError ? (
      <p className="input__validation--error">
        <i className="icon fas fa-exclamation-circle"></i>
        username is required
      </p>
    ) : null }
    </form>
  )
}

SearchForm.propTypes = {
  validationError: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default SearchForm