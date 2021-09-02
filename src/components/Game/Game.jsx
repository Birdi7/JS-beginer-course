import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { GameTitle, GameWrapper } from './Game.styles'
import Loader from '../Loader/Loader'
import Deck from './Deck'
import Cards from './Cards'

function Game({ name, age }) {
  const history = useHistory()
  useLayoutEffect(() => {
    if (!name || !age) {
      history.replace('/')
    }
  }, [])

  const [deckId, setDeckId] = useState()
  const [cards, setCards] = useState([])
  const [remaining, setRemaining] = useState(52)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').then((response) => {
      if (response.data.success === true) {
        setDeckId(response.data.deck_id)
        setRemaining(response.data.remaining)
        setLoading(false)
      }
    })
  }, [])

  const handleDrawCard = () => {
    setLoading(true)
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`).then((response) => {
      setRemaining(response.data.remaining)
      setCards((prevCards) => [...prevCards, ...response.data.cards])
      setLoading(false)
    })
  }

  const [points, setPoints] = useState(0)

  return (
    <GameWrapper>
      {loading && !deckId ? (
        <Loader />
      ) : (
        <>
          <GameTitle>Hello {name}!</GameTitle>
          <Deck count={remaining} loading={loading} drawCard={handleDrawCard} />
          <Cards cards={cards} />
        </>
      )}
    </GameWrapper>
  )
}

export default Game
