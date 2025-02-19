import * as React from 'react';
import {useNavigate} from 'react-router-dom';

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

import {apiFetchCmsgById, apiEditCmsg} from "../../service/ApiService";
import {MenuItemPath} from "../../common/constant.js";

export default function EditCmessageComponent() {
  const navigate = useNavigate;

  const [cmsg, setCmsg] = React.useState({
    id: null,
    firstName: '',
    lastName: '',
    email: '',
    cmessage: '',
    cdate: ''
  });

  React.useEffect( () => {
    let ignore = false;

    apiFetchCmsgById(window.localStorage.getItem("cmessageId"))
      .then((response) => {
        let cmessage = response.data;

        if (!ignore) {
          setCmsg({...cmsg,
            id: cmessage.id,
            firstName: cmessage.firstName,
            lastName: cmessage.lastName,
            email: cmessage.email,
            cmessage: cmessage.cmessage,
            cdate: cmessage.cdate
          });
        }
      });

    return () => {
      ignore = true;
    }
  }, [cmsg]);

  const onChange = (e) => {
    setCmsg({...cmsg, [e.target.name]: e.target.value });
  }

  //------------------------------------
  // need to solve navigation issue
  //------------------------------------
  const saveCmessage = (e) => {
    e.preventDefault();
    // let res = await apiEditCmsg(cmsg);
    // console.log('res: ', res);

    apiEditCmsg(cmsg)
      .then(res => {
        console.log('res: ',res);
        setCmsg({...cmsg, message: 'Message added successfully.'});
      });

    navigate(MenuItemPath.viewcmsg);

    // apiEditCmsg(cmsg)
    //   .then(res => {
    //     setCmsg({...cmsg, message: 'Message added successfully.'});
    //   });
    // //
    // navigate back to View Messages
    // navigate(MenuItemPath.viewcmsg);
  }


  return (
    <Box className="boxToplevelpage">
      <Heading as='h3' size='md'>
        Edit the Message
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
