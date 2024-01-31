var elementosDuvida = document.querySelectorAll('.duvida')

// o query selector all ele pega a classe dúvida criada

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa')
    })  
})

// add o tipo de evento que vc quer ouvir click, passar o mouse, etc 
//class list alterna a presença de uma classe específica no conjunto de classes de um elemento. Se a classe estiver presente, ela será removida

