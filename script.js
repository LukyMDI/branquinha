const comecar = document.getElementById("comecar");
// const dica = document.getElementById("dica");
const dica_aqui = document.getElementById("dica-aqui");

comecar.addEventListener("click", (e) => {
    window.location.href = "/pages/1.html";
});

function exibirDica() {
    let dicas = [
        "Morsa |",
        "| Código antigo - 1835 |",
        "| sistema binário de representação à distância de números, letras e sinais gráficos, utilizando-se de pontos e traços para transmitir mensagens",
    ];

    dica_aqui.innerText = dicas;
}

function verificarCodigo() {
    const traducoesCorretas = {
        "--- .. / -- .. -. .... .- / -.-. .- -... . -.-. ..- -.. .. -. .... .- --..-- / . ..- / - . / .- -- --- --- --- ---":
            "OI MINHA CABECUDINHA, EU TE AMOOOO",
        ". ..- / ... . -- .--. .-. . / .. .-. . .. / - . / .- -- .- .-. / -- .. -. .... .- / -. . -. . -- .-.-.- / -- ..- .. - --- / -- . ... -- ---":
            "EU SEMPRE IREI TE AMAR MINHA NENEM. MUITO MESMO",
        "...- --- -.-. . / . / -- ..- .. - --- / . ... .--. . -.-. .. .- .-.. / .--. .-. .- / -- .. -- / --. .- - .. -. .... .-":
            "VOCE E MUITO ESPECIAL PRA MIM GATINHA",
        ".. .-. .-. .. - .- -.. .- --..-- / -... .. .-. .-. . -. - .- --..-- / -.-. .- -... . -.-. .. -. .... .- / -.. . / --- ...- ---":
            "IRRITADA, BIRRENTA, CABECINHA DE OVO",
        ".- -- --- --- --- --- .-. --..-- / . ..- / - --- / -.-. --- -- / - .- -. - .- / ... .- ..- -.. .- -.. . / -.. . / ...- --- -.-. . . . . . . . .":
            "AMOOOOR, EU TO COM TANTA SAUDADE DE VOCEEEEEEEE",
        ".-. --- ... .- ... / ... .- --- / ...- . .-. -- . .-.. .... .- ... --..-- / ...- .. --- .-.. . - .- ... / ... .- --- / .- --.. ..- .. ... .-.-.- / ... . --. ..- -. -.. --- / .- / ... ..- .- / -- .- . --..-- / ...- --- -.-. . / ...- .- .. / ... --- / -.-. --- -- . .-. / --- ...- --- / -.-. --- -- / -.-. ..- ... -.-. ..- --..":
            "ROSAS SAO VERMELHAS, VIOLETAS SAO AZUIS. SEGUNDO A SUA MAE, VOCE VAI SO COMER OVO COM CUSCUZ",
        "- .- / --.- ..- .- ... . / -.-. .... . --. .- -. -.. --- / -. .- / ... ..- .- / ... ..- .-. .--. .-. . ... .- / . --":
            "TA QUASE CHEGANDO NA SUA SURPRESA EM",
        ".- ..-. ..-. --..-- / ...- --- ..- / - . .-. / --.- ..- . / -.. .- .-. / .- / -.. .. -.-. .- .-.-.- / - --- -- .-":
            "AFF, VOU TER QUE DAR A DICA. TOMA",
    };

    let codigoDigitado = document
        .getElementById("decifre")
        .value.replace(/\s/g, "");
    console.log(codigoDigitado);
    let listaCodigos = document.getElementById("codigos");

    let codigos = listaCodigos.getElementsByTagName("li");
    let codigoEncontrado = false;

    for (var i = 0; i < codigos.length; i++) {
        // let codigo = codigos[i].textContent.trim().replace(/\s/g, "");
        let traducao = Object.values(traducoesCorretas)[i];
        traducao = traducao.replace(/\s/g, "");
        // console.log(codigo);
        // console.log(traducoesCorretas[codigo]);

        if (codigoDigitado == traducao) {
            listaCodigos.removeChild(codigos[i]);
            codigoEncontrado = true;
            break;
        }
    }

    if (codigoEncontrado) {
        alert("Código correto! Próximo código.");
    } else {
        alert("Código incorreto.");
    }

    console.log(codigos.length);

    if (codigos.length == 0) {
        let botao = document.createElement("button");
        botao.textContent = "Finalizar";
        botao.addEventListener("click", finalizar);
        document.getElementById("container").appendChild(botao);
    }

    function finalizar() {
        window.location.href = "2.html";
    }
}
