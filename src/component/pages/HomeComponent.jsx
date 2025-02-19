//
// Page of Home
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

import ConceptualDiagram from "../img/SecuritiesSys_ConceptualDiag.png";

function HomeComponent() {
  return (
    <Box className="boxToplevelpage">
      <Heading as='h3' size='md'>
        Design Solutions in the <br/>Context of Enterprise
      </Heading>
      <br/>
      <Divider />
      <Text className="txtParagraph">
        In an enterprise, a portfolio of applications works together to support day-to-day operations.
        We can seldom see a monolithic application in this picture. The major applications
        are integrated with each other at system level in a bid to optimize processes and reduce operation
        errors at the same time. Although there are a small portion of local applications used as a
        support tool by some users, they are fed with data in either a manual or an automatic way.
      </Text>
      <Text className="txtParagraph">
        Solution design naturally falls into this system context. When a new application joins the big family,
        it is required to communicate with the other members through data sharing or service sharing.
        In effect there are still many legacy systems, obsolete systems and blackbox systems in operation in most companies.
        According to survey, 60% of companies will keep using core systems for not less than 21 years by 2025. A new
        solution weighs heavily on synergizing cutting edge technologies and existent ones.
      </Text>

      <Text className="txtParagraph">
        The diagram blow gives a conceptual view of the applications in a securities house.
      </Text>
      <Center className="cntDiagram">
        <Image src={ConceptualDiagram} alt='Conceptual Diagram' />
      </Center>

      <Text className="txtParagraph">
        On the other hand, a solution in nature is supposed to solve a specific business case. It takes
        into shape within the specific business context. In principle, the business process it serves defines what the
        solution needs to implement and positions it in the entire picture as well.
      </Text>
      <Text className="txtParagraph">
        Additionally, there are many other factors to be taken into account such as development processes, enterprise
        culture and etc. For instance, waterfall model as a traditional methodology is commonly used in Japan.
      </Text>
      <Text className="txtNormal">
        AWS Well-Architected Framework is an excellent reference which contains 5 pillars:
      </Text>

      <Box className="boxMargbtm">
        <UnorderedList styleType="'- '">
          <ListItem>Operational excellence</ListItem>
          <ListItem>Security</ListItem>
          <ListItem>Performance</ListItem>
          <ListItem>Reliability</ListItem>
          <ListItem>Cost optimization</ListItem>
        </UnorderedList>
      </Box>

    </Box>
  );
}

export default HomeComponent;
