import React from 'react'
import './OverallPerformance.css'
import {FiShoppingCart} from 'react-icons/fi'
import { CircularProgressbar, buildStyles,CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const OverallPerformance = () => {
return (
<div className='overallPerformance'>
  <h5>Overall Performance</h5>
  <div className='overallPerformance-wrapper'>
    <div className='overallPerformance-left'>
        <div className='overallPerformance-top'>
          <div className='overallPerformance-topLeft'>
            <img src="/images/cards-icons/shopping-bag.png" alt="" className='overallPerformance-Image topLeftImage'/>
            <div className='overallPerformance-Info'>
              <strong>1M €</strong>
              <small>Sales</small>
            </div>
          </div>
          <div className='overallPerformance-topRight'>
            <img src="/images/cards-icons/credit-card.png" alt="" className='overallPerformance-Image topRightImage'/>
            <div className='overallPerformance-Info'>
              <strong>31K</strong>
              <small>Transactions</small>
            </div>
          </div>
        </div>
        <div className='overallPerformance-bottom'>
          <div className='overallPerformance-bottomLeft'>
            <div className='shopping-cart-icon'>
              <FiShoppingCart className='icon' color="orange"/>
            </div>
            <div className='overallPerformance-Info'>
              <strong>43 €</strong>
              <small>Panier moyen</small>
            </div>
          </div>
          <div className='overallPerformance-bottomCenter'>
            <img src="/images/cards-icons/share-2.png" alt="" className='overallPerformance-Image bottomCenterImage'/>
            <div className='overallPerformance-Info'>
              <strong>689</strong>
              <small>Number of shares</small>
            </div>
          </div>
          <div className='overallPerformance-bottomRight'>
            <img src="/images/cards-icons/navigation.png" alt="" className='overallPerformance-Image bottomRightImage'/>
            <div className='overallPerformance-Info'>
              <strong>31K</strong>
              <small>Number of clicks</small>
            </div>
          </div>
        </div>
    </div>
    <div className='overallPerformance-right'>
      <div className='overallPerformance-right-wrapper'>
        <p>Conversion</p>
        <CircularProgressbarWithChildren
        value={83}
        text={`${83}%`}
        strokeWidth={10}
        circleRatio={0.95}
        styles={buildStyles({
          textColor: "black",
          pathColor: `rgb(204, 89, 204)`,
          strokeLinecap: "butt",
          rotation: 1 / 3 + 1 / 8,
          trailColor: "white",
          textSize: "8px",
        })}
        />
      </div>
    </div>
  </div>
</div>
)}

export default OverallPerformance