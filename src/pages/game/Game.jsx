import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GameTitle, GameWrapper } from './Game.styles'
import Loader from '../../components/ui/loader/Loader'
import Deck from './components/Deck'
import Cards from './components/Cards'
import parseCardPoint from '../../utils/cards/parseCardsPoints'
import cardsService from '../../services/cards.service'

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
    cardsService.generateDeck().then((data) => {
      if (data.success === true) {
        setDeckId(data.deck_id)
        setRemaining(data.remaining)
        setLoading(false)
      }
    })
  }, [])

  const [points, setPoints] = useState(0)
  const handleDrawCard = () => {
    if (remaining > 0) {
      setLoading(true)
      cardsService.drawCardsFromDeck(deckId, 1).then((data) => {
        setRemaining(data.remaining)
        setCards((prevCards) => [...prevCards, ...data.cards])
        setPoints((prevPoints) => prevPoints + parseCardPoint(data.cards[0].value))
        setLoading(false)
      })
    }
  }

  return (
    <GameWrapper>
      {loading && !deckId ? (
        <Loader />
      ) : (
        <>
          <GameTitle>Hello {name}!</GameTitle>
          <Deck count={remaining} loading={loading} drawCard={handleDrawCard} />
          <div>Score: {points}</div>
          <Cards cards={cards} />
        </>
      )}
    </GameWrapper>
  )
}

export default Game
