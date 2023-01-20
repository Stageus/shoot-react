import React from "react"
import {Route, Routes, useLocation} from "react-router-dom";
import {ThemeProvider} from 'styled-components';

import GlobalStyles from './globalStyles';
import theme from './theme';


const App = () => {

    return (
        // store 사용으로 props도 없어짐
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
        </ThemeProvider>
    )
}

export default App
