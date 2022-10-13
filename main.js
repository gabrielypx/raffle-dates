function App(){
  const sorteado = document.querySelector("h3")
  const btnSortear = document.querySelector("button")

  function handleClick(){
    const dates = [
      "Ir ao museu",
      "Ir para a praia",
      "Fazer uma escultura das mãos",
      "Noite das meninas",
      "Ir para a academia juntos",
      "Fazer cookies",
      "Ir a um show",
      "Jantar romântico em casa",
      "Dia de skin care",
      "Dia de pé care",
      "Fazer um piquenique",
      "Fazer um dia de pintura",
      "Ir ao teatro",
      "Ver o pôr do sol",
      "Fazer um acampamento",
      "Plantar uma planta",
      "Fazer uma trilha",
      "Construir uma cabana",
      "Correr de kart",
      "Ir em um escape room",
      "Ir em uma livraria e escolher um livro um para o outro",
      "Ir no boliche",
      "Ir em um fliperama",
      "Ir no cinema",
      "Ir em uma cafeteria",
      "Ir em um restaurante chique",
      "Fazer uma noite de jogos",
      "Fazer uma receita juntos",
      "Ir comer pastel e caldo de cana",
      "Jantar juntos por vídeo chamada",
      "Ir na torre panorâmica",
      "Ver as estrelas",
      "Ir no airsoft",
      "Ir em um parque de diversões",
      "Fazer uma noite de comida mexicana",
      "Comprar um item pra nossa casa",
      "Fazer uma noite do hambúrguer",
      "Ir na biblioteca pública",
      "Fazer um bolo",
      "Fazer uma aula de dança do youtube",
      "Fazer uma noite de drinks",
      "Noite de filmes de terror",
      "Passeio no ônibus de turismo",
      "Fazer uma noite de fondue",
      "Ir trabalhar na empresa",
      "Ir ao zoologico",
      "Ir comer donuts",
      "Noite do quebra-cabeças"
    ]

    const sortearDate = dates[Math.floor(Math.random()*dates.length)]

    sorteado.innerText = ` ${sortearDate}`


  }
    
  btnSortear.addEventListener('click', () => {handleClick()})

  }

App()