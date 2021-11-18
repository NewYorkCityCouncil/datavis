function randomValues(count, min, max) {
  const delta = max - min;
  return Array.from({length: count}).map(() => delta + min);
}

function randomBoxPlot1(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 27446,
    q1: 42124,
    median: 48666,
    q3: 58405,
    max: 153375
  };
}
function randomBoxPlot2(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 28506,
    q1: 46608,
    median: 57133,
    q3: 72712,
    max: 234096
  };
}
function randomBoxPlot3(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 27446,
    q1: 46737,
    median: 57387,
    q3: 78763,
    max: 236750
  };
}
function randomBoxPlot4(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 27186,
    q1: 42500,
    median: 48666,
    q3: 55192,
    max: 236750
  };
}
function randomBoxPlot5(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 30954,
    q1: 57064,
    median: 76582,
    q3: 96447,
    max: 236750
  };
}
function randomBoxPlot6(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 27186,
    q1: 53519,
    median: 78999,
    q3: 90373,
    max: 236750
  };
}


const boxplotData = {
  // define label tree
  labels: ['Under 30 Years','Over 60 Years','Citywide'],
  datasets: [{
    label: ['Female'],
    backgroundColor: '#A83226',
    borderColor: '#222222',
    borderWidth: 1,
    padding: 10,
    itemRadius: 1,
    outlierColor: '#999999',
    data: [
      randomBoxPlot1(0,50),
      randomBoxPlot2(0,50),
      randomBoxPlot3(0,50)
    ]
  },
  {
    label: ['Male'],
    backgroundColor: '#23417D',
    borderColor: '#222222',
    borderWidth: 1,
    padding: 10,
    itemRadius: 1,
    outlierColor: '#999999',
    data: [
      randomBoxPlot4(0,50),
      randomBoxPlot5(0,50),
      randomBoxPlot6(0,50)
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
        text: 'Age (Years)',
        position: 'bottom',
      },
      scales: {
        yAxes:[{
          ticks:{
            max: 160000,
            callback: function(value, index, values) {
              return '$' + value;
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
