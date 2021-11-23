import React from 'react'
import {Link} from 'react-router-dom'

function PostCard(props) {
  return (
    <Link
      to={`/post/${props.id}`}
      className="waves-effect waves-teal bnt-flat lighten-5 right"
    >
      <div className="card hoverable">
        <div className="card-image waves-effect waves-block waves-light">
          <img
            className="activator"
            src={props.image}
            alt="Imagen de la tarjeta"
          />
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text center-align text-darken-4">
            {props.title}
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            {props.title}
            <i className="material-icons right">close</i>
          </span>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard
