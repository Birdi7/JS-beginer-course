import { hot } from 'react-hot-loader/root'
import React from 'react'
import Header from './components/Header/Header'
import { GlobalStyle } from './index.styles'
import Form from './components/Form/Form'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Form />
    </>
  )
}

export default hot(App)
