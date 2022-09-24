import React, {FunctionComponent} from 'react'
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react'

import AppRouter from "./components/AppRouter";
import theme from "./theme";
import {BrowserRouter} from "react-router-dom";

const App: FunctionComponent = () => {
    return (
        <ChakraProvider>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <BrowserRouter>
                    <AppRouter />
            </BrowserRouter>
        </ChakraProvider>
    )
}


export default App;
