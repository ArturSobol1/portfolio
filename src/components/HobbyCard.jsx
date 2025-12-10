// src/components/HobbyCard.jsx
import { Card } from "react-bootstrap";

export default function HobbyCard({
  title,
  emoji,
  description,
  details = [],
  image,
}) {
  return (
    <Card className="hobby-card border-0">
      {image && (
        <div className="hobby-image-wrapper">
          <Card.Img src={image} alt={title} className="hobby-image" />
          <div className="hobby-image-overlay">
            <span className="hobby-image-emoji">{emoji}</span>
            <span className="hobby-image-title">{title}</span>
          </div>
        </div>
      )}

      <Card.Body className="hobby-body">
        {/* Fallback if some hobby ever doesn’t have an image */}
        {!image && (
          <Card.Title className="hobby-title mb-2">
            {emoji} {title}
          </Card.Title>
        )}

        {description && (
          <Card.Text className="hobby-description mb-2">
            {description}
          </Card.Text>
        )}

        {details.length > 0 && (
          <ul className="hobby-list">
            {details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </Card.Body>
    </Card>
  );
}
