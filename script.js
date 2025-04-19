document.getElementById('botaoFeitico').addEventListener('click', function () {
    const form = document.getElementById('formularioMagico');
    const botaoFeitico = document.getElementById('botaoFeitico');
    const botaoNaoSeja = document.getElementById('naoseja');
    const frase = document.getElementById('fraseAlternativa');

    form.style.display = 'block';
    botaoFeitico.style.display = 'none';
    botaoNaoSeja.style.display = 'none';
    frase.style.display = 'none';
});

document.getElementById('naoseja').addEventListener('click', function () {
    const form = document.getElementById('formularioMagico');
    const botaoFeitico = document.getElementById('botaoFeitico');
    const botaoNaoSeja = document.getElementById('naoseja');
    const frase = document.getElementById('fraseAlternativa');

    form.style.display = 'none';
    frase.style.display = 'block';
    frase.classList.add('mensagem-trouxas');
    frase.innerHTML = `
    <p>Senhores Aluado, Rabicho, Almofadinhas e Pontas</p>
    <p>Pedem encarecidamente para que os Trouxas não metam o nariz onde não foram chamados.</p>
    <p>⚠️ Trouxas não são permitidos! Volte quando tiver sua varinha!</p>
    <p>A magia floresce apenas em almas raras!</p>
`;
    botaoFeitico.style.display = 'none';
    botaoNaoSeja.style.display = 'none';
});

function mostrarOutraMorte() {
    document.getElementById("campoOutraMorte").style.display = "block";
}

function clickNoBotao(event) {
    event.preventDefault();

    const outroRadio = document.getElementById("outroMorte");
    const outraMorteTextarea = document.getElementById("outraMorte");

    if (outroRadio.checked) {
        outroRadio.value = outraMorteTextarea.value || "Outro";
        outraMorteTextarea.setAttribute("name", "morte");
    } else {
        outraMorteTextarea.removeAttribute("name");
    }

    alert('Formulário enviado para Hogwarts!');
    document.getElementById("formularioMagico").submit();
    return false;
}
