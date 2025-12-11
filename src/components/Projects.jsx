// src/components/ProjectCard.jsx
import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Tag,
  Flex,
} from "@chakra-ui/react";

export default function ProjectCard({
  emoji = "🛠️",
  badge,
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
      transition="all 0.2s ease"
      _hover={{
        boxShadow: "lg",
        transform: "translateY(-3px)",
      }}
    >
      {/* Top section: Emoji + Title Row */}
      <Flex align="center" mb={2} gap={3}>
        <Box
          w={10}
          h={10}
          borderRadius="full"
          bg="gray.100"
          display="flex"
          justifyContent="center"
          alignItems="center"
          fontSize="xl"
        >
          {emoji}
        </Box>

        <Heading as="h3" fontSize="lg">
          {title}
        </Heading>
      </Flex>

      {/* Category pill (role badge) */}
      {badge && (
        <Box mb={3}>
          {badge}
        </Box>
      )}

      {/* Time + Location */}
      {(timeframe || location) && (
        <Text fontSize="sm" color="gray.500" mb={2}>
          {timeframe}
          {timeframe && location ? " · " : ""}
          {location}
        </Text>
      )}

      {/* Tech Stack */}
      {tech && (
        <Text fontSize="xs" color="gray.600" mb={3}>
          <Text as="span" fontWeight="semibold">
            Tech:
          </Text>{" "}
          {tech}
        </Text>
      )}

      {/* Bullet Points */}
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
