import Equals from '../../assets/Equals.svg'
import { Container, Result } from './styles'

export function Calculation() {
  return (
    <Container>
      <span>1 + 1</span>
      <Result>
        <img src={Equals} alt="Equals" />
        <span>2</span>
      </Result>
    </Container>
  )
}