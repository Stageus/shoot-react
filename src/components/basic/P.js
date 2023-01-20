import styled from "styled-components"

const P = styled.p`
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: ${props => props.padding || "0px"};
  font-size: ${props => props.theme.fontSize[props.fontSize] || props.theme.fontSize.md};
  font-weight: ${props => props.fontWeight || "400"};
  color: ${props => props.theme.color[props.color] || props.theme.color.default};
`

export default P
