import React from 'react'



const ServiceList = ({services}) => {
  return (
    <div>
      <h2>Lista de Servicios</h2>
    {services.length > 0 ? (
      <ul>
        {services.map((service) => (
          <li key={service.id}>{service.name}</li>
        ))}
      </ul>
    ) : (
      <p>No hay servicios disponibles.</p>
    )}</div>
  )
}

export default ServiceList