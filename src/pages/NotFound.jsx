import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div>
      <h2>Page not found!</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore,
        laboriosam fuga? Debitis recusandae aliquam velit aperiam,
        necessitatibus minima itaque, esse quia harum amet rem deleniti sunt a
        natus dolorum perferendis.
      </p>
      <p>Go to the <Link to='/'>HomePage</Link></p>
    </div>
  )
}

export default NotFound
