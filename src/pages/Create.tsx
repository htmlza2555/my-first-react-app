import { FormEvent, useState } from 'react'
import usePosts from '../hooks/usePosts'
import classes from './Create.module.css'

const Create = () => {
  const { isLoading, isPosting, createPost } = usePosts()
  const [newTitle, setNewTitle] = useState<string>('')
  const [newBody, setNewBody] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      await createPost(newTitle, newBody)

      setNewTitle('')
      setNewBody('')
    } catch (err) {
      console.error(err)
    }
  }

  if (isLoading) return <h1>Loading...</h1>

  return (
    <div className={classes.container}>
      <form className={classes.postForm} onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} required />
        <label>Body</label>
        <input type="text" value={newBody} onChange={(e) => setNewBody(e.target.value)} required />

        <button type="submit" disabled={isPosting}>
          {isPosting ? 'Posting' : 'Post'}
        </button>
      </form>
    </div>
  )
}

export default Create
