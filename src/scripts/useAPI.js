const API_BASE_URL = 'https://swapi-node.vercel.app/api/' //Utilizada mayormente por la gran diferencia en la velocidad
const API2_BASE_URL = 'https://swapi.dev/api/' //Porque la primera en algunos elementos tiene mucha falta de información

const getSWAPIData = async (resource) => {
  const API_ENDPOINT = API_BASE_URL + resource
  const response = await fetch(API_ENDPOINT)
  const json = await response.json()
  return json
}

const getSWAPI2Data = async (resource) => {
  const API_ENDPOINT = API2_BASE_URL + resource
  const response = await fetch(API_ENDPOINT)
  const json = await response.json()
  return json
}

const getFilms = async () => {
  const films = await getSWAPIData('films/')
  return films
}

const getFilm = async (id) => {
  const film = await getSWAPIData(`films/${id}`)
  return film.fields
}

const getPersonById = async (id) => {
  const person = await getSWAPIData(`people/${id}`)
  /* return new Promise((resolve) => {
    setTimeout(() => {
      resolve(person)
    }, 10000)
  }) //Prueba de fetch paralelos*/
  return person.fields
}

const getStarshipById = async (id) => {
  const starship = await getSWAPI2Data(`starships/${id}`)
  return starship
}

const getVehicleById = async (id) => {
  const vehicle = await getSWAPIData(`vehicles/${id}`)
  return vehicle.fields
}

const getSpecieById = async (id) => {
  const specie = await getSWAPIData(`species/${id}`)
  return specie.fields
}

const getPlanetById = async (id) => {
  const planet = await getSWAPIData(`planets/${id}`)
  return planet.fields
}

const getIdURLSWAPIResource = (url) => Number(url.match(/([0-9]*)\/?$/)[1])