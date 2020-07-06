// pegar o container do texto
const pageHome = document.querySelector("#page-create-point")

// Criar a barrinha de progresso
let bar = document.createElement("div")
// Criar os estilos da barrinha
bar.style.height = "4px"
bar.style.width = "0"
bar.style.backgroundColor = "#6633cc"
bar.style.position = "fixed"
bar.style.top = "0"
bar.style.left = "0"
bar.style.zIndex = "9999"
bar.style.transition = "0.2s"

// adiciona no corpo da pádina
document.body.append(bar)

// verifica o movimento do scroll
document.addEventListener("scroll", function() {
  // o tamanho da caixa que contem o texto
  // console.log(pageHome.offsetHeight)
  const textHeight = pageHome.offsetHeight
  // verifica em que posiçao da pagina eu estou
  const pagePositionY = window.pageYOffset
  // regra de 3
  const updatedBar =  pagePositionY * 150 / textHeight

  bar.style.width = updatedBar + "%"
})