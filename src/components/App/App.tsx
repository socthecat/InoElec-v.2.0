import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import store from '../../store'
import './App.scss'
import Header from '../Header/Header'
import Intro from '../Intro/Intro'
import Footer from '../Footer/Footer'
import Cards from '../Cards/index'
import FormikForm from '../FormikForm/FormikForm'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div id='wrapper' data-testid='wrapper'>
          <Header />
          <Switch>
            <Route exact path='/' component={Intro} />
            <Route path='/goals' render={(props) => <Cards {...props} title='Inosuke identifies as:'/>} />
            <Route path='/formik' component={FormikForm} />
          </Switch>
        </div>
        <Footer footerText={`© 2019-${new Date().getFullYear()} Ugarnii Kaban`} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
