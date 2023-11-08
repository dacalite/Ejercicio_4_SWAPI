window.addEventListener('load', () => {
  const currentURL = new URL(window.location.href)
  const planetId = currentURL.searchParams.get('id')
  const mainContainer = document.querySelector('.container')
  const planetName = document.createElement('p')
  const planetInfo = document.createElement('p')
  mainContainer.appendChild(planetName)
  mainContainer.appendChild(planetInfo)

  planetName.id = 'name'
  planetName.innerText = 'Cargando...'

  planetInfo.id = 'info'
  planetInfo.innerText = 'Cargando...'

  getPlanetById(planetId).then(planet => {
    planetName.innerText = planet.name
    
    planetInfo.innerText = 
    `Población: ${planet.population} hab \n\n
    Clima: ${planet.climate} \n\n
    Terreno: ${planet.terrain} \n\n
    Diámetro: ${planet.diameter} km \n\n
    Período de rotación: ${planet.rotation_period} h \n\n
    Período de órbita: ${planet.orbital_period} d`
  }
  )
})