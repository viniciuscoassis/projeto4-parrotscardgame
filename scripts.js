let gifs = 
[
    "fiestaparrot.gif",
    "bobrossparrot.gif",
    "explodyparrot.gif",
    "metalparrot.gif",
    "revertitparrot.gif",
    "tripletsparrot.gif",
    "unicornparrot.gif"
];


let numCartas = prompt("Com quantas cartas você quer jogar?");


while (numCartas < 4 || numCartas > 14 || numCartas%2 !=0){
    numCartas = prompt("Com quantas cartas você quer jogar?");
    
}
numCartas = Number(numCartas);

let ul = document.querySelector("ul");

let arrayJogo =[];

// construindo array jogo
for (let i =0;i<numCartas/2;i++){
    arrayJogo.push(gifs[i]);
    arrayJogo.push(gifs[i]);
}

// embaralhando array
arrayJogo.sort(comparador);

// adicionando numero certo de cartas
for (let i = 0; i< numCartas; i++){
    adicionarCartas(i);
}

function adicionarCartas(i){
    ul.innerHTML += `<li class="cartaPadrao" onclick="select(this)"> 
    <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png">

    <div class="cartaConteudo some">
    <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${arrayJogo[i]}">
    <div class="id none"> ${arrayJogo[i]} </div>
    </div>
    </li>
`; 
}

let primeiroSelecionado, segundoSelecionado, elementoSelecionado1, elementoSelecionado2, cartaSelecionada;
let selecionado =0, acertos=0;

function select(cartaSelecionada){

    // se nenhum estiver selecionado, fazer nada
    // se primeiro a ser selecionado, avisar que foi selecionado
    // se tiver algum selecionado, comparar
    // se for igual, deixar
    // se for diferente, voltar

    let papagaio = cartaSelecionada.querySelector("img");
    let gif = cartaSelecionada.querySelector(".cartaConteudo");

    papagaio.classList.add("some");
    gif.classList.remove("some");
    cartaSelecionada.classList.add("virada");

    // se carta ja ta virada
   
    if (cartaSelecionada.querySelector(".acertou")){
        return;
    }

    //quando nao tem nenhum selecionado
    if (selecionado == 0){
        selecionado = 1;
        
        primeiroSelecionado = cartaSelecionada.querySelector(".id");
    }
    // quando ja tem um selecionado 
    else if (selecionado == 1){
        selecionado = 0;
        segundoSelecionado = cartaSelecionada.querySelector(".id");

        if (primeiroSelecionado.innerHTML == segundoSelecionado.innerHTML){
            acertos++;
            primeiroSelecionado.parentNode.classList.add("acertou");
            segundoSelecionado.parentNode.classList.add("acertou");
            console.log("boa!");
            
      
            
              } else {
                setTimeout(desvirarCartas,2000);
                //   primeiroSelecionado="";
                //   segundoSelecionado="";
                  console.log("errou");
              }
    }  
        
    // conferir se venceu
        if (acertos==numCartas/2){  
            alert("karai borracha");
        } else{
            console.log(`acertos depois interacoes = ${acertos}`);
        }
}

function desvirarCartas(){
    console.log(primeiroSelecionado, segundoSelecionado);

    // desvirando
    primeiroSelecionado.parentNode.parentNode.classList.remove("virada");
    segundoSelecionado.parentNode.parentNode.classList.remove("virada");

    // aparece papagaios
    primeiroSelecionado.parentElement.querySelector("img").classList.remove("some");
    segundoSelecionado.parentElement.querySelector("img").classList.remove("some");
    
    // some gifs
    primeiroSelecionado.parentElement.classList.add("some");
    segundoSelecionado.parentElement.classList.add("some");

}

function alertaGanhou(){
    alert("parabens karaio");
}

function comparador() { 
	return Math.random() - 0.5; 
}