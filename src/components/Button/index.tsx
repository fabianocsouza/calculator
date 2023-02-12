import styled from 'styled-components'

interface ButtonProps {
  changeColorButton?: boolean;
  changeColorButtonLight?: boolean;
  changeColorFont?: boolean;
  left: string;
  top: string;
}


export const Button = styled.button<ButtonProps>`
  position: absolute;
  width: 64px;
  height: 64px;
  left: calc(50% - 64px/2 ${props => props.left}px);
  top: calc(50% - 64px/2 ${props => props.top}px);

  background: linear-gradient(
    180deg, 
    ${props => props.changeColorButton ? props.theme.colors.dark015 : props.theme.colors.dark05} 0%,
    rgba(255, 255, 255, 0.05) 100%), 
    ${props => props.changeColorButton ? (props.changeColorButtonLight ? props.theme.colors.purpleLight : props.theme.colors.purpleDark) : props.theme.colors.dark};

  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);
  border-radius: 999px;

  border: none;
  cursor: pointer;

  font-family: 'Rubik';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  display: flex;
  align-items: center;
  /* text-align: center; */
  letter-spacing: -0.02em;
  justify-content: center;

  color: ${props => props.changeColorFont ? '#975DFA' : '#EBEBEB'};

  &:hover {
    transform: scale(.97);
    transition: all 0.5s;
  } 

  &:active {
  
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%), #462878;

  } 

  
`




