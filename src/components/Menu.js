import React from 'react'
import styled from 'styled-components'

export default ({ items = [] }) => {
  return <MenuContainer>
    <Menu>
      {items.map(({ name, onClick }) =>  <MenuItem key={name} onClick={onClick}>{name}</MenuItem>)}
    </Menu>
  </MenuContainer>
}

const MenuContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
`

const Menu = styled.ul`
  list-style: none;
`

const MenuItem = styled.li`
  margin-top: 10px;
  margin-bottom: 10px;
  color: #ccc;
  cursor: pointer;

  &:hover {
    color: #fff;
  }
`