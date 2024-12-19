import React from "react";
import { Card, Button } from "react-bootstrap";

const DoctorCard = ({ doctor }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/100" 
        alt={`${doctor.name}'s photo`}
      />
      <Card.Body>
        <Card.Title>{doctor.name}</Card.Title>
        <Card.Text>
          <strong>Especialidad:</strong> {doctor.specialty}
        </Card.Text>
        <Card.Text>
          <strong>Años de experiencia:</strong> {doctor.years_experience}
        </Card.Text>
        <Button variant="primary">Ver detalles</Button>
      </Card.Body>
    </Card>
  );
};

export default DoctorCard;
