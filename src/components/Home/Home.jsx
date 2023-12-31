import React from 'react'
import Navhead from './Navhead'
import Newscard from './Newscard'
import Postdata from './Postdata'
import Posting from './Posting'
import Sidecard from './Sidecard'
import StoryCarousel from './Storycarousel'
import Suggestioncard from './Suggestioncard'

const Home = () => {

  
  return (
    <div style={{ overflow: 'hidden' }}>
      <div className="row bg-dark">
        <div className="col-12">
            <Navhead/>
        </div>
        <div className="row container">
            <div className="ms-2 col-lg-3 d-none d-xl-block">
                <Sidecard/>
            </div>
            <div className='col-xl-5 col-12 ms-2'>
                <StoryCarousel/>
                <Posting/>
                <Postdata />
            </div>
            <div className="col-lg-3 d-none d-xl-block">
                <Suggestioncard /> <br />
                <Newscard/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
