import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import Footer from '../Footer/Footer'
import Cards from '../Cards/Cards'

function App () {
  return (
    <>
      <div id='wrapper'>
        <Header />
        <Intro />
        <Cards title='Reasons trust Insoke???' />
      </div>
      <Footer footerText={`© ${new Date().getFullYear()} Ugarnii Kaban`} />
    </>
  )
}

export default App
