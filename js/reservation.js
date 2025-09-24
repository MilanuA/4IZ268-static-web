document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
});

document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Rezervace odeslána!');
});