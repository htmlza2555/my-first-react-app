import Post from '../components/Post'
import usePosts from '../hooks/usePosts'
import { useAuth } from '../providers/AuthProvider'
import classes from './Home.module.css'

const Home = () => {
  const { posts, isLoading } = usePosts()
  const { isLoggedIn } = useAuth()

  console.log('form home:', isLoggedIn)

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={classes.container}>
      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default Home
