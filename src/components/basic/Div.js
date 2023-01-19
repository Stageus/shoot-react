import styled from "styled-components"

const Div = styled.div`
  width: ${props => props.width || "fit-content"};
  height: ${props => props.height || "fit-content"};
  margin: ${props => props.margin || "0px"};
  padding: ${props => props.padding || "0px"};
  background-color: ${props => props.backgroundColor || "inherit"};
  z-index: ${props => props.zIndex || "auto"};
  border: ${props => props.border || "none"};
  border-radius: ${props => props.borderRadius || "none"};
  position: ${props => props.position || "static"};
  transform: ${props => props.transform || "none"};
  top: ${props => props.top || ""};
  bottom: ${props => props.bottom || ""};
  right: ${props => props.right || ""};
  left: ${props => props.left || ""};
  display: ${props => props.display || "block"};;
  align-items: ${props => props.alignItems || "center"};
  justify-content: ${props => props.justifyContent || "center"};
  flex-direction: ${props => props.direction || "row"};
  flex-wrap: ${props => props.wrap || "wrap"};
  ${props => props.pointer && "cursor:pointer;"}
  box-shadow: ${props => props.shadow || ""}
    `

export default Div
