import React from 'react'

import QRCode from 'react-native-qrcode-svg'
import {Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText } from './styles'

import {MaterialIcons as Icon} from '@expo/vector-icons'

export default function Menu({translateY}){
  return(
    <Container 
    showsVerticalScrollIndicator={false} 
    contentContainerStyle={{alignItems: 'center'}}  
    style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1]
      })
    }}  >
      <Code>
        <QRCode 
          value="https://nubank.com.br/"
          size={80}
          backgroundColor="#FFF"
          color="#8B10AE"
        />
      </Code>
      <Nav>
        <NavItem>
          <Icon name="help-outline" size={20} color="#fff" />
          <NavText> Me ajuda </NavText>
        </NavItem>

        <NavItem>
          <Icon name="person-outline" size={20} color="#fff" />
          <NavText> Perfil </NavText>
        </NavItem>
        
          <NavItem>
            <Icon name="credit-card" size={20} color="#fff" />
            <NavText> Configurar Cartão </NavText>
          </NavItem>

          <NavItem>
            <Icon name="smartphone" size={20} color="#fff" />
            <NavText> Configurações do app </NavText>
          </NavItem>

          <SignOutButton>
            <SignOutButtonText>
              Sair do app
            </SignOutButtonText>
          </SignOutButton>
      </Nav>
    </Container>
  )
}