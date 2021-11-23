import React, {useState, useEffect} from 'react'
import SearchComponent from './SearchComponent'
import PostCard from './PostCard'

function PostContainer() {
  // Hooks
  const [error, setError] = useState(null)
  const [isLoaded, setIsloaded] = useState(false)
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('https://us-central1-blog-api-1a3cc.cloudfunctions.net/app/api/posts')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsloaded(true)
          setPost(result)
        },
        (error) => {
          setIsloaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return (
      <div className="spinner">
        <img src="img/sand-timer.gif" alt="loading" />
      </div>
    )
  } else {
    return (
      <main className="container">
        <section>
          <SearchComponent />
          <div className="row">
            {post.map((post) => (
              <article className="col s12 m6 l4" key={post.id}>
                <PostCard
                  id={post.id}
                  image={post.image}
                  title={post.title}
                  description={post.description}
                />
              </article>
            ))}
          </div>
        </section>
      </main>
    )
  }
}

export default PostContainer
