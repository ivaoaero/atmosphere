import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$atmos[100]',
})

export function App() {
  return <Button>Hello World</Button>
}
