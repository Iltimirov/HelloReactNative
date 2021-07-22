import React from 'react'
import {Alert} from 'react-native'
import Animated, {useAnimatedProps} from 'react-native-reanimated'
import {Button} from '../uikit'
import {StyledAnimateableText} from './styled'
import {useAlertRender} from './useAlertRender'

type Props = {
  value: Animated.SharedValue<number>
}

export const AnimatedButton: React.FC<Props> = ({value}) => {
  useAlertRender(false)

  const animatedProps = useAnimatedProps(() => ({
    text: `Использовать ${value.value} бонусов`,
  }))

  return (
    <Button onPress={() => Alert.alert(String(value.value))}>
      <StyledAnimateableText animatedProps={animatedProps} />
    </Button>
  )
}
