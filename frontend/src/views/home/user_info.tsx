import { useContext } from 'react';
import { 
  Box,
  Heading,
  Text
} from '@chakra-ui/react';
import { CurrentUserContext } from '../../context';

const UserInfoPage = () => {
  const { currentUser } = useContext(CurrentUserContext);
  
  return (
    <Box mt="6">
      <Heading as="h2" size="xl">
        User Token
      </Heading>

      <Text size="lg" fontWeight="bold">
        {currentUser.token ?? 'null'} 
      </Text>
    </Box>
  );
};

export default UserInfoPage;
