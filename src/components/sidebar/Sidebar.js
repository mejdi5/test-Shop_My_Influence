import React from 'react'
import './Sidebar.css'

const Sidebar = () => {

  return (
  <div className='sidebar'>
    <input id="menu__toggle" type="checkbox" />
    <label className="menu__btn" htmlFor="menu__toggle">
      <span></span>
    </label>
    <div className="menu__box">
      <div className='logo'>
        <img 
        className='logo'
        src="/images/logo-smi-insights.png" 
        alt="" 
        />
      </div>
      <ul className='list'>
        <li className='item active'>
          <img className='icon' src="/images/menuIcons/home.png" alt=""/> 
        </li>
        <li className='item'>
          <img className='icon' src="/images/menuIcons/calendar-1.png" alt=""/>
        </li>
        <li className='item'>
          <img className='icon' src="/images/menuIcons/Group-1.png" alt=""/>
        </li>
        <li className='item'>
          <img className='icon' src="/images/menuIcons/Group-3.png" alt=""/>
        </li>
        <li className='item'>
          <img className='icon' src="/images/menuIcons/map.png" alt=""/>
        </li>
        <li className='item'>
          <img className='icon' src="/images/menuIcons/Group 195.png" alt=""/>
        </li>
        <li className='item'>
          <img className='icon' src="/images/menuIcons/database.png" alt=""/>
        </li>
        <li className='item'>
          <img className='icon' src="/images/menuIcons/Group-2.png" alt=""/>
        </li>
        <li className='item'>
          <img className='icon' src="/images/menuIcons/archive.png" alt=""/>
        </li>
      </ul>
    </div>
  </div>
  )
}

export default Sidebar