function randomValues(count, min, max) {
  const delta = max - min;
  return Array.from({length: count}).map(() => Math.random() * delta + min);
}

const boxplotData = {
  // define label tree
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Dataset 1',
    backgroundColor: 'rgba(255,0,0,0.5)',
    borderColor: 'red',
    borderWidth: 1,
    outlierColor: '#999999',
    padding: 10,
    itemRadius: 0,
    data: [
      randomValues(100, 0, 100),
      randomValues(100, 0, 20),
      randomValues(100, 20, 70),
      randomValues(100, 60, 100),
      randomValues(40, 50, 100),
      randomValues(100, 60, 120),
      randomValues(100, 80, 100)
    ]
  }, {
    label: 'Dataset 2',
    backgroundColor:  'rgba(0,0,255,0.5)',
    borderColor: 'blue',
    borderWidth: 1,
    outlierColor: '#999999',
    padding: 10,
    itemRadius: 0,
    data: [
      randomValues(100, 60, 100),
      randomValues(100, 0, 100),
      randomValues(100, 0, 20),
      randomValues(100, 20, 70),
      randomValues(40, 60, 120),
      randomValues(100, 20, 100),
      randomValues(100, 80, 100)
    ]
  }]
};
window.onload = () => {
  const ctx = document.getElementById("canvas").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: 'boxplot',
    data: boxplotData,
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Box Plot Chart'
      }
    }
  });

};