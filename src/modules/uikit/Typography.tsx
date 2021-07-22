import styled from 'styled-components/native'

const ColoredText = styled.Text<{color?: string}>(({color = 'black'}) => ({
  color,
}))

const Title = styled(ColoredText)({
  fontSize: 16,
})

const Subtitle = styled(ColoredText)({
  fontSize: 12,
})

export const Typography = {
  Title,
  Subtitle,
}
