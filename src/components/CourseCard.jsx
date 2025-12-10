import {
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  VStack,
  HStack,
  Badge,
  Circle,
} from "@chakra-ui/react";

export default function CourseCard({
  code,
  title,
  term,
  summary,
  learned,
  work,
  emoji,
  area,
  colorScheme = "blue",
}) {
  return (
    <Box
      borderWidth="1px"
      borderRadius="xl"
      p={5}
      bg="white"
      boxShadow="sm"
      _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
      transition="0.18s ease-out"
      h="100%"
      display="flex"
      flexDirection="column"
    >
      {/* Header: emoji + title, badge on its own line so nothing is scrunched */}
      <Box mb={3}>
        <HStack align="center" spacing={3} mb={1}>
          {emoji && (
            <Circle
              size="40px"
              bg={`${colorScheme}.50`}
              borderWidth="1px"
              borderColor={`${colorScheme}.200`}
            >
              <span style={{ fontSize: "1.4rem" }} aria-hidden="true">
                {emoji}
              </span>
            </Circle>
          )}
          <Heading fontSize="lg">
            {code} – {title}
          </Heading>
        </HStack>
        {area && (
          <Badge
            colorScheme={colorScheme}
            variant="subtle"
            borderRadius="full"
            fontSize="0.7rem"
            px={3}
            py={1}
          >
            {area}
          </Badge>
        )}
      </Box>

      {/* Term */}
      <Text fontWeight="bold" mb={2}>
        Term:{" "}
        <Text as="span" fontWeight="normal">
          {term}
        </Text>
      </Text>

      {/* One-line summary */}
      <Text mb={4}>{summary}</Text>

      {/* Content sections */}
      <VStack align="start" spacing={3}>
        {learned && learned.length > 0 && (
          <Box>
            <Text fontWeight="bold" mb={1}>
              What I learned
            </Text>
            <UnorderedList pl={5}>
              {learned.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        )}

        {work && work.length > 0 && (
          <Box>
            <Text fontWeight="bold" mb={1}>
              Work
            </Text>
            <UnorderedList pl={5}>
              {work.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        )}
      </VStack>
    </Box>
  );
}
