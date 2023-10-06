import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Create from './pages/Create'
import PostDetail from './pages/PostDetail'
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </div>
  )
}
/* 
- สร้าง <BrowserRouter> ใน main ก่อน
- แสดงผล Navbar ทุกหน้า 
- สร้าง Routes เพื่อแยกแสดงผลใน path
- แยก path แสดงแค่ใน path นั้นๆจาก pages */
export default App
