//
// Dropdown menu

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Logo from './component/img/designsol.png';

//
// import the router used for this app.
import AppRouter from "./component/navigation/RouterComponent";

import DropdownMenu from "./component/navigation/DropdownMenu";
import {
  ChakraProvider,
  theme as chakraTheme,
  Container,
  Box,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <BrowserRouter>
        <Container maxW="100%" centerContent>
          <Box id="outerBox">
            <DropdownMenu />
            <AppRouter />
          </Box>
        </Container >
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
