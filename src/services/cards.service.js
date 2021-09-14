import axios from 'axios'

class CardsService {
  API_URL = 'https://deckofcardsapi.com/api/deck'

  async generateDeck(deckCount = 1) {
    const response = await axios.get(`${this.API_URL}/new/shuffle/?deck_count=${deckCount}`)
    return response.data
  }

  async drawCardsFromDeck(deckId, cardAmount) {
    const response = await axios.get(`${this.API_URL}/${deckId}/draw/?count=${cardAmount}`)
    return response.data
  }
}

const cardsService = new CardsService()

export default cardsService
