import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Create from './pages/Create'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
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
