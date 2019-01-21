import React from 'react'
import './Card.css'
import Colors from '../../assets/colors'

const Card = (props) => {
  const { item } = props
  return (
    <div className="card">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        {Object.keys(item.languages).map((lang, index) => (
          <div className="chip" key={index}>
            <i className="icon fas fa-circle" style={{color: `${Colors[lang]}`}}></i>
            {lang}
          </div>
        ))}
    </div>
  )
}

export default Card