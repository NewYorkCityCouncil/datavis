function randomValues(count, min, max) {
  const delta = max - min;
  return Array.from({length: count}).map(() => delta + min);
}

function randomBoxPlot1(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 27186,
    q1: 42500,
    median: 48666,
    q3: 57070,
    max: 153375
  };
}
function randomBoxPlot2(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 28506,
    q1: 48475,
    median: 63929,
    q3: 85292,
    max: 234096
  };
}
function randomBoxPlot3(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 27186,
    q1: 48666,
    median: 67792,
    q3: 85292,
    max: 236750
  };
}


const boxplotData = {
  // define label tree
  labels: ['Under 30 Years','Over 60 Years','Citywide'],
  datasets: [{
    label: ['Under 30 Years'],
    backgroundColor: ['#2F56A6','#23417D','#666666'],
    borderColor: ['#23417D','#2F56A6','#222222'],
    borderWidth: 1,
    padding: 10,
    itemRadius: 1,
    outlierColor: '#999999',
    data: [
      randomBoxPlot1(0,50),
      randomBoxPlot2(0,50),
      randomBoxPlot3(0,50)
    ]
  }
]
}

window.onload = () => {
  const ctx = document.getElementById("canvas").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: 'boxplot',
    data: boxplotData,
    options: {
      cornerRadius: 20,
      responsive: true,
      legend: {
        display: false,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Employees',
        position: 'bottom',
      },
      scales: {
        yAxes:[{
          ticks:{
            max: 160000,
            callback: function(value, index, values) {
              return '$'+value.toLocaleString('en-US');
            },
          },
          scaleLabel: {
            display: true,
            labelString: 'Base Salary'
          }
        }]
      }

    }
  });

};
