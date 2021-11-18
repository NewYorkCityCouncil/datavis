function randomValues(count, min, max) {
  const delta = max - min;
  return Array.from({length: count}).map(() => delta + min);
}

function randomBoxPlot1(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 27446,
    q1: 42799,
    median: 51972.5,
    q3: 62834,
    max: 192946
  };
}
function randomBoxPlot2(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 29842,
    q1: 59401,
    median: 85292,
    q3: 93000,
    max: 143271
  };
}


const boxplotData = {
  // define label tree
  labels: ['Women','Men'],
  datasets: [{
    label: ['Under 30 Years'],
    backgroundColor: ['#A83226','#23417D'],
    borderColor: '#222222',
    borderWidth: 1,
    padding: 10,
    itemRadius: 1,
    outlierColor: '#999999',
    data: [
      randomBoxPlot1(0,50),
      randomBoxPlot2(0,50),
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
    //    position: 'top',
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
