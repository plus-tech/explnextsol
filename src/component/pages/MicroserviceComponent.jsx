//
// Page of Microsevice, not used at this poing in time
import {
  Box,
  Divider,
  Heading,
  Text,
} from '@chakra-ui/react';

function MicroserviceComponent() {
  return (
    <Box className="boxToplevelpage">
      <Heading as='h3' size='md'>
        Microservice
      </Heading>
      <br/>
      <Divider />
      <Text className="txtParagraph">
        For Enterprise
      </Text>
    </Box>
  );
}

export default MicroserviceComponent;
