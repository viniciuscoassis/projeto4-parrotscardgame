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
    <div class="id some"> ${arrayJogo[i]} </div>
    </div>
    </li>
`; 
}

let primeiroSelecionado = 1000, segundoSelecionado = 10;
let selecionado =0;

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


    if (selecionado == 0){
        selecionado = 1;
        primeiroSelecionado = cartaSelecionada.querySelector(".id");
    } else if (selecionado == 1){
        selecionado = 0;
        segundoSelecionado = cartaSelecionada.querySelector(".id");
    }

    if (primeiroSelecionado.innerHTML == segundoSelecionado.innerHTML){
        console.log("haa para ne");
    // } else {
    //     primeiroSelecionado="";
    //     segundoSelecionado="";
    // }

    
}
}

function comparador() { 
	return Math.random() - 0.5; 
}