import styled from 'styled-components'

const Title = styled.h1`
  color: #1ed760;
  font-size: 80px;
  text-align: center;
  padding-top: 50px;
  padding-bottom: 50px;

  @media(max-width: 400px) {
    font-size: 40px;
  }

  @media(max-width: 222px) {
    font-size: 30px;
  }
`

export default Title