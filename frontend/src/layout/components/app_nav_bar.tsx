import { useContext } from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { CurrentUserContext } from '../../context';

interface Props {
  children: React.ReactNode;
}

const Links = ['Dashboard', 'Projects', 'Team']

const NavLink = (props: Props) => {
  const { children } = props
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  )
}

const AppNavBar = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <>
      <Flex 
        bg="gray.100"
        px={4}
        wrap="nowrap"
      >
        <Flex 
          alignItems={'center'}
          flexGrow={1}
          h={16}
          justifyContent="flex-end"
        >
          {
            currentUser.token 
              ? (
                <HStack spacing={8} alignItems={'center'} mr="auto">
                  <Box>Logo</Box>

                  <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                    {Links.map((link) => (
                      <NavLink key={link}>{link}</NavLink>
                    ))}
                  </HStack>
                </HStack>
              )
              : null
          }

          {
            !currentUser.token 
              ? (
                <Flex alignItems="center">
                  <Link
                    as={ReactRouterLink}
                    color="blue.500"
                    fontWeight="bold"
                    mr={4}
                    to="/sign_in"
                    _hover={{
                      textDecoration: 'none',
                      color: 'blue.700',
                    }}
                  >
                    Sign in
                  </Link>

                  <Link
                    as={ReactRouterLink}
                    color="blue.500"
                    fontWeight="bold"
                    to="/sign_up"
                    _hover={{
                      textDecoration: 'none',
                      color: 'blue.700',
                    }}
                  >
                    Sign up
                  </Link>
                </Flex>
              )
              : (
                <Flex alignItems={'center'}>
                  <Button
                    variant={'solid'}
                    colorScheme={'teal'}
                    size={'sm'}
                    mr={4}
                    leftIcon={<AddIcon />}>
                    Action
                  </Button>

                  <Menu>
                    <MenuButton
                      as={Button}
                      rounded={'full'}
                      variant={'link'}
                      cursor={'pointer'}
                      minW={0}>
                      <Avatar
                        size={'sm'}
                        src={
                          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                      />
                    </MenuButton>

                    <MenuList>
                      <MenuItem>Link 1</MenuItem>
                      <MenuItem>Link 2</MenuItem>
                      <MenuDivider />
                      <MenuItem>Link 3</MenuItem>
                    </MenuList>
                  </Menu>
                </Flex>
              )
          }
        </Flex>
      </Flex>
    </>
  )
};

export default AppNavBar;
