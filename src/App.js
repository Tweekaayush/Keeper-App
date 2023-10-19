import React, { Fragment } from 'react'
import "./App.css"
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Content from "./components/Content/Content"
import Metadata from './components/layout/Metadata'

const App = () => {
  return (
    <Fragment>
      <Metadata title="Keeper App"></Metadata>
      <Header/>
      <Content/>
      <Footer/>
    </Fragment>
  )
}

export default App
