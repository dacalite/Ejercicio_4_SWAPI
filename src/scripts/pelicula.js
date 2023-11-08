const TOTAL_POSITIONS = 5

window.onload = () => {
  const currentURL = new URL(window.location.href)
  const filmId = currentURL.searchParams.get("id")

  const genericInfo = document.getElementById("generic-info")
  const planetsList = document.getElementById("planets-list")
  const charactersList = document.getElementById("characters-list")
  const speciesList = document.getElementById("species-list")
  const vehiclesList = document.getElementById("vehicles-list")
  const starshipsList = document.getElementById("starships-list")

  const prevButton = document.getElementById("left-arrow")
  const nextButton = document.getElementById("right-arrow")
  let position = 1

  prevButton.addEventListener('click', () => {
    position--
    if (position < 1) {
      position = 1
    }
    updateSlide()
  })

  nextButton.addEventListener('click', () => {
    position++
    if (position > TOTAL_POSITIONS) {
      position = TOTAL_POSITIONS
    }
    updateSlide()
  })

  const updateSlide = () => {
    // Obtener la URL actual
    let currentURL = window.location.href

    // Encontrar la posición del fragmento '#slide-' en la URL actual
    let fragmentIndex = currentURL.indexOf('#slide-')

    // Crear la nueva URL con la posición actualizada
    let newURL = currentURL

    if (fragmentIndex !== -1) {
      // Reemplazar la posición anterior con la posición actual
      newURL = currentURL.substring(0, fragmentIndex) + `#slide-${position}`
    } else {
      // Agregar el fragmento '#slide-' con la posición
      newURL += `#slide-${position}`
    }

    // Actualizar la URL en la barra de direcciones
    window.location.href = newURL
  }

  getFilm(filmId).then(film => {
    const filmTitle = document.createElement("h1")
    filmTitle.innerText = `${film.title} (${film.release_date})`

    const filmOpening = document.createElement("p")
    filmOpening.innerText = film.opening_crawl.replace(/\r\n/g, ' ')

    genericInfo.appendChild(filmTitle)
    genericInfo.appendChild(document.createElement("br"))
    genericInfo.appendChild(filmOpening)

    const filmPlanetsUrl = film.planets
    const filmCharactersUrl = film.characters
    const filmSpeciesUrl = film.species
    const filmVehiclesUrl = film.vehicles
    const filmStarshipsUrl = film.starships

    filmPlanetsUrl.forEach(url => {
      const planetId = getIdURLSWAPIResource(url)
      const liElement = document.createElement("li")
      const aElement = document.createElement("a")
      aElement.href = `./planeta.html?id=${planetId}`
      aElement.innerText = 'Cargando...'
      liElement.appendChild(aElement)
      planetsList.appendChild(liElement)

      getPlanetById(planetId).then(planet => {
        aElement.innerText = planet.name
      })
    });

    filmCharactersUrl.forEach(url => {
      const characterId = getIdURLSWAPIResource(url)
      const liElement = document.createElement("li")
        const aElement = document.createElement("a")
        aElement.href = `./personaje.html?id=${characterId}`
        aElement.innerText = 'Cargando...'
        liElement.appendChild(aElement)
        charactersList.appendChild(liElement)

      getPersonById(characterId).then(character => {
        aElement.innerText = character.name
      })
    });

    filmSpeciesUrl.forEach(url => {
      const specieId = getIdURLSWAPIResource(url)
      const liElement = document.createElement("li")
        const aElement = document.createElement("a")
        aElement.href = `./especie.html?id=${specieId}`
        aElement.innerText = 'Cargando...'
        liElement.appendChild(aElement)
        speciesList.appendChild(liElement)

      getSpecieById(specieId).then(specie => {
        aElement.innerText = specie.name
      })
    });

    filmVehiclesUrl.forEach(url => {
      const vehicleId = getIdURLSWAPIResource(url)
      const liElement = document.createElement("li")
      const aElement = document.createElement("a")
      aElement.href = `./vehiculo.html?id=${vehicleId}`
      aElement.innerText = 'Cargando...'
      liElement.appendChild(aElement)
      vehiclesList.appendChild(liElement)

      getVehicleById(vehicleId).then(vehicle => {
        aElement.innerText = vehicle.name
      })
    });

    filmStarshipsUrl.forEach(url => {
      const starshipId = getIdURLSWAPIResource(url)
        const liElement = document.createElement("li")
        const aElement = document.createElement("a")
        aElement.href = `./nave.html?id=${starshipId}`
        aElement.innerText = 'Cargando...'
        liElement.appendChild(aElement)
        starshipsList.appendChild(liElement)

      getStarshipById(starshipId).then(starship => {
        aElement.innerText = starship.name
      })
    });

  })



}