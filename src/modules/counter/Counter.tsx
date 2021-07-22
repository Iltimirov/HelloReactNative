import React from 'react'
import {Button, Typography} from '../uikit'
import {ButtonContainer, Container} from './styles'
import {useCounter} from './useCounter'

const {Title} = Typography

export const Counter: React.FC = () => {
  const {count, increment, decrement} = useCounter()
  return (
    <Container>
      <Title>Simple counter</Title>
      <Title>{count}</Title>
      <ButtonContainer>
        <Button title="—" onPress={decrement} />
        <Button title="+" onPress={increment} />
      </ButtonContainer>
    </Container>
  )
}
