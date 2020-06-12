import styled from 'styled-components'
import {Animated} from 'react-native'

export const Container = styled.View`
  flex: 1;
  background: #8B10AE;
  justify-content: center;
`

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`

export const Card = styled(Animated.View)` 
  /* Quando o elemento sofre animacao ele tem que ser assim, porque se for só uma view não vai dar certo  */
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  top: 0px;
`

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  align-items: center;
`

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`

export const Title = styled.Text`
  font-size: 13px;
  color: #999;
`

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-radius: 4px;
`

export const Annotation = styled.Text`
  font-size: 13px;
  color: #333;
`