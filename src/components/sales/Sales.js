import React from 'react'
import './Sales.css'

const Sales = () => {

return (
  <div className='sales'>
    <h5>Sales</h5>
    <div className='sales-wrapper'>
      <div className='sales-left'>
          <div className='sales-left-leftSide'>
            <div className='sales-left-top'>
              <p>Sales by influencers</p>
              <span>see more</span>
            </div>
            <div className='sales-left-bottom'>
              <ul className='sales-left-bottom-influencers'>
                <li>
                  <img src="/images/avatars/image-2.png" alt="" className='first-avatar'/>
                  <p>Lorem ipsum</p>
                </li>
                <li>
                  <img src="/images/avatars/image-1.png" alt="" className='second-avatar'/>
                  <p>Lorem ipsum</p>
                </li>
                <li>
                  <img src="/images/avatars/image-3.png" alt="" className='third-avatar'/>
                  <p>Lorem ipsum</p>
                </li>
                <li>
                  <img src="/images/avatars/image-4.png" alt="" className='fourth-avatar'/>
                  <p>Lorem ipsum</p>
                </li>
                <li>
                  <img src="/images/avatars/image-5.png" alt="" className='fifth-avatar'/>
                  <p>Lorem ipsum</p>
                </li>
              </ul>
              <ul className='sales-left-bottom-percentage'>
                <li>
                  <div className='first-percentage'></div>
                </li>
                <li>
                  <div className='second-percentage'></div>
                </li>
                <li>
                  <div className='third-percentage'></div>
                </li>
                <li>
                  <div className='fourth-percentage'></div>
                </li>
                <li>
                  <div className='fifth-percentage'></div>
                </li>
              </ul>
            </div>            
          </div>
          <div className='sales-left-rightSide'>
            <div className='sales-left-top'>
              <p>Sales by products</p>
              <span>see more</span>
            </div>
            <div className='sales-left-bottom'>
              <ul className='sales-left-bottom-products'>
                <li>
                  <img src="/images/products/01.png" alt=""/>
                  <p>Mac</p>
                </li>
                <li>
                  <img src="/images/products/Photo-1.png" alt=""/>
                  <p>Sephora</p>
                </li>
                <li>
                  <img src="/images/products/Photo-2.png" alt=""/>
                  <p>Samsung</p>
                </li>
                <li>
                  <img src="/images/products/Photo-3.png" alt=""/>
                  <p>Nike Joyride</p>
                </li>
                <li>
                  <img src="/images/products/Photo.png" alt=""/>
                  <p>Lorem ipsum</p>
                </li>
              </ul>
              <ul className='sales-left-bottom-percentage'>
                <li>
                  <div className='first-percentage'></div>
                </li>
                <li>
                  <div className='second-percentage'></div>
                </li>
                <li>
                  <div className='third-percentage'></div>
                </li>
                <li>
                  <div className='fourth-percentage'></div>
                </li>
                <li>
                  <div className='fifth-percentage'></div>
                </li>
              </ul>
            </div>            
          </div>
      </div>
      <div className='sales-right'>
          <div className='sales-right-top'>
            <p>Sales by country</p>
            <span>see more</span>
          </div>
          <div className='sales-right-center'>
            <div>
                <p>France</p>
                <div className='france'></div>
            </div>
            <div>
                <p>Belgique</p>
                <div className='belgique'></div>
            </div>
            <div>
                <p>Switzerland</p>
                <div className='suisse'></div>
            </div>
            <div>
                <p>Tunisia</p>
                <div className='tunisie'></div>
            </div>
            <div>
                <p>United Kingdom</p>
                <div className='angleterre'></div>
            </div>
          </div>
          <div className='hr'>
            <hr/>
          </div>
          <div className='sales-right-bottom'>
            <h4>Sales by gifting and paid compaigns</h4>
            <div className='sales-right-bottom-statistics'>
              <div>
                <p>Gifting compaigns</p>
                <div className='gifting'></div>
              </div>
              <div>
                <p>Paid compaigns</p>
                <div className='paid'></div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
  )}
  
  export default Sales