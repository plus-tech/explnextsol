//
// Page of About
import {
  Box,
  Center,
  Divider,
  Heading,
  Text,
  Image,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import GrandCanyon from "../img/grandcanyon.jpg";

const repositoryURL = "https://github.com/plus-tech/explnextsol.git";

function AboutComponent() {
  return (
    <Box className="boxToplevelpage">
      <Heading as='h3' size='md'>
        About Me
      </Heading>
      <br/>
      <Divider />
      <Text className="txtParagraph">
        My name is Ken Oh. Being alive is so appreciated.
        I feel inspired when I see the sun rising in the morning.
      </Text>
      <Text className="txtParagraph">
        I am enthusiastic about technology. I enjoy the process
        of creating technical things. Technology is evolving at
        a dramatical pace nowadays. They come with a great deal
        of documentation, making learning effort consuming. I
        found "learn by scanning" efficient in practice, starting
        with scanning to gain the concept, then, scoping and
        detailing the further learning according to the actual
        needs through scanning or reading, and repeating the
        process till satisfied.
      </Text>
      <Text className="txtParagraph">
        I like sports. Usually I work out, jog, hike etc. They are
        a part of my life. The beauty of nature is simply breathtaking.
      </Text>

      <Text className="txtParagraph">
        The source code of this website is available on &nbsp;
        <Link href={repositoryURL} color="blue" isExternal>
          GitHub <ExternalLinkIcon mx='2px' />
        </Link>.
      </Text>

      <Center>
        <Image src={GrandCanyon} alt='Grand Canyon' borderRadius="8px" />
      </Center>

    </Box>
  );
}

export default AboutComponent;
