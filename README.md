Para las consultas API, utilicé supabase

estas son las credenciales a utilizar en el archivo env: (dejo esto acá solo para que puedan revisarlo con fines pedagógicos, tengo claro que jamás debería poner un key en un readme)

VITE_SUPABASE_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3YWVzeGxqYnVsdGduZGN1emVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQxMzAxMDEsImV4cCI6MjA0OTcwNjEwMX0.MB0KLQCBznAEkIDo-rKPJmYOfU4H2hLJXpMj1c0PGiU

VITE_SUPABASE_URL =https://xwaesxljbultgndcuzec.supabase.co

Como archivo principal, estoy utilizando el Home en vez del app.jsx, ya que este último cumple la función de Router (para utilizar como base en los proyectos futuros) Esto lo realice para hacer fetch de los servicios de doctores y doctores desde el componente principal, para luego insertar los datos como props y cumplir con la pauta de la tarea.