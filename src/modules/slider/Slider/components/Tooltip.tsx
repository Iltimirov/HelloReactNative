import React from 'react'
import {StyleSheet} from 'react-native'
import styled from 'styled-components/native'
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import {clamp} from 'react-native-redash'
import AnimateableText from 'react-native-animateable-text'
import {Colors} from '../../../uikit'

interface IProps {
  translateX: Animated.SharedValue<number>
  value: Animated.SharedValue<number>
  showTooltip: Animated.SharedValue<boolean>
  sliderWidth: Animated.SharedValue<number>
}

export const Tooltip: React.FC<IProps> = ({
  translateX,
  value,
  showTooltip,
  sliderWidth,
}) => {
  const tooltipOpacity = useAnimatedStyle(() => ({
    opacity: withTiming(showTooltip.value ? 1 : 0),
  }))
  const tooltipCloudLeft = useAnimatedStyle(() => ({
    left: clamp(translateX.value - 22, -5, sliderWidth.value - 39),
  }))
  const tooltipTriangleLeft = useAnimatedStyle(() => ({
    left: translateX.value + 3,
  }))
  const animatedProps = useAnimatedProps(() => ({
    text: String(value.value),
  }))
  return (
    <AbsoluteView style={tooltipOpacity} pointerEvents="none">
      <TooltipCloud style={tooltipCloudLeft}>
        <StyledText animatedProps={animatedProps} />
      </TooltipCloud>
      <TooltipTriangle style={tooltipTriangleLeft} />
    </AbsoluteView>
  )
}

const AbsoluteView = styled(Animated.View)({
  ...StyleSheet.absoluteFillObject,
})

const StyledText = styled(AnimateableText)({
  textAlign: 'center',
  color: Colors.WHITE,
  marginTop: 8,
})

const TooltipCloud = styled(Animated.View)({
  top: -54,
  width: 64,
  height: 36,
  borderRadius: 8,
  backgroundColor: Colors.TOOLTIP_BLACK,
})

const TooltipTriangle = styled(Animated.View)({
  top: -54,
  borderTopWidth: 7,
  borderTopColor: Colors.TOOLTIP_BLACK,
  borderLeftWidth: 7,
  borderLeftColor: Colors.TRANSPARENT,
  borderRightWidth: 7,
  borderRightColor: Colors.TRANSPARENT,
  height: 0,
  width: 0,
})
