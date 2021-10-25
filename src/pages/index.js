import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

import Container from '../components/Container'
import Title from '../components/Title'
import Menu from '../components/Menu'

export default () => {
  const history = useHistory()

  return <Container>
    <Title>FluxMusic</Title>
    <Menu items={[
      {
        name: 'Artistas',
        onClick: () => history.push('/artists')
      },
      {
        name: 'Discos',
        onClick: () => history.push('/discs')
      },
      {
        name: 'Notícias',
        onClick: () => history.push('/news')
      },
    ]} />
  </Container>
}