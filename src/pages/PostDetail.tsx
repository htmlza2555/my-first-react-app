import { useParams } from 'react-router-dom'
import usePost from '../hooks/usePost'
import classes from './PostDetail.module.css'

const PostDetail = () => {
  const { id } = useParams()
  const { Post, isLoading, error } = usePost(id || '1')

  if (isLoading) return <h1>Loading...</h1>
  if (error) return <p>{error}</p>

  return (
    <div className={classes.container}>
      {Post && (
        <>
          <h1>PostDetail id: {Post?.id}</h1>
          <h1>Post by UserID: {Post?.userId}</h1>
          <p>title: {Post?.title}</p>
          <p>body: {Post?.body}</p>
        </>
      )}
    </div>
  )
}

export default PostDetail
