/*import Logo from '../img/designsol.png';*/

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const blogURL = "http://plus-tec.blogspot.com/";
const tableauURL = "https://public.tableau.com/app/profile/plustech";
const githubURL = "https://github.com/plus-tech/";

function DropdownMenu(){
  return (
    <div id="divMenu">
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        variant='outline'
      />
      <MenuList text-align="justify;">
        <MenuItem as='a' href="/home">   Home</MenuItem>
        <MenuItem as='a' href="/aws">    Cloud - AWS</MenuItem>
        <MenuItem as='a' href="/javaee"> App   - Java EE</MenuItem>
        <MenuItem as='a' href="/pentaho">ETL   - Pentaho</MenuItem>
        <MenuItem as='a' href="/oracle">DB    - Oracle</MenuItem>
        <MenuItem as='a' href="/tableau">BI    - Tableau</MenuItem>
        <MenuItem as='a' href="/python"> ML    - Python</MenuItem>
        <MenuItem as='a' href="/about">  About</MenuItem>
        <MenuDivider />
        <MenuItem>
          <Link href={blogURL} color="blue" isExternal>
            My Blog
          </Link>
        </MenuItem>
        <MenuItem >
          <Link href={tableauURL} color="blue" isExternal>
            Tableau Public
          </Link>
        </MenuItem>
        <MenuItem >
          <Link href={githubURL} color="blue" isExternal>
            GitHub
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>
    </div>
  )
}

export default DropdownMenu;
