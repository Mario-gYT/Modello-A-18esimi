// Imposta la data di destinazione: 23 Gennaio 2026, ore 21:00
// Mese è 0-based (0=Gennaio)
const destinationDate = new Date("Jan 23, 2026 21:00:00").getTime();

const countdownElement = document.getElementById("countdown");

function updateCountdown() {
    // Verifica che l'elemento del countdown esista prima di procedere
    if (!countdownElement) {
        // Se non trova l'elemento, ferma la funzione per evitare errori
        return; 
    }
    
    const now = new Date().getTime();
    const distance = destinationDate - now;

    // Se la data è passata
    if (distance < 0) {
        countdownElement.innerHTML = "LA FESTA È INIZIATA!";
        return;
    }

    // Calcoli (I mesi sono una stima)
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;
    const avgMsInMonth = msInDay * 30.4375; // Media giorni in un mese

    const months = Math.floor(distance / avgMsInMonth);
    const days = Math.floor((distance % avgMsInMonth) / msInDay);
    const hours = Math.floor((distance % msInDay) / msInHour);
    const minutes = Math.floor((distance % msInHour) / msInMinute);
    const seconds = Math.floor((distance % msInMinute) / msInSecond);
    
    // Costruisce la stringa di output
    countdownElement.innerHTML = 
        `<span class="time-value">${months}</span> Mesi | ` + 
        `<span class="time-value">${days}</span> Giorni | ` +
        `<span class="time-value">${hours}</span> Ore | ` +
        `<span class="time-value">${minutes}</span> Min | ` +
        `<span class="time-value">${seconds}</span> Sec`;
}

// Aggiorna il conto alla rovescia ogni secondo
updateCountdown();
// Imposta l'aggiornamento ogni 1000ms (1 secondo)
setInterval(updateCountdown, 1000);
