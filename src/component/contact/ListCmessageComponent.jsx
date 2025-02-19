import * as React from 'react';
import {useNavigate} from "react-router-dom";
import {
  Box,
  Divider,
  Heading,
  Text,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';

import {apiFetchCmsg, apiDeleteCmsg} from "../../service/ApiService";
import {MenuItemPath} from "../../common/constant.js";


export default function ListCmessageComponent() {
  const navigate = useNavigate();

  const [cmsglist, setCmsglist] = React.useState(null);
  const [message, setMessage] = React.useState("");

  React.useEffect( () => {
    let ignore = false;

    apiFetchCmsg()
      .then(response => {
        if (!ignore) {
          setCmsglist(response.data);
          setMessage(response.statusText);
        }
      });

    return () => {
      ignore = true;
    }
  }, [cmsglist, message]);

  const deleteCmessage = (cmessageId) => {
    apiDeleteCmsg(cmessageId)
     .then(res => {
       setMessage('Contact message deleted successfully.');
       setCmsglist(cmsglist.filter(cmsg => cmsg.id !== cmessageId));
     })
  }

  const editCmessage = (id) => {
    window.localStorage.setItem("cmessageId", id);
    navigate(MenuItemPath.editcmsg);
  }

  const addCmessage = () => {
    window.localStorage.removeItem("cmessageId");
    navigate(MenuItemPath.addcmsg);
  }

  return (
    <Box className="boxToplevelpage">
      <Heading as='h3' size='md'>
        List of Messages
      </Heading>
      <br/>
      <Divider />
      <Text className="txtParagraph">
        Please be kindly advised: This is a pilot page calling the REST APIs deployed on Beanstalk.
        Your message can be viewed, edited or deleted by any other visitor.
      </Text>

      <Box className="boxMargbtm">
        <Button variant='outline' onClick={() => addCmessage()}>Add</Button>
      </Box>
      <Box className="boxMargbtm">
        <TableContainer>
          <Table size='sm' variant='striped'>
            <Thead>
              <Tr>
                <Th className="hidden">Id</Th>
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Message</Th>
                <Th>Date</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                cmsglist && cmsglist.map( cmsg =>
                  <Tr key={cmsg.id}>
                    <Td>{cmsg.firstName}</Td>
                    <Td>{cmsg.lastName}</Td>
                    <Td>{cmsg.email}</Td>
                    <Td>{cmsg.cmessage}</Td>
                    <Td>{cmsg.cdate}</Td>
                    <Td>
                      <ButtonGroup variant='outline' spacing='1'>
                        <Button onClick={() => editCmessage(cmsg.id)}> Edit </Button>
                        <Button onClick={() => deleteCmessage(cmsg.id)}> Delete </Button>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                )
              }
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Text className="txtParagraph">
        Note: The RDS is permanently shut down.
      </Text>
    </Box>
  );
}
