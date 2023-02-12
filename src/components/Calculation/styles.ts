import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 22px 0px 18px;
  gap: 8px;

  position: absolute;
  width: 288px;
  height: 86px;
  left: calc(50% - 288px / 2 + 2px);
  top: calc(50% - 86px / 2 - 186px);

  > span {
    width: 248px;
    height: 28px;

    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;

    text-align: right;
    letter-spacing: -0.02em;

    color: #6b6b6b;

    /* Inside auto layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
  }
`
export const Result = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;

  width: 248px;
  height: 50px;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  img {
    width: 23px;
    height: 23px;

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  span {
    width: 228px;
    height: 50px;

    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 140%;

    text-align: right;
    letter-spacing: -0.02em;

    color: #ebebeb;

    flex: none;
    order: 1;
    flex-grow: 1;
  }
`
