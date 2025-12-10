// src/components/ProjectCard.jsx
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function ProjectCard({
  title,
  role,
  timeframe,
  location,
  tech,
  bullets = [],
}) {
  return (
    <Box
      borderRadius="xl"
      bg="white"
      boxShadow="sm"
      p={5}
      display="flex"
      flexDirection="column"
      height="100%"
      _hover={{
        boxShadow: "md",
        transform: "translateY(-2px)",
        transition: "all 0.15s ease-out",
      }}
    >
      {role && (
        <Text
          fontSize="xs"
          textTransform="uppercase"
          letterSpacing="wide"
          color="gray.500"
          mb={1}
        >
          {role}
        </Text>
      )}

      <Heading as="h3" fontSize="lg" mb={1}>
        {title}
      </Heading>

      {(timeframe || location) && (
        <Text fontSize="sm" color="gray.500" mb={2}>
          {timeframe}
          {timeframe && location ? " · " : ""}
          {location}
        </Text>
      )}

      {tech && (
        <Text fontSize="xs" color="gray.600" mb={3}>
          <Text as="span" fontWeight="semibold">
            Tech:
          </Text>{" "}
          {tech}
        </Text>
      )}

      {bullets.length > 0 && (
        <UnorderedList spacing={1} fontSize="sm" color="gray.800" ml={4}>
          {bullets.map((item) => (
            <ListItem key={item}>{item}</ListItem>
          ))}
        </UnorderedList>
      )}
    </Box>
  );
}
