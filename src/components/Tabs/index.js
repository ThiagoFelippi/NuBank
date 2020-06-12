import React from 'react'

import {Container, TabsContainer, TabItem, TabText} from './styles'
import {MaterialIcons as Icon} from '@expo/vector-icons'

export default Header = ({translateY}) => {
  return(
  <Container style={{
    transform: [{
      translateY: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [0, 30],
        extrapolate: "clamp"
      })
    }],
    opacity: translateY.interpolate({
      inputRange: [0, 380],
      outputRange: [1, 0.3],
      extrapolate: 'clamp'
    })
  }}>
    <TabsContainer
      horizontal={true}
      showsHorizonatalScrollIndicator={false} 
      contentContainerStyle={{
        paddingLeft: 10,
        paddingRight: 20
      }}
    >
      <TabItem>
        <Icon name="person-add" size={24} color="#FFF" />
        <TabText>
          Indicar amigos
        </TabText>
      </TabItem>

      <TabItem>
        <Icon name="chat-bubble-outline" size={24} color="#FFF" />
        <TabText>
          Cobrar
        </TabText>
      </TabItem>

      <TabItem>
        <Icon name="arrow-downward" size={24} color="#FFF" />
        <TabText>
          Depositar
        </TabText>
      </TabItem>

      <TabItem>
        <Icon name="arrow-upward" size={24} color="#FFF" />
        <TabText>
          Transferir
        </TabText>
      </TabItem>

      <TabItem>
        <Icon name="lock" size={24} color="#FFF" />
        <TabText>
            Bloquear cartão
        </TabText>
      </TabItem>
    </TabsContainer>
  </Container>
  )
}