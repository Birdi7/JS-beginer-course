import React from 'react'
import { CardImg } from '../Game.styles'

function Cards({ cards }) {
  return (
    <div>
      {cards.map((card, i) => (
        <CardImg key={i + card.value} src={card.image} alt="" />
      ))}
    </div>
  )
}

export default Cards
