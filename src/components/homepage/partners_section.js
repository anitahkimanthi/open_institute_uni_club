import React from 'react'
import { data } from '../data/content'

export default function partners_section () {
  const partners = data.partners

  return (
    <div className='row no-gutters justify-content-center partners'>
      <h3 className='col-12 text-center'>{partners.title}</h3>
      {partners.images.map((image, i) => (
        <div className='col-12 col-md-2' key={i}>
          <img src={image} alt='title' className='img-fluid' />
        </div>
      ))}
    </div>
  )
}
