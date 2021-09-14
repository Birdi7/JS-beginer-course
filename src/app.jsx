import { hot } from 'react-hot-loader/root'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider as StoreProvider } from 'react-redux'
import Header from './components/Header/Header'
import { GlobalStyle } from './index.styles'
import Form from './pages/home/Form'
import Game from './pages/game/Game'
import store from './store'

function App() {
  const [state, setState] = useState({})

  return (
    <StoreProvider store={store}>
      <GlobalStyle />
      <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Form
              onSubmit={({ name, age }) => {
                setState({ name, age })
              }}
            />
          </Route>
          <Route path="/game">
            <Game name={state.name} age={state.age} />
          </Route>
          <Route>404</Route>
        </Switch>
      </Router>
    </StoreProvider>
  )
}

export default hot(App)
