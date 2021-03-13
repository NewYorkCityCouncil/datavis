function randomValues(count, min, max) {
  const delta = max - min;
  return Array.from({length: count}).map(() => delta + min);
}

function randomBoxPlot(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 18,
    q1: 34,
    median: 42,
    q3: 52,
    max: 92
  };
}


const boxplotData = {
  // define label tree
  labels: ['Workers'],
  datasets: [{
    label: 'Workers',
    backgroundColor: '#2F56A6',
    borderColor: '#23417D',
    borderWidth: 1,
    outlierColor: '#999999',
    padding: 10,
    itemRadius: 0,
    outlierColor: '#999999',
    data: [
      randomBoxPlot(0, 100)
    ]
  }]
}

window.onload = () => {
  const ctx = document.getElementById("canvas").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: 'horizontalBoxplot',
    data: boxplotData,
    options: {
      responsive: true,
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Age (Years)',
        position: 'bottom',
      },
      scales: {
        xAxes: [{
          ticks: {
            min: 10,
            max: 90,
          }
        }]
    }
  }
});

};
