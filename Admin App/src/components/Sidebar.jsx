import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'

const NavList = styled.ul`
  padding: 0;
  & a {
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  & .active {
    background-color: #ccc;
  }
`

const Sidebar = () => {
  const removeToken = () => {
    document.cookie = "TokenAdmin=;expires=Thu, 01 Jan 1970 00:00:01 GMT;"
  }

  return (
    <NavList>
      <li><NavLink to='/' className={({isActive}) => isActive ? 'active': ''}>Dashboard</NavLink></li>
      <li><NavLink to='/products' className={({isActive}) => isActive ? 'active': ''}>Products</NavLink></li>
      <li><Link to='/chat'>Chat</Link></li>
      <li onClick={removeToken}><Link to='/login'>Logout</Link></li>
    </NavList>
  )
}

export default Sidebar