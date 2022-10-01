import React from 'react'
import './Navbar.css'

const Navbar = () => {
return (
<div className='navbar'>
  <div className='user'>
      <div className='userInfo'>
          <h6>John Doe</h6>
          <span>Profile</span>
      </div>
      <img src="/images/avatars/Image-1.png" alt="" className='userImage'/>
  </div>
</div>
)}

export default Navbar 