const chamados = document.querySelector("#listaChamados");

chamados.addEventListener("keypress", function(e) {
    if(e.keyCode === 13){
      Search(chamados.value);
    }
})

function Search(chamado) {
    let vetor = chamado.match(/.{1,7}/g);
    if(vetor.length > 25) {
        alert("Não é possível abrir mais de 25 chamados por vez!");
    } else {
    for(let c=0; c<vetor.length;c++) {
            window.open("https://top.br.atos.net/canais/sc/chamados/detail_request.cfm?id="+vetor[c], "_blank");
        }
        console.log(vetor[c]);
    }
    Limpar();
}

function Limpar() {
    chamados.value = "";
}
