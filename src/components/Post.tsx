import { Link } from 'react-router-dom'
import { PostDTO } from '../types/dto'
import classes from './Post.module.css'
import { useState } from 'react'

interface IPostProps {
  post: PostDTO
}

const Post = ({ post }: IPostProps) => {
  const [changeButton, setchangeButton] = useState<boolean>(false)
  const toggleClick = () => {
    setchangeButton(!changeButton)
  }

  return (
    <div className={classes.post}>
      <Link to={`/post/${post.id}`} style={{ textDecoration: 'none', color: 'black' }}>
        <p>id: {post.id}</p>
        <p>postedBy: {post.userId}</p>
        <p>title: {post.title}</p>
        <p>body: {post.body}</p>
      </Link>
      {changeButton && <p>more post info...</p>}
      <button onClick={toggleClick}>{changeButton ? 'Show Less' : 'Show More'}</button>
    </div>
  )
}
export default Post
