const introMusic = new Audio('./res/audio/intro.mp3')

const redirectToMainPage = () => {
  introMusic.pause()
  window.location.replace('pages/catalogo.html#slide-1')
}

const startIntro = () => {
  const introText = document.getElementById("intro")
  const introLogo = document.getElementById("logo")
  const skipIntroButton = document.getElementById("skip-intro")
  const scrollerText = document.getElementById("scroller")
  introText.className += ' start-animation'
  introLogo.className += ' start-animation'
  skipIntroButton.className += ' start-animation'
  scrollerText.className += ' start-animation'
  setTimeout(redirectToMainPage, 71000)
  skipIntroButton.addEventListener("click", redirectToMainPage)
  introMusic.play();
}

window.addEventListener('load', () => {
  const startButton = document.getElementById("start")
  const scrollerDiv = document.getElementById("scroller")
  const introText = document.createElement("p")
  scrollerDiv.appendChild(introText)

  introText.innerText = 
  `EJERCICIO #002\n\n
  Informática 2 - Entrega JavaScript\n\n
  En este ejercicio se modela una web para visualizar los datos principales de\n
  las películas de la conocida saga Star Wars, así como de sus \n
  personajes,planetas, especies, vehículos o naves espaciales.\n
  Para ello se ha hecho uso de la api SWAPI, disponible en la url \n
  https://swapi.dev/api/ en la cual utilizamos diferentes endpoints para acceder \n
  a la información de cada elemento a través de su identificador. A mayores y debido\n
  a que la API principal tiene un tráfico muy elevado, lo que hace que las peticiones\n
  GET sean extremadamente lentas, también hacemos uso de un servidor alternativo \n
  disponible en la url https://swapi-node-vercel.app/api/ De esta forma combinando\n
  las peticiones hacia las dos APIs conseguimos por una parte un muy pequeño \n
  período de demora  de cara al usuario que ve la información, pero por la otra\n
  parte en los elementos que tienen más atributos que mostrar, recurrimos\n
  a la API oficial ya que nos ofrece un mayor nivel de detalle.`
    
  startButton.addEventListener("click", () => { startButton.className += ' start-animation'; startIntro() })
})