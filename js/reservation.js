document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
});

document.getElementById('reservationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Rezervace odeslána!');
});

  const timeSelect = document.getElementById("time");

  const startHour = 8;  
  const endHour = 21;  
  const stepMinutes = 30; 

  for (let hour = startHour; hour <= endHour; hour++) {
    for (let min = 0; min < 60; min += stepMinutes) {
      if (hour === endHour && min > 0) continue;

      const h = String(hour).padStart(2, '0');
      const m = String(min).padStart(2, '0');
      const timeStr = `${h}:${m}`;

      const option = document.createElement("option");
      option.value = timeStr;
      option.textContent = timeStr;
      timeSelect.appendChild(option);
    }
  }