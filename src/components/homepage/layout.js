import React, { useState } from 'react'
import BannerSection from './banner_section'
import AboutSection from './aboutus_section'
import ProgrammeSection from './programme_section'
import RegisterSection from './register_section'
import TestimonySection from './testimonies_section'
import PartnerSection from './partners_section'
import Categories from './categories'
import ReadMore from '../modals/readmore_modals'

export default function Layout () {

  const [open, setOpen] = useState(false) // set state
  const [data, setData] = useState('') // set state

  // when user clicks on menu show sidebar
  const handleClickOpen = d => {
    setOpen(true)
    setData(d)
  }

  // when user clicks on outside close the menu
  const handleClose = () => {
    setOpen(false)
    setData('')
  }

  return (
    <div className='row no-gutters justify-content-center homepage contentLayout'>
      <div className='col-12'>
        <BannerSection />
      </div>
      <div className='col-12 col-lg-8 categories'>
        <Categories />
      </div>
      <div className='col-12 col-lg-10 col-xl-8 content'>
        <AboutSection
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
        <hr />
        <ProgrammeSection
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
        <hr />
        <RegisterSection
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      </div>
      <div className='col-12 col-lg-12 nopadding'>
        <TestimonySection />
      </div>

      <div className='col-12'>
        <PartnerSection />
      </div>

      {open && (
        <ReadMore
          data={data}
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
        />
      )}
    </div>
  )
}
