// src/components/Projects.jsx
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Campus Pathfinder Project",
    role: "Team Member",
    timeframe: "March 2025 – May 2025",
    location: "Madison, WI",
    tech: "Java, Dijkstra’s shortest path, HTML/CSS",
    bullets: [
      "Parsed a document with close to 200 locations and converted it into a graph representation.",
      "Used Dijkstra’s algorithm to compute optimal routes between selected locations.",
      "Built an interactive HTML page for choosing start/end points and visualizing the route.",
    ],
  },
  {
    title: "Remotely Operated Underwater Vehicle (ROV)",
    role: "Team Member, Volunteer",
    timeframe: "September 2023 – May 2024",
    location: "Redmond, WA",
    tech: "Java, Python, sensors, motor controllers",
    bullets: [
      "Led software and electronics sub-team building a functional underwater robot.",
      "Used matrix algebra to normalize inputs into thruster usage for smooth control.",
      "Integrated sensors and motor control logic to support multiple underwater objectives.",
      "Collaborated with a 10-person team to design, test, and present the ROV.",
    ],
  },
  {
    title: "Platformer Game Project",
    role: "Team Member, Lead",
    timeframe: "October 2023 – January 2024",
    location: "Redmond, WA",
    tech: "C#, custom 2D physics, game engine tooling",
    bullets: [
      "Designed and implemented a custom physics system for a 2D platformer.",
      "Led weekly group meetings and coordinated a 4-member agile team.",
      "Delivered a playable prototype and trailer as part of a formal presentation.",
    ],
  },
  {
    title: "Binary Search Tree Simulator",
    role: "Team Member",
    timeframe: "September 2023 – October 2023",
    location: "Redmond, WA",
    tech: "Java, StdDraw visualization library",
    bullets: [
      "Built an interactive simulation tool to visualize insertions, deletions, and traversals in BSTs.",
      "Implemented efficient animation and rendering for real-time tree updates.",
      "Used the tool to explain BST operations to others in a more intuitive way.",
    ],
  },
  {
    title: "LinkedUp — Mobile Social & Messaging App",
    role: "Solo Developer",
    timeframe: "Fall 2025",
    location: "UW–Madison · CS 407",
    tech: "Kotlin, Jetpack Compose, Firebase Auth, Firestore",
    bullets: [
      "Built an Android app for profile-based matching and one-to-one messaging.",
      "Implemented Jetpack Compose UI with Navigation, ViewModels, and state flows.",
      "Used Firebase Authentication and Firestore to support real-time chat between users.",
      "Focused on responsive layouts and clean architecture suitable for long-term growth.",
    ],
  },
];

export default function Projects() {
  return (
    <Box as="section" className="app-page">
      <Box maxW="6xl" mx="auto" px={{ base: 4, md: 6 }}>
        <Heading as="h1" size="lg" mb={2}>
          Projects
        </Heading>
        <Text color="gray.600" mb={6}>
          A selection of software and hardware projects I&apos;ve worked on.
        </Text>

        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3 }}
          spacing={{ base: 5, md: 6 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
