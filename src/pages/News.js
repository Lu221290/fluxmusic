import React from 'react'
import Container from '../components/Container'
import BackButton from '../components/Button'
import List from '../components/List'
import Title from '../components/Title'

export default () => <Container>
  <Title>NEWS</Title>
  <BackButton />
  <List items={data} />
</Container>

const data = ['Politicas', 'Tecnologia', 'Programming']