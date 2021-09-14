export default function parseCardPoint(card) {
  switch (card) {
    case 'ACE':
      return 11
    case 'KING':
    case 'QUEEN':
    case 'JACK':
    case '0':
      return 10
    default:
      return Number(card)
  }
}
