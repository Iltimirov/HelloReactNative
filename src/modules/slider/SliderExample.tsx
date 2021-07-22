import React from 'react'
import {useSharedValue} from 'react-native-reanimated'
import {AnimatedButton} from './AnimatedButton'
import {Container} from './Container'
import {Slider} from './Slider'

export const SliderExample: React.FC = () => {
  const value = useSharedValue(0)

  return (
    <Container
      title="Slider outer value"
      subtitle="Required to get the slider value">
      <Slider min={0} max={3000} step={15} sharedValue={value} />
      <AnimatedButton value={value} />
    </Container>
  )
}
