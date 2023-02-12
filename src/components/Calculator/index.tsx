import { Calculation } from "../Calculation";
import { Keyboard } from "../Keyboard";
import { Container } from "./styles";



export function Calculator() {
  return (
    <Container>
      <Calculation />
      <Keyboard />
    </Container>
  )
}