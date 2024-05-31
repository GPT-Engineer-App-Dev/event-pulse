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
        <Button as={Link} to="/create-event" colorScheme="teal" size="lg">Create Event</Button>
        <Button as={Link} to="/book-ticket/1" colorScheme="teal" size="lg">Book Tickets for Event 1</Button>
        <Button as={Link} to="/book-ticket/2" colorScheme="teal" size="lg">Book Tickets for Event 2</Button>
        <Button as={Link} to="/book-ticket/3" colorScheme="teal" size="lg">Book Tickets for Event 3</Button>
      </VStack>
    </Container>
  );
};

export default Index;