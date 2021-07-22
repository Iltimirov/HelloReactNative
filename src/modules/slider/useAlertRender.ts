import {useEffect} from 'react'
import {Alert} from 'react-native'

export const useAlertRender = (show: boolean) => {
  useEffect(() => {
    show && Alert.alert('re-render')
  })
}
