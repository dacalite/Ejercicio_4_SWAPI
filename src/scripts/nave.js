window.addEventListener('load', () => {
  const currentURL = new URL(window.location.href)
  const starshipId = currentURL.searchParams.get('id')
  const mainContainer = document.querySelector('.container')
  const starshipName = document.createElement('p')
  const starshipInfo = document.createElement('p')
  mainContainer.appendChild(starshipName)
  mainContainer.appendChild(starshipInfo)

  starshipName.id = 'name'
  starshipName.innerText = 'Cargando...'

  starshipInfo.id = 'info'
  starshipInfo.innerText = 'Cargando...'

  getStarshipById(starshipId).then(starship => {
    starshipName.innerText = starship.name
    
    starshipInfo.innerText = 
    `Modelo: ${starship.model} \n\n
    Clase: ${starship.starship_class} \n\n
    Productor: ${starship.manufacturer} \n\n
    Precio: ${starship.cost_in_credits} créditos \n\n
    Longitud: ${starship.length} m \n\n
    Capacidad de carga: ${starship.cargo_capacity} kg \n\n
    Velocidad máxima: ${starship.max_atmosphering_speed} km/h\n\n
    Tripulación: ${starship.crew} personas\n\n
    Pasajeros: ${starship.passengers} personas`
  }
  )
})