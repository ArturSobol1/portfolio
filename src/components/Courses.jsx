import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  HStack,
  Circle,
} from "@chakra-ui/react";
import CourseCard from "./CourseCard";

const courses = [
  {
    code: "CS 300",
    title: "Data Structures & Algorithms I",
    term: "Fall 2024",
    summary:
      "Intro to fundamental data structures and algorithmic thinking in Java.",
    learned: [
      "Linked lists, stacks, queues, array structures",
      "Trees + recursion fundamentals",
      "Searching/sorting algorithms & Big-O analysis",
      "Implementing data structures cleanly in Java",
    ],
    work: [
      "Implemented custom list/stack/queue ADTs",
      "Compared sorting approaches analytically & experimentally",
    ],
    emoji: "🧠",
    area: "Programming / Algorithms",
    colorScheme: "blue",
  },
  {
    code: "CS 240",
    title: "Discrete Mathematics",
    term: "Fall 2024",
    summary:
      "Mathematical reasoning tools for CS using logic, proofs, combinatorics, and graph theory.",
    learned: [
      "Propositional/predicate logic & proofs",
      "Sets, functions, relations, equivalence",
      "Induction & recursive definitions",
      "Counting: permutations, combinations",
      "Intro graph theory",
    ],
    work: [
      "Proof-based problem sets",
      "Combinatorics applications to real CS problems",
    ],
    emoji: "📐",
    area: "Theory / Math Foundations",
    colorScheme: "purple",
  },
  {
    code: "CS 400",
    title: "Data Structures & Algorithms II",
    term: "Spring 2025",
    summary: "Performance-focused advanced data structures + algorithmic engineering.",
    learned: [
      "Hash tables & collision strategies",
      "Red-black balanced trees",
      "Priority queues & heaps",
      "Graphs & shortest path algorithms",
      "Larger-scale code organization",
    ],
    work: [
      "Implemented Red-Black Tree",
      "Built Campus Pathfinder graph project",
    ],
    emoji: "📊",
    area: "Algorithms / Systems",
    colorScheme: "cyan",
  },
  {
    code: "CS 352",
    title: "Digital System Fundamentals",
    term: "Fall 2025",
    summary:
      "Digital logic engineering from gates → datapaths → controlled hardware systems.",
    learned: [
      "Boolean simplification, K-maps",
      "Adders, muxes, comparators",
      "Flip-flops, registers, sequential logic",
      "FSMs (Moore/Mealy)",
      "Datapaths + control circuits",
      "Verilog design + simulation",
    ],
    work: [
      "Implemented ALU + datapath modules",
      "Built FSM logic systems",
      "Simulated circuits using ModelSim & Quartus",
    ],
    emoji: "🔧",
    area: "Hardware / Digital Design",
    colorScheme: "orange",
  },
  {
    code: "CS 354",
    title: "Machine Organization & Programming",
    term: "Fall 2025",
    summary:
      "Systems programming in C + x86 assembly, linking, memory + runtime architecture.",
    learned: [
      "C memory model & pointers",
      "x86 assembly + registers",
      "Stack frames & calling conventions",
      "Dynamic memory allocation",
      "Caches, virtual memory, segmentation",
      "Debugging w/ gdb + valgrind",
    ],
    work: [
      "Built custom malloc-free allocator",
      "Built cache simulator",
      "Translated C functions to assembly",
    ],
    emoji: "💾",
    area: "Systems / Low-Level",
    colorScheme: "teal",
  },
  {
    code: "CS 571",
    title: "Building User Interfaces",
    term: "Fall 2025",
    summary:
      "Front-end development with React + UX/HCI design principles + prototyping workflows.",
    learned: [
      "Web UI development (React)",
      "Accessibility + responsive UI",
      "Usability heuristics & evaluation",
      "Wireframing + prototyping",
      "Voice UI introduction",
      "Deployments w/ GitHub Pages",
    ],
    work: [
      "Designed + deployed portfolio website",
      "Ran heuristic usability study",
      "Created design prototypes",
    ],
    emoji: "🎨",
    area: "Web / UI + UX",
    colorScheme: "pink",
  },
  {
    code: "CS 407",
    title: "Mobile Systems & Applications",
    term: "Fall 2025",
    summary:
      "Android development w/ Kotlin + Jetpack Compose focusing on app architecture and efficiency.",
    learned: [
      "Kotlin + Compose UI",
      "MVVM architecture + ViewModels",
      "Navigation + recomposition",
      "Firestore + Room DB integration",
      "Networking + background tasks",
      "Battery-aware performance",
    ],
    work: [
      "Built LinkedUp social app",
      "Implemented real-time messaging",
      "Developed dynamic Compose UI screens",
    ],
    emoji: "📱",
    area: "Mobile / Android",
    colorScheme: "green",
  },
  {
    code: "Math 431",
    title: "Introduction to Probability",
    term: "Fall 2025",
    summary:
      "Discrete/continuous probability, random variables, expectation, convergence theory.",
    learned: [
      "Probability axioms & Bayes theorem",
      "Independence + distributions",
      "Expectation & variance + MGFs",
      "Joint distributions & covariance",
      "Law of Large Numbers + CLT",
    ],
    work: [
      "Weekly rigorous problem sets",
      "Real-world random process modeling",
      "Expectation/variance calculations",
    ],
    emoji: "🎲",
    area: "Math / Probability",
    colorScheme: "yellow",
  },
];

export default function Courses() {
  return (
    <Box as="section" bg="gray.50" py={10} px={{ base: 4, md: 8 }}>
      {/* Header */}
      <Box maxW="7xl" mx="auto" mb={10}>
        <HStack spacing={3} mb={2}>
          <Circle
            size="32px"
            bgGradient="linear(to-br, blue.400, purple.500)"
            color="white"
            fontSize="1.2rem"
          >
            📘
          </Circle>
          <Heading fontWeight="bold">Courses</Heading>
        </HStack>
        <Text color="gray.600">
          A collection of courses I’ve completed 
        </Text>
      </Box>

      {/* Responsive Card Grid (auto-fit) */}
      <Box maxW="7xl" mx="auto">
        <Grid
          gap={6}
          templateColumns="repeat(auto-fit, minmax(280px, 1fr))"
          alignItems="stretch"
        >
          {courses.map((c) => (
            <GridItem key={c.code} h="100%">
              <CourseCard {...c} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
