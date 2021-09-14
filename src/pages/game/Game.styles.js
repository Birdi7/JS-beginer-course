import styled, { css } from 'styled-components'

export const GameWrapper = styled.div`
  max-width: 1200px;
  padding: 60px 20px;
  margin: 0 auto;
`

export const GameTitle = styled.h1`
  font-size: 32px;
`

export const DeckStyled = styled.div`
  width: 100%;

  img {
    display: block;
    width: 150px;
    margin: 0 auto;
    cursor: pointer;
    user-select: none;

    &:hover {
      box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.3);
    }
  }

  ${({ isLoading }) =>
    isLoading &&
    css`
      pointer-events: none;
      cursor: not-allowed;

      img {
        opacity: 0.3;
      }
    `}
`

export const CardImg = styled.img`
  width: 80px;
`
