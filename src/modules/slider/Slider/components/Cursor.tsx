import React from 'react'
import styled from 'styled-components/native'
import {PanGestureHandlerGestureEvent} from 'react-native-gesture-handler'
import {PanGestureHandler} from 'react-native-gesture-handler'
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated'
import {Tooltip} from './Tooltip'
import {CURSOR_HALF_WIDTH, CURSOR_WIDTH} from '../constants'
import {Colors} from '../../../uikit'

interface IProps {
  translateX: Animated.SharedValue<number>
  value: Animated.SharedValue<number>
  panGestureHandler: (event: PanGestureHandlerGestureEvent) => void
  showTooltip: Animated.SharedValue<boolean>
  showRipple: Animated.SharedValue<boolean>
  sliderWidth: Animated.SharedValue<number>
}

export const Cursor: React.FC<IProps> = ({
  translateX,
  value,
  panGestureHandler,
  showTooltip,
  showRipple,
  sliderWidth,
}) => {
  const cursorLeft = useAnimatedStyle(() => ({
    left: translateX.value - CURSOR_HALF_WIDTH,
  }))
  const rippleScale = useAnimatedStyle(() => ({
    transform: [{scale: withTiming(showRipple.value ? 1 : 0)}],
  }))

  return (
    <>
      <PanGestureHandler onGestureEvent={panGestureHandler}>
        <CursorContainer style={cursorLeft}>
          <CursorElement />
          <RippleEffect style={rippleScale} pointerEvents="none" />
        </CursorContainer>
      </PanGestureHandler>
      <Tooltip
        value={value}
        translateX={translateX}
        showTooltip={showTooltip}
        sliderWidth={sliderWidth}
      />
    </>
  )
}

// container region is bigger than cursor element to make pan gesture handling easier
const CursorContainer = styled(Animated.View)({
  position: 'absolute',
  top: -18,
  width: 40,
  height: 40,
})

const CursorElement = styled.View({
  top: CURSOR_HALF_WIDTH,
  left: CURSOR_HALF_WIDTH,
  width: CURSOR_WIDTH,
  height: CURSOR_WIDTH,
  borderRadius: CURSOR_HALF_WIDTH,
  backgroundColor: Colors.PRIMARY_LIGHT,
  elevation: 4,
})

const RippleEffect = styled(Animated.View)({
  top: -25,
  left: -5,
  width: 50,
  height: 50,
  borderRadius: 25,
  opacity: 0.2,
  backgroundColor: Colors.PRIMARY_LIGHT,
})
