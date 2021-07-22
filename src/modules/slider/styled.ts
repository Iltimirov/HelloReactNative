import styled from 'styled-components/native'
import AnimateableText from 'react-native-animateable-text'

export const StyledAnimateableText = styled(AnimateableText).attrs(() => ({
  pointerEvents: 'none',
}))({
  color: 'white',
})
