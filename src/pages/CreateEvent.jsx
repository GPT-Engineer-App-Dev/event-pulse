import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send the data to a server
    console.log("Event Details:", { eventName, eventDate, eventLocation, eventDescription });
    // Redirect to home page after event creation
    navigate("/");
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit} width="100%">
        <Heading as="h1" size="xl">Create New Event</Heading>
        <FormControl id="event-name" isRequired>
          <FormLabel>Event Name</FormLabel>
          <Input value={eventName} onChange={(e) => setEventName(e.target.value)} />
        </FormControl>
        <FormControl id="event-date" isRequired>
          <FormLabel>Event Date</FormLabel>
          <Input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </FormControl>
        <FormControl id="event-location" isRequired>
          <FormLabel>Event Location</FormLabel>
          <Input value={eventLocation} onChange={(e) => setEventLocation(e.target.value)} />
        </FormControl>
        <FormControl id="event-description" isRequired>
          <FormLabel>Event Description</FormLabel>
          <Textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg" width="100%">Create Event</Button>
      </VStack>
    </Container>
  );
};

export default CreateEvent;