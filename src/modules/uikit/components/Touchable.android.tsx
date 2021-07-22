import React from 'react'
import {Pressable} from 'react-native'
import {Colors} from '../Colors'
import {Shape} from './Shape'

type Props = {
  onPress: () => void
}

export const Touchable: React.FC<Props> = ({onPress, children}) => (
  <Shape>
    <Pressable android_ripple={rippleEffect} onPress={onPress}>
      {children}
    </Pressable>
  </Shape>
)

const rippleEffect = {
  borderless: false,
  color: Colors.WHITE_40,
}
