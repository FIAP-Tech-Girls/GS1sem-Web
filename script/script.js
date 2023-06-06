const paraScrollar = document.getElementById('scroll');
const secaoAlvo = document.getElementById('conteudoHome');

paraScrollar.addEventListener('click', function() {
    secaoAlvo.scrollIntoView({ behavior: 'smooth', duration:1.8});
});

function trocar(cor){
    document.body.style.background = cor
}

function alertaBotaoLogin(){
    alert('Enviamos um e-mail para redefinir a senha.')
}


