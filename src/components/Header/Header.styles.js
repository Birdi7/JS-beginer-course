import styled from 'styled-components'
import logoPng from '../../assets/logo.png'

export const StyledHeader = styled.header`
  background-color: aliceblue;
  padding: 12px 0;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.3);
`

export const Logo = styled.span`
  background: url(${logoPng}) no-repeat;
  background-size: contain;
  height: 40px;
  width: 40px;
  display: block;
`

export const LogoLink = styled.a`
  display: flex;
  align-items: center;

  text-decoration: none;

  color: black;
  font-weight: bold;
`
