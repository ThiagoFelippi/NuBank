import React from 'react'

import {Container, Top, Logo, Title} from './styles'

import logo from '../../assets/Nubank_Logo.png'
import {MaterialIcons as Icon} from '@expo/vector-icons'

export default Header = () => {
  return(
    <Container>
      <Top>
        <Logo source={logo}/>
        <Title> Diego </Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={24} color="#fff" />
    </Container>
  )
}