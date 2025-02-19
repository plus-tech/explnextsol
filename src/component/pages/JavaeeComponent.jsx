//
// Page of Application - Java EE
import {
  Box,
  Center,
  Divider,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';

import NLayerDiag from "../img/JavaeeNLayerDiag.png";
import LegaSysDiag from "../img/JavaeeLegaDiag.png";
import MyHomepageArch from "../img/myHomepageArch.png";

function JavaeeComponent() {
  return (
    <Box className="boxToplevelpage">
      <Heading as='h3' size='md'>
        Java EE
      </Heading>
      <br/>
      <Divider />
      <Text className="txtParagraph">
        Java EE is the mostly used platform for enterprise applications. An application is made up
        of components that communicate with each other as designed. A bunch of open source application development
        frameworks come with Java EE. Spring is the most popular one among them. Here we take a quick tour of
        the multi-layered architecture for web applications.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Multi-layered Architecture</Heading>
      <Center className="cntDiagram">
        <Image src={NLayerDiag} alt='Multi-layered Architecture' />
      </Center>
      <Text className="txtParagraph">
        In general, we use 3-layer model as the reference, presentation layer, business layer and persistence
        layer. We can build more sub-layers bearing specific functions inside them as illustrated on the
        above diagram. For example, we can introduce a business logic layer that implements the lowest granularity business
        logics and a service layer that organizes logic layer functions as a facade.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Integration with Legacy Systems</Heading>
      <Center className="cntDiagram">
        <Image src={LegaSysDiag} alt='Integration with Legacy Systems' />
      </Center>
      <Text className="txtParagraph">
        This multi-layered architecture shows great flexibility in terms of integration with legacy systems,
        which are still in use in many companies. The above diagram shows a scenario where Websphere MQ is used to
        communicate with legacy systems.
      </Text>

      <Heading as='h4' className="hdIntext" size='sm'>Architecture Used for This Website</Heading>
      <Center className="cntDiagram">
        <Image src={MyHomepageArch} alt='Architecture Used for This Website' />
      </Center>
      <Text className="txtParagraph">
        This website employs the architecture illustrated as above. React is used to build the user interfaces, consuming
        the REST services provided by the back end application.
      </Text>

    </Box>
  );
}

export default JavaeeComponent;
