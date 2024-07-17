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
 var trace1 = {
      x: ['blue470',
          'cyan525',
          'green560',
          'yellow585',
          'orange600',
          'red645',
          'deepred700',
          'IR1735',
          'IR12810',
          'IR3880',
          'IR4940'],
      y: ['26.55%',
          '13.74%',
          '15.41%',
          '15.45%',
          '16.49%',
          '37.88%',
          '61.39%',
          '62.40%',
          '90.15%',
          '98.34%',
          '101.97%'],
      type: 'bar'
    };

    var data = [trace1];

    var layout = {
        title: 'Reflectance',
        width: 570,
        height: 430,
        autosize: false,
        xaxis: {
            title: 'Wavelength (nm)'
        },
        yaxis: {
            title: 'Reflectance (%)',
            automargin: true
        },
        margin: { l: 0 }, // Adjust the top margin (you can also set l, r, and b for left, right, and bottom margins)
    };

    Plotly.newPlot('tester', data, layout);
const button = document.querySelector('#linkBtn');

button.addEventListener('click', function() {
  window.open('https://youtu.be/dQw4w9WgXcQ', '_blank');
  alert('I lied.')
})
