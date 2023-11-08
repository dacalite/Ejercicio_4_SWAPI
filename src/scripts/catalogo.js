window.addEventListener('load', () => {
  let slider = document.querySelector(".slider")
  let sliderNav = document.querySelector(".slider-nav")

  getFilms()
    .then(res => {
      for (let index = 0; index < res.count; index++) {
        const filmId = getIdURLSWAPIResource(res.results[index].fields.url)

        const divElement = document.createElement("div")
        divElement.id = `slide-${filmId}`

        const imgElement = document.createElement("img")
        imgElement.src = `../res/images/covers/cover${filmId}.jpg`

        const pElement = document.createElement("p")
        pElement.innerText = res.results[index].fields.title

        pElement.addEventListener('click', () => { window.location.href = `./pelicula.html?id=${filmId}` })

        const anchorElement = document.createElement("a")
        anchorElement.href = `#slide-${filmId}`

        divElement.appendChild(imgElement)
        divElement.appendChild(pElement)
        slider.appendChild(divElement)
        sliderNav.appendChild(anchorElement)
      }
    })
})