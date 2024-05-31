import { useState } from "react";
import { Container, VStack, Heading, Button, Select, Input, FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

const BookTicket = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedEvent, setSelectedEvent] = useState("");
  const [numTickets, setNumTickets] = useState(1);
  const navigate = useNavigate();
  const { eventId } = useParams();

  const events = [
    { id: 1, name: "Event 1" },
    { id: 2, name: "Event 2" },
    { id: 3, name: "Event 3" },
  ];

  const handleBooking = () => {
    // Here you can handle the ticket booking, e.g., send the data to a server
    console.log("Booking Details:", { name, email, selectedEvent, numTickets });
    // Redirect to home page after booking
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleBooking} width="100%">
        <Heading as="h1" size="xl">Book Tickets</Heading>
        <FormControl id="event" isRequired>
          <FormLabel>Event</FormLabel>
          <Select value={selectedEvent} onChange={(e) => setSelectedEvent(e.target.value)}>
            <option value="" disabled>Select an event</option>
            {events.map((event) => (
              <option key={event.id} value={event.id}>{event.name}</option>
            ))}
          </Select>
        </FormControl>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="num-tickets" isRequired>
          <FormLabel>Number of Tickets</FormLabel>
          <NumberInput min={1} value={numTickets} onChange={(value) => setNumTickets(value)}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" width="100%">Book Tickets</Button>
      </VStack>
    </Container>
  );
};

export default BookTicket;