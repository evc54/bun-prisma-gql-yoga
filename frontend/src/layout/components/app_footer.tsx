import { Box, Stack, Text } from '@chakra-ui/react'

const AppFooter = () => {
  return (
    <Box
      bg="gray.700"
      color="white"
    >
      <Box
        as={Stack}
        p={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Text fontWeight="bold" fontSize="lg">
          Footer
        </Text>
      </Box>
    </Box>
  )
};

export default AppFooter;
