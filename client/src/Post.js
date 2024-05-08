import React from 'react'

const Post = () => {
  return (
    <div className="post">
    <div className="image">
      <img
        src="https://th.bing.com/th/id/OIP.eVcaB676piR6mUnoaprzzgHaEq?w=243&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
        alt=""
      />
    </div>
    <div className="texts">
      <h2>
        Lorem ipsum dolor sit amet consectetur.
      </h2>
      <p className="info">
        <a className="author">Ashkam</a>
        <time> 2024-05-05 08:45</time>
      </p>
      <p className="summary">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Cupiditate, aliquid voluptate distinctio ullam nobis dolorem. Id,
        aliquid itaque!
      </p>
    </div>
  </div>  )
}

export default Post