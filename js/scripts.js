const url = "https://script.google.com/macros/s/AKfycbxBkhNpiHwJWbeGzO_EPLiKIe8U1ufKCb95XV5oue0J9S9NLhmr9q-GePN_9Hp1EAIc/exec"; // URL do aplicativo da web

function callGoogleAppsScript(action) {
    fetch(`${url}?action=${action}`)
        .then(response => response.text())
        .then(data => {
            console.log(data); // Mensagem de retorno do script
            alert(data); // Mostra a mensagem ao usuário
            
            // Atualiza os estados dos switches com base na ação
            if (action === 'turn_on_all') {
                document.getElementById('switch1').checked = true;
                document.getElementById('switch2').checked = true;
            } else if (action === 'turn_off_all') {
                document.getElementById('switch1').checked = false;
                document.getElementById('switch2').checked = false;
            }
        })
        .catch(error => {
            console.error("Erro ao chamar o Google Apps Script:", error);
        });
}

// Evento para o switch 1
document.getElementById('switch1').addEventListener('change', (e) => {
    const action = e.target.checked ? 'turn_on_1' : 'turn_off_1';
    callGoogleAppsScript(action);
});

// Evento para o switch 2
document.getElementById('switch2').addEventListener('change', (e) => {
    const action = e.target.checked ? 'turn_on_2' : 'turn_off_2';
    callGoogleAppsScript(action);
});

// Evento para o botão de ligar todos
document.getElementById('turnOnAll').addEventListener('click', () => {
    callGoogleAppsScript('turn_on_all');
});

// Evento para o botão de desligar todos
document.getElementById('turnOffAll').addEventListener('click', () => {
    callGoogleAppsScript('turn_off_all');
});
