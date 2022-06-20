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
    <img class="papagaio" src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png">

    <div class="cartaConteudo some">
    <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${arrayJogo[i]}">
    <div class="id none"> ${arrayJogo[i]} </div> <span class="none">${i}</span>
    </div>
    </li>
`; 
}

let primeiroSelecionado, segundoSelecionado, cartaSelecionada, id1,id2;
let selecionado =0, acertos=0;


function select(cartaSelecionada){
    
    

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
        id1 = cartaSelecionada.querySelector("span").innerHTML;
        
    }
    // quando ja tem um selecionado 
    else if (selecionado == 1){
    
       selecionado = 0;

        segundoSelecionado = cartaSelecionada.querySelector(".id");
        segundoSelecionado.classList.add("block");
        id2 = cartaSelecionada.querySelector("span").innerHTML;

        // evitar clique na mesma carta 
        if (id1 != id2){
            if (primeiroSelecionado.innerHTML == segundoSelecionado.innerHTML){
                acertos++;
                primeiroSelecionado.parentNode.classList.add("acertou");
                segundoSelecionado.parentNode.classList.add("acertou");
                selecionado=0;
            
                
                  } else {
                    setTimeout(desvirarCartas,1500);
                    setTimeout(limpar,1501);
                    
                  }
        } else {alert("aí não vale....");
      
        primeiroSelecionado = cartaSelecionada.querySelector(".id");}
    }  
        
    // conferir se venceu
        if (acertos==numCartas/2){  
            setTimeout(alertaGanhou,1000);
        }
    }



function desvirarCartas(){

    // desvirando
    primeiroSelecionado.parentNode.parentNode.classList.remove("virada");
    segundoSelecionado.parentNode.parentNode.classList.remove("virada");

    // aparece papagaios
    primeiroSelecionado.parentNode.parentNode.querySelector("img").classList.remove("some");
    segundoSelecionado.parentNode.parentNode.querySelector("img").classList.remove("some");
    
    // some gifs
    primeiroSelecionado.parentNode.classList.add("some");
    segundoSelecionado.parentNode.classList.add("some");

    segundoSelecionado.classList.remove("block");
}

function alertaGanhou(){
    alert("parabens karaio");
}

function limpar(){
    primeiroSelecionado="";
    segundoSelecionado="";
}

function comparador() { 
	return Math.random() - 0.5; 
}