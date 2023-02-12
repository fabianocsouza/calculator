import { Button } from "../Button";
import { Board } from "./styles";

import PlusMinus from '../../assets/PlusMinus.svg'
import EqualsWhite from '../../assets/EqualsWhite.svg'
import Plus from '../../assets/Plus.svg'
import Minus from '../../assets/Minus.svg'
import X from '../../assets/X.svg'
import Divide from '../../assets/Divide.svg'
import Percent from '../../assets/Percent.svg'


export function Keyboard() {
  return (
    <Board>
      <Button changeColorButton={true} changeColorButtonLight={true} left="+ 114" top="+ 219"><img src={EqualsWhite} alt="Equals White" /></Button>
      <Button changeColorButton={true} left="+ 114" top="+ 143"><img src={Plus} alt="Plus" /></Button>
      <Button changeColorButton={true} left="+ 114" top="+ 68"><img src={Minus} alt="Minus" /></Button>
      <Button changeColorButton={true} left="+ 114" top="- 9"><img src={X} alt="X" /></Button>
      <Button changeColorButton={true} left="+ 114" top="- 85"><img src={Divide} alt="Divide" /></Button>

      <Button left="+ 38" top="+ 219">,</Button>
      <Button left="+ 38" top="+ 143">3</Button>
      <Button left="+ 38" top="+ 67">6</Button>
      <Button left="+ 38" top="- 9">9</Button>
      <Button left="+ 38" top="- 85"><img src={Percent} alt="Percent" /></Button>

      <Button left="- 38" top="+ 219">0</Button>
      <Button left="- 38" top="+ 143">2</Button>
      <Button left="- 38" top="+ 67">5</Button>
      <Button left="- 38" top="- 9">8</Button>
      <Button left="- 38" top="- 85">C</Button>

      <Button left="- 114" top="+ 219"><img src={PlusMinus} alt="PlusMinus" /></Button>
      <Button left="- 114" top="+ 143">1</Button>
      <Button left="- 114" top="+ 67">4</Button>
      <Button left="- 114" top="- 9">7</Button>
      <Button changeColorFont={true} left="- 114" top="- 85">CE</Button>
    </Board>
  )
}

