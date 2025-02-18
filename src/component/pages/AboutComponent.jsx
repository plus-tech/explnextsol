//
// Page of About

import React, { Component } from 'react';
import { Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import GrandCanyon from "../img/grandcanyon.jpg";

const repositoryURL = "https://github.com/plus-tech/explnextsol.git";

function AboutComponent() {
  return (
      <div id="aboutPage">
          <h3 className="text-center">About Me</h3>
          <br />
          <hr />
          <section>
            <p>
            My name is Ken Oh. Being alive is so appreciated.
            I feel inspired when I see the sun rising in the morning.
            </p>
            <p>
            I am enthusiastic about technology. I enjoy the process
            of creating technical things. Technology is evolving at
            a dramatical pace nowadays. They come with a great deal
            of documentation, making learning effort consuming. I
            found "learn by scanning" efficient in practice, starting
            with scanning to gain the concept, then, scoping and
            detailing the further learning according to the actual
            needs through scanning or reading, and repeating the
            process till satisfied.
            </p>
            <p>
            I like sports. Usually I work out, jog, hike etc. They are
            a part of my life. The beauty of nature is simply breathtaking.
            </p>
            <br />
            <p>
            The source code of this website is available on &nbsp;
            <Link href={repositoryURL} color="blue" isExternal>
              GitHub <ExternalLinkIcon mx='2px' />
            </Link>.
            </p>
            <br />
            <p>
              <img id="grandCanyon" src={GrandCanyon} alt="Grand Canyon" />
            </p>
          </section>
      </div>
  );
}

export default AboutComponent;
