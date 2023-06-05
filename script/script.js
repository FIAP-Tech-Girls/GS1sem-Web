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

const toggleButton = document.getElementById('botaoDarkMode');
const body = document.body;
const nav = document.nav;
const footer = document.footer;
const header = document.header;



toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  nav.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
});
  

function validacaoLogin(){
    let emailUsuarioLogin = document.getElementById('emailUsuarioLogin').value 
    let senhaUsuarioLogin = document.getElementById('senhaUsuarioLogin').value 
    
    if (emailUsuarioLogin == "" || senhaUsuarioLogin == "" ){
        alert('Preencha todos campos antes de prosseguir')
    } else {
        alert("Bem-Vindo(a)!")
    }
}