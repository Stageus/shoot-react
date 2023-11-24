import { createGlobalStyle } from 'styled-components';

// 프로젝트 시작 전 공통으로 적용해야할 코드
const GlobalStyles = createGlobalStyle`
  body {
    background-color: #FFFFFF;
    margin: 0;
    padding: 0;
    font-family: "Noto Sans KR", sans-serif;
    }
`;

export default GlobalStyles;