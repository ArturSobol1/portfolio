// src/components/Home.jsx
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
} from "@chakra-ui/react";
import headshot from "../assets/artur-headshot.png";

export default function Home() {
  return (
    <Box as="section" py={10}>
      {/* HERO */}
      <Container maxW="5xl" textAlign="center" mb={10}>
        <Heading
          as="h1"
          size="2xl"
          mb={2}
          className="home-title" // optional; keeps your font size clamp if you like
        >
          Artur Sobol
        </Heading>
        <Text fontSize="lg" color="gray.600">
          Computer Science Student • UW–Madison
        </Text>

        <Stack
          direction={{ base: "column", sm: "row" }}
          spacing={4}
          justify="center"
          mt={6}
        >
          <Button as="a" href="#/projects" colorScheme="teal">
            View Projects
          </Button>
          <Button as="a" href="#/resume" variant="outline" colorScheme="gray">
            View Resume
          </Button>
        </Stack>
      </Container>

      {/* ABOUT */}
      <Container maxW="6xl">
        <Flex
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={8}
        >
          {/* Photo */}
          <Box flexBasis={{ base: "100%", md: "30%" }} textAlign="center">
            <Image
              src={headshot}
              alt="Artur Sobol"
              borderRadius="md"
              boxShadow="lg"
              maxW="260px"
              mx="auto"
            />
          </Box>

          {/* Divider for md+ */}
          <Box
            display={{ base: "none", md: "block" }}
            alignSelf="stretch"
            px={4}
          >
            <Divider orientation="vertical" />
          </Box>

          {/* Text */}
          <Box flexBasis={{ base: "100%", md: "60%" }}>
            <Heading as="h2" size="lg" mb={4}>
              About Me
            </Heading>

            <Text mb={3} fontSize="md" lineHeight="1.7">
              Hi, my name is Artur Sobol and I’m a junior student at the
              University of Wisconsin–Madison. I’m currently pursuing a major in
              Computer Science and possibly Computer Engineering.
            </Text>

            <Text mb={3} fontSize="md" lineHeight="1.7">
              I’m passionate about low-level computer architecture and how it
              can be used with higher-level programs to maximize efficiency.
              Some of my hobbies include skiing, collecting Legos, and
              football.
            </Text>

            <Text fontSize="md" lineHeight="1.7">
              This website summarizes me as a person and outlines my academic
              achievements and projects.
            </Text>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}
