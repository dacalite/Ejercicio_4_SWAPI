window.addEventListener('load', () => {
  const currentURL = new URL(window.location.href)
  const characterId = currentURL.searchParams.get('id')
  const mainContainer = document.querySelector('.container')
  const characterName = document.createElement('p')
  const characterInfo = document.createElement('p')
  mainContainer.appendChild(characterName)
  mainContainer.appendChild(characterInfo)

  characterName.id = 'name'
  characterName.innerText = 'Cargando...'

  characterInfo.id = 'info'
  characterInfo.innerText = 'Cargando...'

  getPersonById(characterId).then(character => {
    characterName.innerText = character.name
    
    characterInfo.innerText = 
    `Género: ${character.gender} \n\n
    Color de piel: ${character.skin_color} \n\n
    Color de pelo: ${character.hair_color} \n\n
    Color de ojos: ${character.eye_color} \n\n
    Altura: ${character.height} cm \n\n
    Peso: ${character.mass} kg \n\n
    Año de nacimiento: ${character.birth_year}\n\n`
  }
  )
})