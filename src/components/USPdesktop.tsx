// src/components/CardMatrix.tsx  
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './USP.css'; // Import the CSS file for custom styles  
import '../App.css';
interface CardInfo {
  title: string;
  description: string;
}

const cards: CardInfo[] = [
  { title: 'Certified Cloud Experts', description: 'Advanced Google Cloud certifications and a track record of successful Fortune 500 migrations ensure top-tier expertise.' },
  { title: 'Tailored Strategies', description: 'Custom cloud architectures and precise migration roadmaps optimize performance and cost-efficiency.' },
  { title: 'Advanced Data Handling', description: 'Secure, real-time data transfers and seamless integration of Big Data and AI capabilities enhance analytics.' },
  { title: 'Robust Security', description: 'Comprehensive security protocols and adherence to industry standards like GDPR, HIPAA, and SOC 2 ensure data protection.' },
  { title: 'Continuous Optimization', description: '24/7 monitoring and proactive issue resolution with continuous optimization for peak performance.' },
  { title: 'Strategic Partnerships', description: 'Direct access to Google Cloud resources and a client-centric approach for personalized solutions and ongoing engagement.' },
];

const getCardColor = (index: number) => {
  return (index % 2 !== 0) ? 'bg-white text-dark' : 'bg-dark text-white';
};

const USPdesktop: React.FC = () => {
  return (
    <><h1 className="title">Our USPs</h1>
      <Container className="card-container">
        <div className="base"></div>
        <Row className="m-0">
          {cards.slice(0, 3).map((card, index) => (
            <Col key={index} className="p-0 card-col">
              <Card className={`h-100 ${getCardColor(index)} custom-card`}>
                <Card.Body className="cardBody">
                  <Card.Title className="cardTitle">{card.title}</Card.Title>
                  <Card.Text className="cardText">{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="m-0">
          {cards.slice(3, 6).map((card, index) => (
            <Col key={index} className="p-0 card-col">
              <Card className={`h-100 ${getCardColor(index + 3)} custom-card`}>
                <Card.Body className="cardBody">
                  <Card.Title className="cardTitle">{card.title}</Card.Title>
                  <Card.Text className="cardText">{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default USPdesktop;  
