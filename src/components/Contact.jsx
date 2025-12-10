// src/components/Contact.jsx
import { useState } from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  Alert,
  AlertIcon,
  VStack,
} from "@chakra-ui/react";

const FUNCTION_URL = "https://us-central1-personalwebsite-1993c.cloudfunctions.net/submitContactForm";
// ^ make sure this is exactly the HTTPS URL shown for submitContactForm

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setStatus({ loading: false, success: false, error: "" });
  }

async function handleSubmit(e) {
  e.preventDefault();
  setStatus({ loading: true, success: false, error: "" });

  try {
    const res = await fetch(FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    // Read raw text so we can see *exactly* what comes back
    const text = await res.text();
    let data = null;
    try {
      data = JSON.parse(text);
    } catch {
      // Not JSON – that's fine, we'll just log it
    }

    console.log("Raw response text:", text);
    console.log("Parsed JSON:", data);

    // If HTTP status is not OK, treat as error
    if (!res.ok) {
      const message =
        (data && data.error) ||
        text ||
        `Request failed with status ${res.status} ${res.statusText}`;
      throw new Error(message);
    }

    // If status is OK, but backend included an explicit error field
    if (data && data.error) {
      throw new Error(data.error);
    }

    // At this point we got a 200 and no explicit error -> treat as success
    console.log(
      "Contact form saved. Server response:",
      data || text
    );

    setStatus({ loading: false, success: true, error: "" });
    setForm({ name: "", email: "", message: "" });
  } catch (err) {
    console.error("Contact submit failed:", err);
    setStatus({
      loading: false,
      success: false,
      error: err.message || "Something went wrong",
    });
  }
}

  return (
    <Box as="section" py={8}>
      <Container maxW="lg">
        <Heading mb={6}>Contact Me</Heading>

        <Box as="form" onSubmit={handleSubmit}>
          <VStack align="stretch" spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                rows={4}
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            </FormControl>

            <Button
              type="submit"
              colorScheme="teal"
              alignSelf="flex-start"
              isLoading={status.loading}
            >
              Send
            </Button>

            {status.success && (
              <Alert status="success">
                <AlertIcon />
                Thanks! Your message has been sent.
              </Alert>
            )}

            {status.error && (
              <Alert status="error">
                <AlertIcon />
                {status.error}
              </Alert>
            )}
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
