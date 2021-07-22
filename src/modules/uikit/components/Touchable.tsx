import React from 'react'
import {TouchableOpacity} from 'react-native'
import {Shape} from './Shape'

type Props = {
  onPress: () => void
}

export const Touchable: React.FC<Props> = ({onPress, children}) => (
  <TouchableOpacity onPress={onPress}>
    <Shape>{children}</Shape>
  </TouchableOpacity>
)
