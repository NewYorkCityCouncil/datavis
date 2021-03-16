function randomValues(count, min, max) {
  const delta = max - min;
  return Array.from({length: count}).map(() => delta + min);
}

function randomBoxPlot1(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 0,
    q1: 4,
    median: 11,
    q3: 18,
    max: 65
  };
}



const boxplotData = {
  // define label tree
  //labels: ['Years of Service'],
  datasets: [{
    label: ['Years of Service'],
    backgroundColor: ['#2F56A6'],
    borderColor: ['#23417D'],
    borderWidth: 1,
    padding: 10,
    itemRadius: 1,
    outlierColor: '#999999',
    data: [
      randomBoxPlot1(0,50),

    ]
  }
]
}

window.onload = () => {
  const ctx = document.getElementById("canvas").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: 'horizontalBoxplot',
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
        text: 'Years of Service',
        position: 'bottom',
      },
      scales: {
        yAxes:[{
      /*    ticks:{
          //  max: 160000,
            callback: function(value, index, values) {
              return '$'+value.toLocaleString('en-US');
            },
          },*/
          scaleLabel: {
            display: true,
            labelString: 'Employees'
          }
        }],
        xAxes:[{
          ticks:{
            max:40
          }
        }]
      }

    }
  });

};
