
// Dummy GPS simulator
document.getElementById("gpsLocation").innerText = "Lat: 18.5204, Lon: 73.8567";

// Chart.js graphs
const phChart = new Chart(document.getElementById('phChart'), {
  type: 'line',
  data: {
    labels: ['T1', 'T2', 'T3', 'T4', 'Now'],
    datasets: [{
      label: 'pH Level',
      data: [6.5, 6.7, 6.8, 7.0, 6.9],
      borderColor: '#36a2eb',
      fill: false
    }]
  },
  options: {
    responsive: true
  }
});

const moistureChart = new Chart(document.getElementById('moistureChart'), {
  type: 'line',
  data: {
    labels: ['T1', 'T2', 'T3', 'T4', 'Now'],
    datasets: [{
      label: 'Moisture %',
      data: [40, 45, 48, 50, 52],
      borderColor: '#4caf50',
      fill: false
    }]
  },
  options: {
    responsive: true
  }
});

// Dark mode toggle
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
