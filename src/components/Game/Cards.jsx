import React from 'react'

function Cards({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <img src={card.image} alt="" />
      ))}
    </div>
  )
}

export default Cards
