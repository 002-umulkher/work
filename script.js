function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const location = document.getElementById('location').value;
    const message = document.getElementById('message').value;

    // Basic Validation
    if (!name || !location || !message) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    const myNumber = "254140863553";
    
    // Formatting the message for a professional look
    const text = `*PORTFOLIO INQUIRY*%0A%0A` +
                 `*Name:* ${name}%0A` +
                 `*Location:* ${location}%0A%0A` +
                 `*Message:* ${message}`;
    
    const whatsappURL = `https://wa.me/${myNumber}?text=${text}`;
    
    window.open(whatsappURL, '_blank');
}