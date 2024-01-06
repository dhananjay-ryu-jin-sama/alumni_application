import React from 'react'
import Dashboard from '../components/dashboard'
import Events from '../components/events'
import News from '../components/news'
import Welcome from '../components/Welcome'
import Map from '../components/Map'
import Footer from '../components/Footer'
import Latest from '../components/latest_member'
import Gallery from '../components/gallery'

function Home() {
  return (
    <div>
      <Welcome/>
      <Events/>
      <News/>
      <Gallery/>
      <Latest/>
      <Dashboard/>
      <Map/>
      <Footer/>
    </div>
  )
}

export default Home
