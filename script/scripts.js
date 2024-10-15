// Funções para manipular os interruptores
const switch1 = document.getElementById('switch1');
const switch2 = document.getElementById('switch2');

// Lógica para detectar mudanças individuais nos interruptores
switch1.addEventListener('change', (event) => {
    if (event.target.checked) {
        console.log('Interruptor 1 ligado');
    } else {
        console.log('Interruptor 1 desligado');
    }
});

switch2.addEventListener('change', (event) => {
    if (event.target.checked) {
        console.log('Interruptor 2 ligado');
    } else {
        console.log('Interruptor 2 desligado');
    }
});

// Botão "Ligar Tudo"
document.getElementById('btn-ligar-todos').addEventListener('click', () => {
    switch1.checked = true; // Ligar interruptor 1
    switch2.checked = true; // Ligar interruptor 2

    // Exibir mensagens de log
    console.log('Interruptor 1 ligado');
    console.log('Interruptor 2 ligado');
});

// Botão "Desligar Tudo"
document.getElementById('btn-desligar-todos').addEventListener('click', () => {
    switch1.checked = false; // Desligar interruptor 1
    switch2.checked = false; // Desligar interruptor 2

    // Exibir mensagens de log
    console.log('Interruptor 1 desligado');
    console.log('Interruptor 2 desligado');
});
