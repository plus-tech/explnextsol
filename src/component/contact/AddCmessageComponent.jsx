import * as React from 'react';
import {useNavigate} from "react-router-dom";

import {
  Box,
  Divider,
  Heading,
  FormControl,
  FormLabel,
  Table,
  TableContainer,
  Tr,
  Td,
  Tbody,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/react';

import {apiAddCmsg} from "../../service/ApiService";
import {MenuItemPath} from "../../common/constant.js";


export default function AddCmessageComponent() {
  const navigate = useNavigate();

  const [cmsg, setCmsg] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    cmessage: '',
    cdate: '',
    message: null
  });

  const saveCmessage = (e) => {
    e.preventDefault();
    apiAddCmsg(cmsg)
      .then(res => {
          setCmsg({...cmsg, message: 'Message added successfully.'});
      });
    //
    // navigate back to View Messages
    navigate(MenuItemPath.viewcmsg);
  }

  const onChange = (e) => {
    setCmsg({...cmsg, [e.target.name]: e.target.value });
  }

  return(
    <Box className="boxToplevelpage">
      <Heading as='h3' size='md'>
        Drop a Message
      </Heading>
      <br/>
      <Divider />

      <FormControl>
        <TableContainer>
          <Table size='sm' variant='unstyled'>
            <Tbody>
              <Tr>
                <Td><FormLabel>First Name</FormLabel></Td>
                <Td><Input variant='flushed' placeholder="firstName" name="firstName" value={cmsg.firstName} onChange={onChange}/></Td>
              </Tr>
              <Tr>
                <Td><FormLabel>Last Name</FormLabel></Td>
                <Td><Input variant='flushed' placeholder="lastName" name="lastName" value={cmsg.lastName} onChange={onChange}/></Td>
              </Tr>
              <Tr>
                <Td><FormLabel>Email</FormLabel></Td>
                <Td><Input variant='flushed' placeholder="email" name="email" value={cmsg.email} onChange={onChange}/></Td>
              </Tr>
              <Tr>
                <Td><FormLabel>Message</FormLabel></Td>
                <Td><Textarea variant='flushed' placeholder="message" name="cmessage" value={cmsg.cmessage} onChange={onChange}/></Td>
            </Tr>
              <Tr>
              <Td></Td>
              <Td><Button variant='outline' onClick={saveCmessage}>Save</Button></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </FormControl>

    </Box>
  );
}
