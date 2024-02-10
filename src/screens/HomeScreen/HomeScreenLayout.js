import React, { Fragment } from 'react'
import HomeScreenBanner from './HomeScreenBanner'
import CardsSection from './CardsSection'

const HomeScreenLayout = () => {
  return (
    <Fragment>
        <div className='my-10 flex flex-col gap-10'>    
          <HomeScreenBanner />
          <CardsSection />
        </div>
    </Fragment>
  )
}

export default HomeScreenLayout
