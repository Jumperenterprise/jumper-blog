import React, {useState} from 'react'
import {useParams} from 'react-router'

function PostView() {
  // console.log(useParams())
  const {id} = useParams()

  // Hooks
  const [post, setPost] = useState([])

  React.useEffect(() => {
    fetch(
      `https://us-central1-blog-api-1a3cc.cloudfunctions.net/app/api/posts/${id}`
    )
      .then((res) => res.json())
      .then((result) => {
        setPost(result)
      })
  })

  return (
    <main className="container">
      <div className="row">
        <div className="col s12">
          <img className="responsive-img" src={post.image} alt={post.title} />
        </div>
      </div>
      <section>
        <div className="row">
          <div className="col s12">
            <h2>{post.title}</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="row">
          <div className="col m8">
            <p>{post.introDescription}</p>

            <img
              className="responsive-img"
              src={post.introImg}
              alt={post.title}
            />

            <p>{post.mainDescription}</p>

            <img
              className="responsive-img"
              src={post.mainImg}
              alt={post.title}
            />

            <p>{post.finalDescription}</p>

            <img
              className="responsive-img"
              src={post.conclutionImg}
              alt={post.title}
            />

            <p>{post.puntos}</p>
          </div>
          <div className="col m4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{post.title}</span>
                <p>{post.notes}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section">
        <div className="row">
          <div className="post-pic zdepth-2"></div>
        </div>
      </section> */}
    </main>
  )
}

export default PostView
