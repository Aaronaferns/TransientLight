import React from 'react'
import "../styles/Post.css"

const Post = ({url, message}) => {
  return (
    <div className="post">
        <img src={url} alt=""></img>
        {message}
    </div>
  )
}

export default Post