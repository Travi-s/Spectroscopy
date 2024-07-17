var layout = {
  title: {
    text:'Plot Title',
    font: {
      family: 'Courier New, monospace',
      size: 24
    },
    xref: 'paper',
    x: 0.05,
  },
  paper_bgcolor: "orange",
  xaxis: {
    title: {
      text: 'x Axis Line',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    },
  },
  yaxis: {
    title: {
      text: 'y Axis Line',
      font: {
        family: 'Courier New, monospace',
        size: 18,
        color: '#7f7f7f'
      }
    }
  }
};

TESTER = document.getElementById("tester");
Plotly.newPlot(
  TESTER,
  [
    {
      x: ['red', 'green', 'orange', 'yellow', 'purple'],
      y: [1, 2, 4, 8, 16],
    type: 'bar'
    }
  ],
  layout
);
const button = document.querySelector('#linkBtn');

button.addEventListener('click', function() {
  window.open('https://youtu.be/dQw4w9WgXcQ', '_blank');
  alert('I lied.')
})
