import React from 'react'
import styled from 'styled-components/native'
import {Colors, Typography} from '../uikit'
import {WINDOW_WIDTH} from '../uikit/'

const {Title, Subtitle} = Typography

interface IProps {
  title?: string
  subtitle?: string
}

export const Container: React.FC<IProps> = ({title, subtitle, children}) => {
  return (
    <ContainerComponent>
      {Boolean(title) && <Title>{title}</Title>}
      <Padding padding={4} />
      {Boolean(subtitle) && <Subtitle>{subtitle}</Subtitle>}
      <Padding padding={8} />
      {children}
    </ContainerComponent>
  )
}

const Padding = styled.View<{padding: number}>(({padding}) => ({
  paddingBottom: padding,
}))

const ContainerComponent = styled.View({
  width: WINDOW_WIDTH,
  paddingHorizontal: 16,
  paddingTop: 8,
  backgroundColor: Colors.WHITE,
  flex: 1,
  justifyContent: 'center',
})
