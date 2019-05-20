import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => (
  <div style={{width:"100%",height:"50px",padding:"10px",boxSizing:"border-box"}}>
    <div><Link to="/">Home</Link> <Link to="/hello">Hello</Link> <Link to="/counter">Counter</Link></div>
  </div>
)

export default NavBar
