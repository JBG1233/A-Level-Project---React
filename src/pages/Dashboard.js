const sharedOptions = {
  maintainAspectRatio: true,
  responsive: true,
  legend: {
    display: false
  }
};

const gridOptions = {
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(0,0,0,0.02)',
        zeroLineColor: 'rgba(0,0,0,0.02)'
      }
    }],
    yAxes: [{
      gridLines: {
        color: 'rgba(0,0,0,0.02)',
        zeroLineColor: 'rgba(0,0,0,0.02)'
      },
      position: 'left',
      ticks: {
        beginAtZero: true,
        suggestedMax: 9
      }
    }]
  }
}

const stackedGridOptions = {
  scales: {
    xAxes: [{
      gridLines: {
        color: 'rgba(0,0,0,0.02)',
        zeroLineColor: 'rgba(0,0,0,0.02)'
      },
      stacked: true,
    }],
    yAxes: [{
      gridLines: {
        color: 'rgba(0,0,0,0.02)',
        zeroLineColor: 'rgba(0,0,0,0.02)'
      },
      stacked: true,
      position: 'left',
      ticks: {
        beginAtZero: true,
        suggestedMax: 9
      }
    }]
  }
}

const colors = [{
  backgroundColor: '#7986cb',
  borderColor: '#3f51b5',
  pointBackgroundColor: '#3f51b5',
  pointBorderColor: '#fff'
}, {
  backgroundColor: '#eeeeee',
  borderColor: '#e0e0e0',
  pointBackgroundColor: '#e0e0e0',
  pointBorderColor: '#fff'
}, {
  backgroundColor: 'rgba(148,159,177,0.2)',
  borderColor: 'rgba(148,159,177,1)',
  pointBackgroundColor: 'rgba(148,159,177,1)',
  pointBorderColor: '#fff'
}];

const labels = ['1', '2', '3', '4', '5', '6', '7'];

const datasets = [{
  ...colors[0],
  borderWidth: 0,
  data: [6, 5, 8, 8, 5, 5, 4]
},
];

const data = {
  labels,
  datasets
};

const dataMixed = {
  labels,
  datasets: [{
    label: 'Sales',
    type: 'line',
    data: [6, 5, 8, 8, 5, 5, 4],
    borderWidth: 1,
    fill: false,
    ...colors[0],
    yAxisID: 'y-axis-2'
  }]
}

const options = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: false
    }
  },
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        display: false
      },
      labels,
    }],
    yAxes: [{
      type: 'linear',
      display: true,
      position: 'left',
      id: 'y-axis-1',
      gridLines: {
        display: false
      },
      labels: {
        show: true
      }
    },
      {
        type: 'linear',
        display: true,
        position: 'right',
        id: 'y-axis-2',
        gridLines: {
          display: false
        },
        labels: {
          show: true
        }
      }
    ]
  }
};

const dataBubble = {
  labels: ['January'],
  datasets: [{
    label: 'My First dataset',
    fill: true,
    lineTension: 0.1,
    ...colors[0],
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderWidth: 1,
    pointRadius: 1,
    pointHitRadius: 10,
    data: [{
      x: 6,
      y: 5,
      r: 15,
    }, {
      x: 5,
      y: 4,
      r: 10,
    }, {
      x: 8,
      y: 4,
      r: 6,
    }, {
      x: 8,
      y: 4,
      r: 6,
    }, {
      x: 5,
      y: 14,
      r: 14,
    }, {
      x: 5,
      y: 6,
      r: 8,
    }, {
      x: 4,
      y: 2,
      r: 10,
    }],
    borderWidth: 0.5
  }]
};

const height = 200;


export default [
  {
    type: 'bar',
    title: 'Questions Answered Right Leaderboard',
    data: data,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...stackedGridOptions
    }
  },
  {
    type: 'bar',
    title: 'Quizzes scored 100%',
    data: dataMixed,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...options
    }
  },
  {
    type: 'bubble',
    title: 'Quizzes taken',
    subtitle: '(number here)',
    data: dataBubble,
    height: height,
    options: {
      ...sharedOptions
    }
  }
];
