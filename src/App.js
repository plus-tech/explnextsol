import './App.css';

//
// import the router used for this app.
import { BrowserRouter } from 'react-router-dom';
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
          <Box id="outerBox" mb='1em'>
            <DropdownMenu />
            <AppRouter />
          </Box>
        </Container >
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
