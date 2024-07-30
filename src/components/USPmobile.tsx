// src/components/CardMatrix.tsx  
import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './USP-mobile.css'; // Import the CSS file for custom styles  
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

const USPmobile: React.FC = () => {
  return (
    <><h1 className="title-mobile">Our USPs</h1>
      <Container className="card-container-mobile">
        {cards.slice(0, 6).map((card, index) => (
          <Row className="m-0">
            <Col key={index} className="p-0 card-col-mobile">
              <Card className={`h-100 ${getCardColor(index)} custom-card-mobile`}>
                <Card.Body className="cardBody-mobile">
                  <Card.Title className="cardTitle-mobile">{card.title}</Card.Title>
                  <Card.Text className="cardText-mobile">{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default USPmobile;  
