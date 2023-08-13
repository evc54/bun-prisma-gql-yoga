import { AppLayout } from './layout';
import { Heading } from '@chakra-ui/react';
import UserInfo from './views/home/user_info';

function App() {
  return (
    <AppLayout>
      <Heading as='h2' size='xl'>
        Bun + React

        <UserInfo />
      </Heading>
    </AppLayout>
  );
}

export default App;
