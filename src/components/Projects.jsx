// src/components/Projects.jsx
import { Box, Heading, SimpleGrid, Text, Tag, Flex } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const roleStyle = {
  "Team Member": { color: "blue", emoji: "👥" },
  "Team Member, Volunteer": { color: "purple", emoji: "🤝" },
  "Team Member, Lead": { color: "orange", emoji: "🧭" },
  "Solo Developer": { color: "green", emoji: "💻" },
};

const projects = [
  {
    title: "Campus Pathfinder Project",
    role: "Team Member",
    emoji: "🗺️",
    timeframe: "March 2025 – May 2025",
    location: "Madison, WI",
    tech: "Java, Dijkstra’s shortest path, HTML/CSS",
    bullets: [
      "Parsed a document with close to 200 locations and converted it into a graph representation.",
      "Computed optimal routes between selected nodes using Dijkstra’s algorithm.",
      "Built an interactive HTML tool to visualize routes and select endpoints.",
    ],
  },
  {
    title: "Remotely Operated Underwater Vehicle (ROV)",
    role: "Team Member, Volunteer",
    emoji: "🤖",
    timeframe: "September 2023 – May 2024",
    location: "Redmond, WA",
    tech: "Java, Python, sensors, motor controllers",
    bullets: [
      "Led software/electronics subteam building a functional underwater robot.",
      "Used matrix algebra to normalize thruster inputs for smooth control.",
      "Integrated sensors + motor logic to support underwater objectives.",
      "Collaborated with a 10-person team on design, testing, and presentation.",
    ],
  },
  {
    title: "Platformer Game Project",
    role: "Team Member, Lead",
    emoji: "🎮",
    timeframe: "October 2023 – January 2024",
    location: "Redmond, WA",
    tech: "C#, custom 2D physics, game engine tooling",
    bullets: [
      "Built a fully custom physics system for a 2D platformer.",
      "Organized weekly meetings & led a 4-member agile team.",
      "Delivered a polished playable prototype + promotional trailer.",
    ],
  },
  {
    title: "Binary Search Tree Simulator",
    role: "Team Member",
    emoji: "🌳",
    timeframe: "September 2023 – October 2023",
    location: "Redmond, WA",
    tech: "Java, StdDraw visualizer",
    bullets: [
      "Built an interactive simulation tool for BST inserts, deletes, and traversal.",
      "Implemented real-time animation and tree rendering.",
      "Used tool to teach data structure concepts more intuitively.",
    ],
  },
  {
    title: "LinkedUp — Social & Messaging App",
    role: "Solo Developer",
    emoji: "📱",
    timeframe: "Fall 2025",
    location: "UW–Madison · CS 407",
    tech: "Kotlin, Jetpack Compose, Firebase Auth, Firestore",
    bullets: [
      "Developed Android app for profile-matching & messaging.",
      "Implemented Jetpack Compose UI with ViewModels + Navigation.",
      "Used Firebase Auth & Firestore for real-time chat sync.",
      "Designed clean, scalable architecture for long-term maintainability.",
    ],
  },
];

export default function Projects() {
  return (
    <Box as="section" bg="gray.50" py={{ base: 10, md: 16 }}>
      <Box maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>

        {/* Header */}
        <Flex align="center" gap={4} mb={8}>
          <Box
            w={12}
            h={12}
            borderRadius="full"
            bgGradient="linear(to-br, blue.100, purple.100)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            boxShadow="sm"
          >
            <Text fontSize="2xl">📦</Text>
          </Box>

          <Box>
            <Heading as="h1" size="lg" mb={1}>
              Projects
            </Heading>
            <Text color="gray.600">
              A selection of software and hardware projects I’ve built.
            </Text>
          </Box>
        </Flex>

        {/* Grid */}
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={8}>
          {projects.map((p) => {
            const style = roleStyle[p.role] ?? {};
            return (
              <ProjectCard
                key={p.title}
                {...p}
                emoji={p.emoji || style.emoji}
                badge={
                  <Tag
                    size="sm"
                    colorScheme={style.color || "gray"}
                    borderRadius="full"
                  >
                    {p.role}
                  </Tag>
                }
              />
            );
          })}
        </SimpleGrid>

      </Box>
    </Box>
  );
}
