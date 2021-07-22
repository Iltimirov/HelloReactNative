import React from 'react'
import {StyleSheet} from 'react-native'
import styled from 'styled-components/native'
import Animated, {useAnimatedStyle} from 'react-native-reanimated'
import {CURSOR_HALF_WIDTH} from '../constants'
import {Colors} from '../../../uikit'

interface IProps {
  translateX: Animated.SharedValue<number>
}

export const ColoredLine: React.FC<IProps> = ({translateX}) => {
  const activeLineStyle = useAnimatedStyle(() => ({
    width: translateX.value + CURSOR_HALF_WIDTH,
  }))
  return (
    <AbsoluteView pointerEvents="none">
      <ActiveSliderLine style={activeLineStyle} />
    </AbsoluteView>
  )
}

const ActiveSliderLine = styled(Animated.View)({
  height: 4,
  borderRadius: 4,
  backgroundColor: Colors.PRIMARY,
})

const AbsoluteView = styled(Animated.View)({
  ...StyleSheet.absoluteFillObject,
})
