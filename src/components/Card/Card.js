import React from 'react'
import './Card.css'
import Colors from '../../assets/colors'

const Card = (props) => {
  const { item } = props
  const hasLanguages = Object.keys(item.languages).length === 0 ? false : true
  return (
    <div className="card">
        <i className="icon fas fa-star"></i> {item.stars}
        <a href={item.url} className="link--title"><h4>{item.name}</h4></a>
        <p>{item.description}</p>
        {hasLanguages ? Object.keys(item.languages).map((lang, index) => (
          <div className="chip" key={index}>
            <i className="icon fas fa-circle" style={{color: `${Colors[lang]}`}}></i> {lang}
          </div>
        )) : (
          <>
            <i className="icon icon--align-middle fas fa-times-circle"></i>
            <span>no language detected</span>
          </>
        )}
    </div>
  )
}

export default Card