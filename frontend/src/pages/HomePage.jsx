import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/reviews')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>


  return (
    <div>
      {
        data.map(review => (
          <div key={ review.id } className="review-card">
            <div className="rating">{ review.rating }</div>
            <h2>{ review.title }</h2>
            <p>{ review.body.substring(0, 200) }...</p>
            <Link to={`/details/${review.id}`}>Read more</Link>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage