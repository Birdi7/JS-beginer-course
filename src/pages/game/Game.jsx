import React, { useEffect, useLayoutEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { GameTitle, GameWrapper } from './Game.styles'
import Loader from '../../components/ui/loader/Loader'
import Deck from './components/Deck'
import Cards from './components/Cards'
import { drawCard, initCards } from '../../store/cards/cards.actions'

function Game() {
  const { name, age } = useSelector((state) => state.user)
  const history = useHistory()
  useLayoutEffect(() => {
    if (!name || !age) {
      history.replace('/')
    }
  }, [])

  const { deckId, remaining, cards, loading, points, inited } = useSelector((state) => state.cards)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!inited) {
      dispatch(initCards())
    }
  }, [inited])

  const handleDrawCard = () => {
    if (remaining > 0) {
      dispatch(drawCard())
    }
  }

  if (loading && !deckId) {
    return (
      <GameWrapper>
        <Loader />
      </GameWrapper>
    )
  }

  return (
    <GameWrapper>
      <GameTitle>Hello {name}!</GameTitle>
      <Deck count={remaining} loading={loading} drawCard={handleDrawCard} />
      <div>Score: {points}</div>
      <Cards cards={cards} />
    </GameWrapper>
  )
}

export default Game
