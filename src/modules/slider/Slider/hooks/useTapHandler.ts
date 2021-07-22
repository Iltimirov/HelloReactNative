import Animated, {useSharedValue, withTiming} from 'react-native-reanimated'
import {
  TapGestureHandlerStateChangeEvent,
  State,
} from 'react-native-gesture-handler'
import {clamp} from 'react-native-redash'
import {CURSOR_HALF_WIDTH} from '../constants'

type UseTapHandlerProps = {
  translateX: Animated.SharedValue<number>
  sliderWidth: Animated.SharedValue<number>
  calculateSnappedTranslateX: (targetX: number) => number
}

export const useTapHandler = ({
  translateX,
  sliderWidth,
  calculateSnappedTranslateX,
}: UseTapHandlerProps) => {
  const isActiveTapGesture = useSharedValue(false)
  const tapGestureHandler = (e: TapGestureHandlerStateChangeEvent) => {
    'worklet'
    if (e.nativeEvent.state === State.BEGAN) {
      isActiveTapGesture.value = true
      translateX.value = withTiming(
        calculateSnappedTranslateX(
          clamp(e.nativeEvent.x - CURSOR_HALF_WIDTH, 0, sliderWidth.value),
        ),
        undefined,
        (isFinished) => {
          if (isFinished) {
            isActiveTapGesture.value = false
          }
        },
      )
    }
  }
  return {tapGestureHandler, isActiveTapGesture}
}
