let numCartas = prompt("Com quantas cartas você quer jogar?");
while (numCartas < 4 || numCartas > 14 || numCartas%2 !=0){
    numCartas = prompt("Com quantas cartas você quer jogar?");
}

let ul = document.querySelector("ul");
ul.innerHTML = "";

for (let i =0;i<numCartas;i++){
    adicionarCartas();
}




function adicionarCartas(){
    ul.innerHTML += `<li class="carta" onclick="aparecerGif(this)"> 
<img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png">
    </li>`;
   
}

function aparecerGif(cartaSelecionada){
    cartaSelecionada.innerHTML = `<img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/bobrossparrot.gif">`
}