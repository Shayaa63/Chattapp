const meddelandeInput = document.getElementById('meddelande-input');
const skickaKnapp = document.getElementById('skicka-knapp');
const meddelanden = document.getElementById('meddelanden').querySelector('ul');

skickaKnapp.addEventListener('click', function() {
    const meddelande = meddelandeInput.value;   
    if (meddelande.trim() !== '') {
        const nyttMeddelande = document.createElement('li');
        nyttMeddelande.textContent = meddelande;         
        meddelanden.appendChild(nyttMeddelande);
        meddelandeInput.value = '';
        meddelanden.scrollTop = meddelanden.scrollHeight; // Scrolla ner till det senaste meddelandet
    }
});

meddelandeInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        skickaKnapp.click();
    }
});