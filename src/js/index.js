/*

objetivo - quando clicar na aba temos que mostrar o conteúdo da aba que foi clicada
pelo usuário e esconder o conteúdo anterior.

- passo 1 - dar um jeito de pegar os elementos que representa as abas do HTML   

- passe 2 - das um jeito de identificar o clique no elemento aba



*/

// passo 1 - darum jeito de pegar os elementos que representam o HTML
const abas = document.querySelectorAll(".aba");


abas.forEach(aba => {

    // passo 2 - dar um jeito de identificar o clique no elemento da aba
    aba.addEventListener("click", function(){

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    })
})

function selecionarAba(aba){
    //passo 3 - quando o usiário clicar, desmarcar a aba selecionada
    const abaSelecionada = document.querySelector(".aba.selecionado")
    abaSelecionada.classList.remove("selecionado")

    //passo 4 - marcar a aba clicada como selecionado
    aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba){

    //passo 5 - esconder o conteúdo anterior
    const informacaoSelecionada = document.querySelector(".informacao.selecionado")
    informacaoSelecionada.classList.remove("selecionado")

    //passo 6 - mostrar o conteúdo da aba selecionada
    const idDoElementoDeinformacoesDaAba = `informacao-${aba.id}`

    const informacaoASerMostrada = document.getElementById(idDoElementoDeinformacoesDaAba)
    informacaoASerMostrada.classList.add("selecionado")
}

