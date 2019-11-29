import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import Footer from '../Footer/Footer'
import Cards from '../Cards/Cards'
import SVGFilter from '../SVGFilter/SVGFilter'

function App () {
  return (
    <>
      <div id='wrapper'>
        <Header />
        <Intro />
        <Cards title='Reasons trust Insoke???' />
      </div>
      <Footer footerText={`© ${new Date().getFullYear()} Ugarnii Kaban`} />
      <SVGFilter />
    </>
  )
}

export default App
