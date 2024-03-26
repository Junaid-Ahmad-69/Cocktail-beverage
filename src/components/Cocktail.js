import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({image, name, id, info, glass}) => {
  return (
    <article className="cocktail">
        <div className="img-container">
            <img src={image} alt={name} />
        </div>
        <div className="cocktail-footer">
            <h2>{name}</h2>
            <h3>{glass}</h3>
            <p>{info}</p>
            <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">details</Link>
        </div>
    </article>
  )
}

export default Cocktail
