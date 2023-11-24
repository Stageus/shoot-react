import styled from "styled-components"

const Button = styled.button`
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "0px"};
  background-color: ${(props) =>
    props.theme.color[props.backgroundColor] || "inherit"};
  border: ${(props) => props.border || "none"};
  border-radius: 5px;
  cursor: pointer;
`

const SmButton = styled(Button)`
  width: 40px;
  height: 21px;
`

const MdButton = styled(Button)`
  width: 94px;
  height: 34px;
`

const LgButton = styled(Button)`
  width: 400px;
  height: 48px;
`

export { Button, SmButton, MdButton, LgButton }
