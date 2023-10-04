import { FormEvent, useEffect, useState } from 'react'
import './App.css'
import Greeting from './components/Greeting'
import Navbar from './components/Navbar'
import Post from './components/Post'
import { CreatePostDTO, PostDTO } from './types/dto'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState<PostDTO[] | null>(null)
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isPosting, setIsPosting] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      try {
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        // const data = await res.json()

        // if (!res.ok) {
        //   throw new Error('error')
        // }
        const res = await axios.get<PostDTO[]>('https://jsonplaceholder.typicode.com/posts')

        setPosts(res.data)
      } catch (err) {
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    const newPostBody: CreatePostDTO = {
      userId: Math.floor(Math.random() * 1000),
      title: newTitle,
      body: newBody,
    }

    setIsPosting(true)
    try {
      // * axios post request
      const res = await axios.post<PostDTO>('https://jsonplaceholder.typicode.com/posts', newPostBody, {
        headers: { 'Content-Type': 'application/json' },
      })

      console.log(res.data)
    } catch (err) {
      console.error(err)
    } finally {
      setIsPosting(false)
    }

    // * Clear form after set posts
    setNewTitle('')
    setNewBody('')
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className="App">
      <Navbar />
      <Greeting name="Bun" isLoggedIn={true} />

      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />

        <button type="submit" disabled={isPosting}>
          {isPosting ? 'Posting' : 'Post'}
        </button>
      </form>

      <div className="feed-container">
        {posts &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
      </div>
    </div>
  )
}

export default App
