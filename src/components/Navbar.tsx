import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useAuth } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const { isLoggedIn } = useAuth()

  console.log('from navbar:', isLoggedIn)

  return (
    <div className={classes.navbar}>
      <div className={classes.menu}>
        <h3>Navbar</h3>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/">
          Feed
        </NavLink>
      </div>
      <div className={classes.menu}>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/create">
          Create
        </NavLink>
        <NavLink className={({ isActive }) => (isActive ? classes.active : classes.inactive)} to="/profile">
          Profile
        </NavLink>
        <Link to="/login" className={classes.login}>
          Login
        </Link>
      </div>
    </div>
  )
}

export default Navbar
