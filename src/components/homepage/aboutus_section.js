import React from 'react'
import { data } from '../data/content'
import { Button } from '@material-ui/core'

export default function aboutus_section (props) {

  const aboutData = data.about 
  const { handleClickOpen } = props // distructing props

  return (
    <div className='row no-gutters about'>
      <div className='col-12 col-md-4'>
        <img src={aboutData.image} alt='title' className='img-fluid' />
      </div>
      <div className='col-12 col-md-8'>
        <h2>{aboutData.title}</h2>
        <p>{aboutData.description}</p>
        <Button
          variant='contained'
          className='readmore'
          onClick={() => handleClickOpen(aboutData)}
        >
          {aboutData.readmore}
        </Button>
      </div>
    </div>
  )
}
