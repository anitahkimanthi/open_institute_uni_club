import React from 'react'
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import { StepLabel } from '@material-ui/core'
import { data } from '../data/content'

export default function VerticalLinearStepper () {
  const programmCategories = data.programme.categories
  return (
    <div className='row no-gutters justify-content-center section'>
      <Stepper orientation='vertical' className='list'>
        {programmCategories.map((c, i) => (
          <Step key={i}>
            <StepLabel>{c}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}
