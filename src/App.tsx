import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Create from './pages/Create'
import PostDetail from './pages/PostDetail'
import Login from './pages/Login'
import GuardedRoute from './guard/GuardedRoute'
import { useAuth } from './providers/AuthProvider'

function App() {
  const { isLoggedIn } = useAuth()
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route element={<GuardedRoute isRouteAccessible={isLoggedIn} redirectRoute="/login" />}>
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />}>
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}
/* 
- สร้าง <BrowserRouter> ใน main ก่อน
- แสดงผล Navbar ทุกหน้า 
- สร้าง Routes เพื่อแยกแสดงผลใน path
- แยก path แสดงแค่ใน path นั้นๆจาก pages
- GuardedRote เช็ค isRouteAccessible 
ถ้า isLoggedIn เป็น true ไปที่ path /login (เช็คแค่ใน Route)
*/
export default App
