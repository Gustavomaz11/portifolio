const rafoto = document.querySelector('.rafoto');
const nomeContato = document.querySelector('#name');
const emailContato = document.querySelector('#email');
const mensagem = document.querySelector('#message');
const enviarMsg = document.querySelector('#submit');
const meuContato = '+5579996701239';

enviarMsg.addEventListener('click', () => {
    const nome = nomeContato.value;
    const msg = mensagem.value;

    const url = `https://wa.me/${meuContato}?text=Oi%20me%20chamo%20${encodeURIComponent(nome)},%20${encodeURIComponent(msg)}`;

    window.open(url, '_blank');
});

rafoto.addEventListener('click', (e) => {
    e.preventDefault();
    alert('Site em Desenvolvimento');
    return;
});


