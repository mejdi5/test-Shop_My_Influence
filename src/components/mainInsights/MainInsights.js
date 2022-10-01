import React from 'react'
import './MainInsights.css'

const MainInsights = () => {
return (
<div className='mainInsights'>
  <h5>Main Insights</h5>
  <div className='mainInsights-wrapper'>
    <div className='mainInsights-left'>
      <div className="mainInsights-leftItem">
        <img src="/images/cards-icons/smartphone.png" alt="" className='mainInsights-leftItemImage smartphone'/>
        <div>
          <strong>Mobile</strong>
          <small>Most used device</small>
        </div>
      </div>
      <div className="mainInsights-leftItem">
        <img src="/images/cards-icons/target.png" alt="" className='mainInsights-leftItemImage target'/>
        <div>
          <strong>Black</strong>
          <small>Most popular color</small>
        </div>
      </div>
      <div className="mainInsights-leftItem">
        <img src="/images/cards-icons/award.png" alt="" className='mainInsights-leftItemImage award'/>
        <div>
          <strong>Baskets</strong>
          <small>Most popular subcat</small>
        </div>
      </div>
      <div className="mainInsights-leftItem">
        <img src="/images/cards-icons/calendar.png" alt="" className='mainInsights-leftItemImage calendar'/>
        <div>
          <strong>Monday</strong>
          <small>Star of the week</small>
        </div>
      </div>
      <div className="mainInsights-leftItem">
        <img src="/images/cards-icons/package.png" alt="" className='mainInsights-leftItemImage package'/>
        <div>
          <strong>Lorem ipsum</strong>
          <small>Most popular product</small>
        </div>
      </div>
      <div className="mainInsights-leftItem">
        <img src="/images/cards-icons/sun.png" alt="" className='mainInsights-leftItemImage sun'/>
        <div>
          <strong>Evening</strong>
          <small>Star of the day</small>
        </div>
      </div>
    </div>
    <div className='mainInsights-right'>
      <div className='mainInsights-right-leftSide'>
        <div className='mainInsights-right-Image instagram'>
          <img src="/images/cards-icons/instagram.png" alt=""/>
        </div>
        <div className='mainInsights-right-Info'>
          <strong>Instagram</strong>
          <small>Most popular social media</small>
        </div>
      </div>
      <div className='mainInsights-right-rightSide'>
        <div className='mainInsights-right-Image influencer'> 
            <img src="/images/avatars/image.png" alt=""/>
        </div>
        <div className='mainInsights-right-Info'>
            <strong>Idee2look</strong>
            <small>Most popular influencer</small>
        </div>
      </div>
    </div>
  </div>
</div>
)}

export default MainInsights