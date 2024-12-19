import React, { useEffect } from 'react';
import DoctorCard from '../../components/DoctorCard';
import { useHospital } from '../../context/HospitalContext';
import ServiceList from '../../components/ServiceList';
import AppointmentForm from '../../components/AppointmentForm';

const Home = () => {
  const { doctors, services, error, fetchDoctors, loading } = useHospital();

  useEffect(() => {
    fetchDoctors()
  }, [])


  if (loading) {
    return <p>Cargando información...</p>;
  }

  return (
    <div>
      <h1>Lista de Doctores</h1>
      {doctors.length > 0 ? (
        <ul>
          {doctors.map((doctor) => (
            <li key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay doctores disponibles.</p>
      )}

      <ServiceList services={services} />
      <AppointmentForm />
    </div>
  );
};

export default Home;
