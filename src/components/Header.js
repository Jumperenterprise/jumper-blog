import React, {useState, useEffect} from 'react'
import {Carousel} from 'react-responsive-carousel'


const Header = () => {
  // Hooks
  const [post, setPost] = useState([])

  useEffect(() => {
    fetch('https://us-central1-blog-api-1a3cc.cloudfunctions.net/app/api/posts')
      .then((res) => res.json())
      .then(
        (result) => {

          setPost(result)
        }
      )
  }, [])
    
    return (
      <div className="carousel-container">
      <Carousel showIndicators={false} className="z-depth-2" showThumbs={false}>
        {post.map((post) => (
          <div key={post.id}>
            <img src={post.image} alt={post.title} />
          </div>
        ))}
      </Carousel>
      </div>
    )
  }

export default Header
