window.addEventListener('load', () => {
  const currentURL = new URL(window.location.href)
  const vehicleId = currentURL.searchParams.get('id')
  const mainContainer = document.querySelector('.container')
  const vehicleName = document.createElement('p')
  const vehicleInfo = document.createElement('p')
  mainContainer.appendChild(vehicleName)
  mainContainer.appendChild(vehicleInfo)

  vehicleName.id = 'name'
  vehicleName.innerText = 'Cargando...'

  vehicleInfo.id = 'info'
  vehicleInfo.innerText = 'Cargando...'

  getVehicleById(vehicleId).then(vehicle => {
    vehicleName.innerText = vehicle.name
    
    vehicleInfo.innerText = 
    `Modelo: ${vehicle.model} \n\n
    Productor: ${vehicle.manufacturer} \n\n
    Precio: ${vehicle.cost_in_credits} créditos \n\n
    Longitud: ${vehicle.length} m \n\n
    Capacidad de carga: ${vehicle.cargo_capacity} kg \n\n
    Velocidad máxima: ${vehicle.max_atmosphering_speed} km/h\n\n
    Tripulación: ${vehicle.crew} personas\n\n
    Pasajeros: ${vehicle.passengers} personas`
  }
  )
})