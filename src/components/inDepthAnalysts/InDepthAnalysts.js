import React from 'react'
import './InDepthAnalysts.css'
import {BsCircle} from 'react-icons/bs'
import { PieChart } from 'react-minimal-pie-chart';


const InDepthAnalysts = () => {

return (
<div className='inDepthAnalysts'>
  <h5>In-Depth Analysts</h5>
  <div className='inDepthAnalysts-wrapper'>
    <div className='inDepthAnalysts-left'>
      <div className='inDepthAnalysts-leftTop'>
        <p>Sales by part of day</p>
        <span>see more</span>
      </div>
      <div className='inDepthAnalysts-leftCenter'>
          <div className='inDepthAnalysts-leftCenter-wrapper'>
            <PieChart
            startAngle={45}
            paddingAngle={7}
            
            data={[
            { title: 'night', value: 35, color: 'rgb(10, 10, 87)' },
            { title: 'evening', value: 30, color: 'orange' },
            { title: 'late', value: 15, color: 'green' },
            { title: 'morning', value: 20, color: 'red' },
            ]}
            />
          </div>
      </div>
      <div className='inDepthAnalysts-leftBottom'>
          <ul>
            <li>
              <div>
                <BsCircle color="red"/>
                <span>Morning</span>
              </div>
              <span>178,47 k€</span>
            </li>
            <li>
              <div>
                <BsCircle color="orange"/>
                <span>Evening</span>
              </div>
              <span>265,76 k€</span>
            </li>
            <li>
              <div>
                <BsCircle color="blue"/>
                <span>Night</span>
              </div>
              <span>378,47 k€</span>
            </li>
            <li>
              <div>
                <BsCircle color="green"/>
                <span>Late</span>
              </div>
              <span>90,47 k€</span>
            </li>
          </ul>
      </div>
    </div>
    <div className='inDepthAnalysts-right'>
      <div className='inDepthAnalysts-right-leftSide'>
        <div className='inDepthAnalysts-rightTop'>
          <p>Sales by part of day</p>
          <span>see more</span>
        </div>
        <div className='inDepthAnalysts-rightBottom'>
          <div className='item'>
            <div className='ios-sales'></div>
          </div>
          <div className='item'>
            <div className='andr-sales'></div>
          </div>
          <div className='item'>
            <div className='vide-sales'></div>
          </div>
          <div className='item'>
            <div className='win-sales'></div>
          </div>
          <div className='item'>
            <div className='mac-sales'></div>
          </div>
        </div>
      </div>
      <div className='inDepthAnalysts-right-rightSide'> 
        <div className='inDepthAnalysts-rightTop'>
          <p>Sales by categories</p>
          <span>see more</span>
        </div>
        <div className='inDepthAnalysts-rightBottom'>
          <div className='item'>
            <div className='ios-sales'></div>
          </div>
          <div className='item'>
            <div className='andr-sales'></div>
          </div>
          <div className='item'>
            <div className='vide-sales'></div>
          </div>
          <div className='item'>
            <div className='win-sales'></div>
          </div>
          <div className='item'>
            <div className='mac-sales'></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)}

export default InDepthAnalysts