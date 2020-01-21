import React from 'react'
import './App.scss'
import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import Footer from '../Footer/Footer'
import Cards from '../Cards/Cards'

const App: React.FC = () => {
  return (
    <>
      <div id='wrapper'>
        <Header />
        <Intro />
        <Cards title='Inosuke identifies as:' />
      </div>
      <Footer footerText={`© ${new Date().getFullYear()} Ugarnii Kaban`} />
    </>
  )
}

export default App
