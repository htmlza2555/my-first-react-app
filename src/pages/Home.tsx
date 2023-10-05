import Post from '../components/Post'
import usePosts from '../hooks/usePosts'
import classes from './Home.module.css'

const Home = () => {
  const { posts } = usePosts()

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
