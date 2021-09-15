import { hot } from 'react-hot-loader/root'
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import Header from './components/Header/Header'
import { GlobalStyle } from './index.styles'
import Form from './pages/home/Form'
import Game from './pages/game/Game'
import store from './store'

function App() {
  return (
    <StoreProvider store={store}>
      <GlobalStyle />
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact component={Form} />
          <Route path="/game" component={Game} />
          <Route>404</Route>
        </Switch>
      </Router>
    </StoreProvider>
  )
}

export default hot(App)
