import React from 'react'
import './Header.css'

const Header = () => {
return (
<div className='header'>
    <p>Summary dashboard: Drope facts</p>
    <div className='buttons'>
        <div className='leftButtons'>
            <button className='customize'>Customize a period</button>
            <button className='select'>Select a period</button>
        </div>
        <div className='rightButton'>
            <button>
                <img className='icon' src="/images/cards-icons/calendar.png" alt=""/>
                <span>Tout</span>
            </button>
        </div>
    </div>
    <p className='period'>Period</p>
</div>
)}

export default Header