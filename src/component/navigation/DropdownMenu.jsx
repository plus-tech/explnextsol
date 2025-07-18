/*import Logo from '../img/designsol.png';*/

import {
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuDivider,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import {MenuItemText, MenuItemPath,
  BlogURL, TableauURL, GithubURL
} from '../../common/constant.js';

export default function DropdownMenu(){
  return (
    <Box className="boxMenu">
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
        />
        <MenuList text-align="justify;">
          <MenuItem as='a' href={MenuItemPath.home}>      <pre>{MenuItemText.home}</pre>     </MenuItem>
          <MenuItem as='a' href={MenuItemPath.aws}>       <pre>{MenuItemText.aws}</pre>      </MenuItem>
          <MenuItem as='a' href={MenuItemPath.java}>      <pre>{MenuItemText.java}</pre>   </MenuItem>
          <MenuItem as='a' href={MenuItemPath.pentaho}>   <pre>{MenuItemText.pentaho}</pre>  </MenuItem>
          <MenuItem as='a' href={MenuItemPath.oracle}>    <pre>{MenuItemText.oracle}</pre>   </MenuItem>
          <MenuItem as='a' href={MenuItemPath.tableau}>   <pre>{MenuItemText.tableau}</pre>  </MenuItem>
          <MenuItem as='a' href={MenuItemPath.python}>    <pre>{MenuItemText.python}</pre>   </MenuItem>
          <MenuItem as='a' href={MenuItemPath.about}>     <pre>{MenuItemText.about}</pre>    </MenuItem>
          <MenuDivider />

          <MenuItem>
            <Link href={BlogURL} color="blue" isExternal>
              My Blog
            </Link>
          </MenuItem>
          <MenuItem >
            <Link href={TableauURL} color="blue" isExternal>
              Tableau Public
            </Link>
          </MenuItem>
          <MenuItem >
            <Link href={GithubURL} color="blue" isExternal>
              GitHub
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

/*
<MenuItem as='a' href={MenuItemPath.addcmsg}>   {MenuItemText.addcmsg}  </MenuItem>
<MenuItem as='a' href={MenuItemPath.editcmsg}>  {MenuItemText.editcmsg} </MenuItem>
<MenuItem as='a' href={MenuItemPath.viewcmsg}>  {MenuItemText.viewcmsg} </MenuItem>
*/
