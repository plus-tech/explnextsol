//
// Page of Cloud - Amazon Web services
import {
  Box,
  Center,
  Divider,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';

import AWSArch from "../img/AWS_Arch.png";

function AwsComponent() {
  return (
    <Box className="boxToplevelpage">
      <Heading as='h3' size='md'>
        Amazon Web Services
      </Heading>
      <br/>
      <Divider />
      <Text className="txtParagraph">
        As cloud computing prevails in the market, it is not only a solution for a business entity,
        but also an option for home use. Photos, vedios and files can be managed on the cloud storage.
      </Text>
      <Text className="txtParagraph">
        This website is hosted on AWS as shown by the diagram.
      </Text>

      <Center className="cntDiagram">
        <Image src={AWSArch} alt='AWS Architecture' />
      </Center>

      <Heading as='h4' className="hdIntext" size='sm'>EC2</Heading>
      <Text className="txtParagraph">
        Elastic compute cloud is a web service that enables you to create Windows and Linux servers in the cloud.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>S3</Heading>
      <Text className="txtParagraph">
        The front end of this website is hosted on S3, consuming REST services.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Elastic Beanstalk</Heading>
      <Text className="txtParagraph">
        The back end of this website is hosted on Elastic Beanstalk, providing REST services.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Database</Heading>
      <Text className="txtParagraph">
        The database of this website is launched through Relational Database Service.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Route 53</Heading>
      <Text className="txtParagraph">
        The hosted zone for this website is created and managed on Route 53.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Security</Heading>
      <Text className="txtParagraph">
        AWS security and identity services provide you with identity management, data protection, infrastructure protection,
        detective controls and etc.
      </Text>

      <Text className="txtParagraph">
        More contents will be added later as I gain more insights and hands-on experience with AWS.
      </Text>

    </Box>
  );
}

export default AwsComponent;
