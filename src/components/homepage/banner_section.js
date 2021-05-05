import React from 'react'
import { data } from '../data/content'

export default function banner_section () {
  const bannerData = data.banner
  return (
    <div className='row no-gutters justify-content-center banner'>
      <img src={bannerData.image} alt='background' className='img-fluid ' />
      <div className='introduction col-10 col-lg-4'>
        <div className='introcontent'>
          <div className='welcome'>
            <span className='hr'>
              <hr />
            </span>
            <span className='welc'>{bannerData.welcome}</span>
            <span className='hr'>
              {' '}
              <hr />
            </span>
          </div>
          <span className='logo'>{bannerData.logo}</span>
        </div>
      </div>
    </div>
  )
}
