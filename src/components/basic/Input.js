import styled from "styled-components";

const Input = styled.input`
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "5px 10px"};
  background-color: ${(props) =>
    props.theme.color[props.backgroundColor] || "inherit"};
  font-size: ${(props) =>
    props.theme.fontSize[props.fontSize] || props.theme.fontSize.md};
  color: ${(props) =>
    props.theme.color[props.color] || props.theme.color.default};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "none"};
  display: ${(props) => props.display || "inline-block"};

  &:focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: #c8c8c8;
  }

  :-ms-input-placeholder {
    color: #c8c8c8;
  }
`;

const TextArea = styled.textarea`
  width: ${(props) => props.width || ""};
  height: ${(props) => props.height || ""};
  margin: ${(props) => props.margin || "0px"};
  padding: ${(props) => props.padding || "5px 10px"};
  background-color: ${(props) =>
    props.theme.color[props.backgroundColor] || "inherit"};
  font-size: ${(props) =>
    props.theme.fontSize[props.fontSize] || props.theme.fontSize.md};
  color: ${(props) =>
    props.theme.color[props.color] || props.theme.color.default};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "none"};
  display: ${(props) => props.display || "inline-block"};
  resize: none;

  &:focus {
    outline: none;
  }

  ::-webkit-input-placeholder {
    color: #c8c8c8;
  }

  :-ms-input-placeholder {
    color: #c8c8c8;
  }
`;
export { Input, TextArea };
