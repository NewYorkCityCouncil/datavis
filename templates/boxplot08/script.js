function randomValues(count, min, max) {
  const delta = max - min;
  return Array.from({length: count}).map(() => delta + min);
}

function randomBoxPlot1(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 43042,
    q1: 48371,
    median: 85292,
    q3: 85292,
    max: 229449
  };
}
function randomBoxPlot2(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 37630,
    q1: 50173,
    median: 77318,
    q3: 77318,
    max: 233829
  };
}
function randomBoxPlot3(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 32520,
    q1: 50604,
    median: 85292,
    q3: 85292,
    max: 235139
  };
}
function randomBoxPlot4(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 42500,
    q1: 63125,
    median: 85292,
    q3: 97324,
    max: 233506
  };
}
function randomBoxPlot5(min, max) {
  const values = randomValues(5, min, max).sort((a, b) => a - b);

  return {
    min: 27186,
    q1: 46737,
    median: 60248,
    q3: 79936,
    max: 236750
  };
}


const boxplotData = {
  // define label tree
  labels: ['DOC','DSNY','FDNY','NYPD','Non-Uniformed'
],
  datasets: [{
    label: ['City Agencies'],
    backgroundColor: ['#2F56A6','#2F56A6','#2F56A6','#2F56A6','#666666'],
    borderColor: '#222222',
    borderWidth: 1,
    padding: 10,
    itemRadius: 1,
    outlierColor: '#999999',
    data: [
      randomBoxPlot1(0,50),
      randomBoxPlot2(0,50),
      randomBoxPlot3(0,50),
      randomBoxPlot4(0,50),
      randomBoxPlot5(0,50)
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
      responsive: true,
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Employees',
        position: 'bottom',
      }
    }
  });

};
