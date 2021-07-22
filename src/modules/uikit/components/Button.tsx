import React from 'react'
import styled from 'styled-components/native'
import {Typography} from '../Typography'
import {Colors} from '../Colors'
import {Touchable} from './Touchable'

type Props = {
  title?: string
  onPress: () => void
}

export const Button: React.FC<Props> = ({title, onPress, children}) => {
  return (
    <Touchable onPress={onPress}>
      <Container>
        {title ? (
          <Typography.Title color={Colors.WHITE}>{title}</Typography.Title>
        ) : (
          <>{children}</>
        )}
      </Container>
    </Touchable>
  )
}

const Container = styled.View({
  height: 40,
  minWidth: 40,
  paddingHorizontal: 15,
  alignItems: 'center',
  justifyContent: 'center',
})
