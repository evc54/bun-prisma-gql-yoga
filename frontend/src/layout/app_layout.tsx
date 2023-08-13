import type { ReactNode } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import AppNavBar from './components/app_nav_bar';
import AppFooter from './components/app_footer';

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Flex 
      direction="column" 
      minHeight="100vh"
    >
      <AppNavBar />
        <Box p={4} flexGrow={1}>
          {children}
        </Box>
      <AppFooter />
    </Flex>
  );
};

export default AppLayout;
