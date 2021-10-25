import React, { useEffect } from 'react'
import axios from 'axios'
import Container from '../components/Container'
import BackButton from '../components/Button'
import List from '../components/List'
import Title from '../components/Title'

export default () => {
  return <Container>
    <Title>ARTISTS</Title>
    <BackButton />
    <List items={data} />
  </Container>
}

const data = ['Lucas', 'Gabriel', 'Matheus', 'Luiz']