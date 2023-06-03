const paraScrollar = document.getElementById('scroll');
const secaoAlvo = document.getElementById('conteudoHome');

paraScrollar.addEventListener('click', function() {
    secaoAlvo.scrollIntoView({ behavior: 'smooth', duration:1.8});
});

function validacaoCadastro(){
    let nomeUsuarioCadastro = document.getElementById('nomeUsuarioCadastro').value 
    let emailUsuarioCadastro = document.getElementById('emailUsuarioCadastro').value 
    let cepUsuarioCadastro = document.getElementById('cepUsuarioCadastro').value
    let ruaUsuarioCadastro = document.getElementById('ruaUsuarioCadastro').value 
    let bairroUsuarioCadastro = document.getElementById('bairroUsuarioCadastro').value
    let numeroUsuarioCadastro = document.getElementById('numeroUsuarioCadastro').value
    let senhaUsuarioCadastro = document.getElementById('senhaUsuarioCadastro').value

    if (nomeUsuarioCadastro == "" || senhaUsuarioCadastro == "" || emailUsuarioCadastro == "" || cepUsuarioCadastro == "" || ruaUsuarioCadastro == "" || bairroUsuarioCadastro == "" || numeroUsuarioCadastro == "") {
        alert('Preencha todos campos antes de prosseguir')
    } else {
        alert("Seu cadastro foi efetivado!")
    }
}

function trocar(cor){
    document.body.style.background = cor
}
