import React from 'react'
import styled from 'styled-components'

export default ({ items }) => {
  return <ListContainer>
    <List>
      {items.map(item => <ListItem key={item}>{item}</ListItem>)}
    </List>
  </ListContainer>
}

const ListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 20px;
`

const List = styled.ul`
  text-align: center;
  list-style: none;
`

const ListItem = styled.li`
  width: 100%;
  text-align: left;
  color: #ccc;
  margin-top: 10px;
  margin-bottom: 10px;

  &:hover {
    color: #fff;
  }
`