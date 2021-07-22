import Animated, {useDerivedValue} from 'react-native-reanimated'
import {round} from 'react-native-redash'

type UseCalculatedValueProps = {
  translateX: Animated.SharedValue<number>
  sliderWidth: Animated.SharedValue<number>
  initialValue: number
  min: number
  max: number
  step: number
}

export const useCalculatedValue = ({
  translateX,
  sliderWidth,
  initialValue,
  min,
  max,
  step,
}: UseCalculatedValueProps) => {
  const onePointWidth = useDerivedValue(() => sliderWidth.value / (max - min))
  const calculateAbsoluteValue = (x: number) => {
    'worklet'
    return round(x / onePointWidth.value / step) * step
  }

  return {
    value: useDerivedValue(() =>
      onePointWidth.value === 0
        ? initialValue
        : calculateAbsoluteValue(translateX.value) + min,
    ),
    calculateSnappedTranslateX: (targetX: number) => {
      'worklet'
      return calculateAbsoluteValue(targetX) * onePointWidth.value
    },
  }
}
