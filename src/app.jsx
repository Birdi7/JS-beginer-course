import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import { GlobalStyle } from './index.styles'
import Form from './components/Form/Form'
import Game from './components/Game/Game'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/game" component={Game} />
          <Route>404</Route>
        </Switch>
      </Router>
    </>
  )
}

export default hot(App)
