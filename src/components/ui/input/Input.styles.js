import styled, { css } from 'styled-components'

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 4px;
  padding: 12px 8px;
  border-color: black;
  outline: none;

  ${({ error }) =>
    error &&
    css`
      border-color: red;
      &:focus {
        border-color: red;
      }
    `}
`

export const InputError = styled.div`
  color: red;
`

export const InputWrapper = styled.div`
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`
