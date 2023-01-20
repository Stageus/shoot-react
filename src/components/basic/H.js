import styled from "styled-components"

const H1 = styled.h1`
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: ${props => props.padding || "0px"};
  font-size: ${props => props.theme.fontSize[props.fontSize] || props.theme.fontSize.md};
  font-weight: ${props => props.fontWeight || "700"};
  color: ${props => props.theme.color[props.color] || props.theme.color.default};
`

const H2 = styled.h2`
  width: 100%;
  height: fit-content;
  margin: 0;
  padding: ${props => props.padding || "0px"};
  font-size: ${props => props.theme.fontSize[props.fontSize] || props.theme.fontSize.md};
  font-weight: ${props => props.fontWeight || "700"};
  color: ${props => props.theme.color[props.color] || props.theme.color.default};
`

export {H1, H2}
