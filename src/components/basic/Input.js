import styled from "styled-components"

const Input = styled.input`
  width: ${props => props.width || ""};
  height: ${props => props.height || ""};
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding || "5px 10px"};
  background-color: ${props => props.backgroundColor || "inherit"};
  font-size: ${props => props.fontSize || "15px"};
  color: ${props => props.color || "black"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.borderRadius || "none"};
  &:focus {
    outline: none;
  }
  ::-webkit-input-placeholder {
    color: #c8c8c8;
  }
  :-ms-input-placeholder {
    color: #c8c8c8;
  }
  
`
export default Input
