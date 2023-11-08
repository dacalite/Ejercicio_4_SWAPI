window.addEventListener('load', () => {
  const currentURL = new URL(window.location.href)
  const specieId = currentURL.searchParams.get('id')
  const mainContainer = document.querySelector('.container')
  const specieName = document.createElement('p')
  const specieInfo = document.createElement('p')
  mainContainer.appendChild(specieName)
  mainContainer.appendChild(specieInfo)

  specieName.id = 'name'
  specieName.innerText = 'Cargando...'

  specieInfo.id = 'info'
  specieInfo.innerText = 'Cargando...'

  getSpecieById(specieId).then(specie => {
    specieName.innerText = specie.name
    
    specieInfo.innerText = 
    `Clasificación: ${specie.classification} \n\n
    Designación: ${specie.designation} \n\n
    Color de ojos: ${specie.eye_colors} \n\n
    Color de piel: ${specie.skin_colors} \n\n
    Color de pelo: ${specie.hair_colors} \n\n
    Idioma: ${specie.language} \n\n
    Altura media: ${specie.average_height} cm\n\n
    Esperanza de vida media: ${specie.average_lifespan} años\n\n`
  }
  )
})