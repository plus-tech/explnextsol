import './App.css';

//
// import the router used for this app.
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./component/navigation/RouterComponent";

import DropdownMenu from "./component/navigation/DropdownMenu";
import {
  ChakraProvider,
  theme as chakraTheme,
  Box,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <BrowserRouter>
          <Box id="outerBox" minHeight='100vh'>
            <DropdownMenu />
            <AppRouter />
          </Box>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
