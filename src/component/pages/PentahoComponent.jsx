//
// Page of Extract Transform Load - Pentaho
import {
  Box,
  Center,
  Divider,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';

import kettleArch from "../img/pentahoArch.png";

function PentahoComponent() {
  return (
    <Box className="boxToplevelpage">
      <Heading as='h3' size='md'>
        Pentaho
      </Heading>
      <br/>
      <Divider />
      <Text className="txtParagraph">
        Although Pentaho offers BI suite, it is referred as Kettle in this text, the data integration suite.
        As an ETL platform, Pentaho provides extract, transform, load functionalities as the other peers do like
        Informatica Powercenter. On top of the main stream data sources and databases, Pentaho supports JSON, Hadoop, MongoDB
        inputs and outputs. It can consume REST services as well.
      </Text>
      <Text className="txtParagraph">
        On the other hand, Pentaho shows great flexibilities as a tool built on open technologies. Java and JavaScript
        transformation steps enable developers to implement complicate transformation logics.
      </Text>
      <Text className="txtParagraph">
        Pentaho offers community edition for free use.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Kettle Architecture</Heading>
      <Text className="txtParagraph">
        The diagram below shows the architecture of Pentaho DI.
      </Text>
      <Center className="cntDiagram">
        <Image src={kettleArch} alt='Kettle Architecture' />
      </Center>
      <Box className="boxMargbtm">
        <UnorderedList styleType="'- '">
          <ListItem>Spoon: a desktop tool to design jobs and transformations.</ListItem>
          <ListItem>Carte: a light web server to execute jobs and transformations.</ListItem>
          <ListItem>Pan: a command line to execute transformations.</ListItem>
          <ListItem>Kitchen: a command line to execute jobs.</ListItem>
          <ListItem>Pentaho Sever: a comprehensive enterprise server including scheduling, monitoring, repository and data
          integration engine and security component.</ListItem>
        </UnorderedList>
      </Box>

      <Heading as='h4' className="hdIntext" size='sm'>Jobs and Transformations</Heading>
      <Box className="boxMargbtm">
        <UnorderedList styleType="'- '">
          <ListItem>Job - It provides high level flow control. The entries in a job is executed one by one in order.</ListItem>
          <ListItem>Transformation - It transforms data rows from source to target. All steps in a transformaton are executed in parallel.</ListItem>
          <ListItem>Hop - It connects transformation steps and job entries. It indicates data flow.</ListItem>
        </UnorderedList>
      </Box>

      <Heading as='h4' className="hdIntext" size='sm'>For Enterprise</Heading>
      <Text className="txtParagraph">
        Pentaho introduces master server and slave server concept in a bid to optimize its scalability. In this deployment model, only one
        master server is allowed. The others are slave servers, even you have more than one Pentaho enterprise servers in the environment.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>A Few Transformation Steps</Heading>
      <Text className="txtParagraph">
        Pentaho offers a mechanism for realize complex transformation logics. Here are a few examples.
      </Text>
      <Text className="txtParagraph">
        Modified JavaScript Value step, is intuitive and efficient. You can use various functions as well as conditional/loop statements.
        One note is to use equals() or equalIgnoreCase() for string comparison instead of == operator.
      </Text>
      <Text className="txtParagraph">
        User Defined Java Class step enables developers to write Java codes in the step. It doesn't support generic function.
      </Text>
      <Text className="txtParagraph">
        Java Filter is easy-to-use. You will need 2 subsequent steps to handle in-scope data records and out-of-scope data rows, respectively.<br />
      </Text>

    </Box>
  );
}

export default PentahoComponent;
