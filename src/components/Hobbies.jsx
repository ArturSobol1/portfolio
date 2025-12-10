// src/components/Hobbies.jsx
import { Container, Row, Col } from "react-bootstrap";
import HobbyCard from "./HobbyCard";

import skiingImg from "../assets/skiing.jpg";
import footballImg from "../assets/football.jpg";
import legosImg from "../assets/legos.png";
import rainierImg from "../assets/rainier.jpg";

const hobbies = [
  {
    title: "Skiing",
    emoji: "🎿",
    image: skiingImg,
    description:
      "Chasing better runs each season and any excuse to be in the mountains.",
    details: [
      "Resort days plus the occasional bigger trip out west",
      "Love the mix of speed, control, and cold air",
    ],
  },
  {
    title: "Football",
    emoji: "🏈",
    image: footballImg,
    description:
      "One of my favorite ways to get outside, compete, and hang out with friends.",
    details: [
      "Pick-up games and intramurals when schedules line up",
      "Care about the strategy almost as much as the score",
    ],
  },
  {
    title: "Mountaineering & Hiking",
    emoji: "🗻",
    image: rainierImg,
    description:
      "Long hikes, summit days, and anything that involves a big view.",
    details: [
      "Trips to places like Rainier and other PNW trails",
      "Big fan of ridgelines and feeling way above everything",
    ],
  },
  {
    title: "LEGOs & Building",
    emoji: "🧱",
    image: legosImg,
    description:
      "Still love building LEGO sets and messing around with my own designs.",
    details: [
      "Relaxing way to build things without touching a keyboard",
      "Sometimes recreate places or objects from games and shows",
    ],
  },
];

export default function Hobbies() {
  return (
    <section className="app-page hobbies-section">
      <Container className="hobbies-container">
        <div className="hobbies-header">
          <span className="hobbies-icon">✨</span>
          <div>
            <h1 className="mb-1">Hobbies</h1>
            <p className="text-muted mb-0">
              A few things I like doing outside of classes and projects — the
              stuff that keeps me sane and motivated.
            </p>
          </div>
        </div>

        <Row className="g-4">
          {hobbies.map((hobby) => (
            <Col key={hobby.title} xs={12} sm={6} lg={4}>
              {/* 1 per row on mobile, 2 on tablet, 3 on desktop */}
              <HobbyCard {...hobby} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
