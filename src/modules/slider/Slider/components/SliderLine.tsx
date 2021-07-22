import React from 'react'
import {LayoutChangeEvent} from 'react-native'
import {
  TapGestureHandler,
  TapGestureHandlerStateChangeEvent,
} from 'react-native-gesture-handler'
import {Colors} from '../../../uikit'
import styled from 'styled-components/native'

interface IProps {
  onLayout: (e: LayoutChangeEvent) => void
  tapGestureHandler: (e: TapGestureHandlerStateChangeEvent) => void
}

export const SliderLine: React.FC<IProps> = ({onLayout, tapGestureHandler}) => {
  return (
    <>
      <SliderLineComponent onLayout={onLayout} />
      <TapGestureHandler onHandlerStateChange={tapGestureHandler}>
        <SliderGestureContainer />
      </TapGestureHandler>
    </>
  )
}

const SliderGestureContainer = styled.View({
  position: 'absolute',
  top: -14,
  width: '100%',
  height: 32,
})

const SliderLineComponent = styled.View({
  height: 4,
  borderRadius: 4,
  backgroundColor: Colors.GREY2,
})
