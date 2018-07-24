var xdata = null;
var ydata = null;
var xlab = null;
var ylab = null;
//var graphtitle = null

$.getJSON('out.json', function(data) {
    xdata = data.x;
    console.log(xdata);
    ydata = data.y;
    xlab = data.xlab;
    ylab = data.ylab;
    //graphtitle = data.graphtitle;
    var trace1 = {
	x: xdata,
	y: ydata, 
	mode: 'markers'
};

var data = [ trace1 ];

var layout = {
  xaxis: {
    title: xlab
  },
  yaxis: {
    title: ylab
  },
  //title: graphtitle
};

Plotly.newPlot('myDiv', data, layout);
});


