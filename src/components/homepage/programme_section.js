import React from 'react'
import { data } from '../data/content'
import { Button } from '@material-ui/core'

export default function programme_section (props) {
  const programmeData = data.programme
  const { handleClickOpen } = props

  return (
    <div className='row programme no-gutters'>
      <div className='col-12 col-md-8'>
        <h2>{programmeData.title}</h2>
        <p>{programmeData.description}</p>
        <Button
          variant='contained'
          className='readmore'
          onClick={() => handleClickOpen(programmeData)}
        >
          {programmeData.readmore}
        </Button>
        <br />
        <br />
      </div>
      <div className='col-12 col-md-4'>
        <img src={programmeData.image} alt='title' className='img-fluid' />
      </div>
    </div>
  )
}
