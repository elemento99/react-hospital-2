import React from 'react';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHospital } from '../context/HospitalContext';

const AppointmentForm = () => {

  const { services, fetchServices } = useHospital()
  const [selectedService, setSelectedService] = useState('');
  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  useEffect(() => {
    fetchServices()
  }, [])



  return (
    <Form>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label htmlFor="fullName">Nombre completo</Form.Label>
          <Form.Control
            id="fullName"
            placeholder="Escriba su nombre completo"
          />
        </Form.Group>


        <Form.Group className="mb-3">
          <Form.Label htmlFor="service">Servicio</Form.Label>
          <Form.Select id="service"
            value={selectedService}
            onChange={handleServiceChange}>
            {services.map((service) => (
              <option value={service.name} key={service.id}>
                {service.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="doctor">Doctor</Form.Label>
          <Form.Select id="doctor">
            <option value="">Seleccione un doctor</option>
            <option value="dr_smith">Dr. Smith</option>
            <option value="dr_jones">Dr. Jones</option>
            {/* Agrega más opciones según sea necesario */}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label htmlFor="schedule">Horario</Form.Label>
          <Form.Control
            type="datetime-local"
            id="schedule"
            placeholder="Seleccione la fecha y hora"
            defaultValue="2024-12-21T14:30"
          />
        </Form.Group>

        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
};

export default AppointmentForm;