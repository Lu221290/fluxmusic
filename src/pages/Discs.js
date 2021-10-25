import React from 'react'
import Container from '../components/Container'
import BackButton from '../components/Button'
import List from '../components/List'
import Title from '../components/Title'

export default () => <Container>
  <Title>DISCS</Title>
  <BackButton />
  <List items={data} />
</Container>

const data = ['Nirvana', 'Pearl Jam', 'Iron Maiden', 'AC/DC']