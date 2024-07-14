document.addEventListener("DOMContentLoaded", function() {
  const ctx = document.getElementById('workHoursChart').getContext('2d');

  // Дані для кожного місяця
  const workHoursData = {
    january: [10, 10, 10, 10, 10, 5, 10, 10, 10, 7, 0, 10, 10, 10, 10, 10, 8, 0, 7, 8, 10, 8, 7, 10, 6, 10, 7, 10, 6, 8],
    february: [8, 8, 8, 8, 8, 4, 8, 8, 8, 6, 0, 8, 8, 8, 8, 8, 6, 0, 5, 6, 8, 6, 5, 8, 4, 8, 5, 8],
    march: [7, 7, 7, 7, 7, 3, 7, 7, 7, 5, 0, 7, 7, 7, 7, 7, 5, 0, 4, 5, 7, 5, 4, 7, 3, 7, 4, 7, 5, 7, 6]
  };

  // Функція для оновлення графіку
  function updateChart() {
    const selectedMonth = document.getElementById('monthSelect').value;
    const workHours = workHoursData[selectedMonth];
    const totalWorkHours = workHours.reduce((total, hours) => total + hours, 0);
    document.getElementById('totalHours').innerText = totalWorkHours;

    workHoursChart.data.datasets[0].data = workHours;
    workHoursChart.data.labels = Array.from({ length: workHours.length }, (_, i) => (i + 1).toString());
    workHoursChart.update();
  }

  // Початкове налаштування графіку
  const workHoursChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: Array.from({ length: workHoursData.january.length }, (_, i) => (i + 1).toString()),
      datasets: [{
        label: 'Відпрацьовані години',
        data: workHoursData.january,
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Оновлення загальної кількості годин для початкового місяця
  updateChart();
});
