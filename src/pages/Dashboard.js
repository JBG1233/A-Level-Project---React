import axios from "axios";

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
        suggestedMax: 7
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
        suggestedMax: 7
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

const dataOne = {
    labels,
    datasets: [{
      ...colors[0],
      borderWidth: 0,
      data: JSON.parse(localStorage.getItem('qRightLast7'))
    }]
  };


const dataTwo = {
  labels,
  datasets: [{
    data: JSON.parse(localStorage.getItem('qWrongLast7')),
    borderWidth: 0,
    ...colors[0],
  }]
}

const dataThree = {
  labels,
  datasets: [{
    label: 'Percent',
    type: 'line',
    data: JSON.parse(localStorage.getItem('percentageLast7')),
    borderWidth: 1,
    fill: false,
    ...colors[0],
    yAxisID: 'y-axis-1'
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
    ]
  }
};

const height = 200;

export default [
  {
    type: 'bar',
    title: 'Questions Answered Right',
    data: dataOne,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...stackedGridOptions
    }
  },
  {
    type: 'bar',
    title: 'Questions Answered Wrong',
    data: dataTwo,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...stackedGridOptions
    }
  },
  {
    type: 'bar',
    title: 'Percentage scored',
    data: dataThree,
    height: height,
    options: {
      ...sharedOptions,
      ...gridOptions,
      ...options
    }
  }
];
