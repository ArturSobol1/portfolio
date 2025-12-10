// src/components/Resume.jsx
import { Container, Button, Card, Stack } from "react-bootstrap";
import resumePDF from "../assets/Artur_Sobol_Resume.pdf";

export default function Resume() {
  // Hide the big default PDF toolbar for a cleaner look
  const pdfUrl = `${resumePDF}#toolbar=0&navpanes=0&scrollbar=0`;

  return (
    <section className="resume-section">
      <Container className="resume-container">
        {/* Header like your other pages */}
        <div className="resume-header">
          <span className="resume-icon">📄</span>
          <div>
            <h1 className="mb-1">Resume</h1>
            <p className="text-muted mb-0">
              A quick look at my experience, projects, and skills — view it
              here or download a copy.
            </p>
          </div>
        </div>

        {/* Actions */}
        <Stack
          direction="horizontal"
          gap={2}
          className="mb-3 flex-wrap justify-content-center justify-content-md-start"
        >
          <a href={resumePDF} download="Artur_Sobol_Resume.pdf">
            <Button variant="primary">Download PDF</Button>
          </a>
          <a href={resumePDF} target="_blank" rel="noreferrer">
            <Button variant="outline-secondary">Open in new tab</Button>
          </a>
        </Stack>

        {/* Card with embedded PDF */}
        <Card className="resume-card">
          <Card.Body className="p-0">
            <iframe
              src={pdfUrl}
              title="Artur Sobol Resume"
              className="resume-frame"
            />
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
