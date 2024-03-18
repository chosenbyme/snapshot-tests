import React from "react"
import Card from "react-bootstrap/Card"
import Developer from './developer.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "28rem"}}>
        <Card.Img variant="top" src={Developer} />
        <Card.Body>
            <Card.Title>Yekai Guan</Card.Title>
            <Card.Text>
            I am a software developer who studied in NYU. I am going to be a great engineer!
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard