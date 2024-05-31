import { Container, Text, VStack, Heading, Button, Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to Eventify</Heading>
        <Text fontSize="lg">Your ultimate platform for managing events with ease.</Text>
        <Box boxSize="sm">
          <Image src="/images/event-management.jpg" alt="Event Management" />
        </Box>
        <Button as={Link} to="/events" colorScheme="teal" size="lg">View Events</Button>
      </VStack>
    </Container>
  );
};

export default Index;