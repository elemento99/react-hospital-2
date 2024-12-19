import { createContext, useContext, useState } from "react";
import supabase from "../supabase/client";

export const HospitalContext = createContext()

export const useHospital = () => {
  const context = useContext(HospitalContext)
  if (context === undefined) {
    throw new Error("useHospital must be used within a HospitalContextProvider")
  }
  return context;
};

export const HospitalContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [doctors, setDoctors] = useState([])
  const [error, setError] = useState(null) 
  const [services, setServices]= useState([])
  const [loadingDoctors, setLoadingDoctors] = useState(true)
  const [loadingServices, setLoadingServices] = useState(true)


  const getDoctors = async () => {
    try {
      const { error, data } = await supabase
        .from("doctors")
        .select("*")

      if (error) {
        throw error
      }

      setDoctors(data)
    } catch (error) {
      setError(error.error_description || error.message)
    } 
  }
  const fetchDoctors = async () => {
    setLoadingDoctors(true)
    try {
      await getDoctors()
    } catch (err) {
      console.error('Error al cargar los doctores:', err)
    } finally {
      setLoadingDoctors(false)
    }
  }


  const getServices = async ()=>{
    try{const{data, error}= await supabase
    .from("services")
    .select("*")
    if(error){throw error}
    setServices(data)
  }catch(error){
    setError(error,error_description || error.message)
  }
  }
 
  const fetchServices = async () => {
    setLoadingServices(true)
    try {
      await getServices()
    } catch (err) {
      console.error('Error al cargar los servicios:', err)
    } finally {
      setLoadingServices(false)
    }
  }

  const doctorById = async()=>{}
  const serviceById = async()=>{}


  return (
    <HospitalContext.Provider value={{ doctors, services, loading, error, getDoctors, getServices, fetchServices, fetchDoctors, }}>
      {children}
    </HospitalContext.Provider>
  )
}
