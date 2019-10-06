var currency = document.getElementById("currency");
currency.addEventListener('change',function(e){
  if (e.target.value == " "){
    return;
  }
  const XHR = new XMLHttpRequest();
  var current_date = cdate.value.split("-").join("");
  var URI = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${e.target.value}&date=${current_date}&json`;
XHR.addEventListener("readystatechange",function(){
  if((XHR.readyState === 4) && (XHR.status === 200)){

    var result = JSON.parse(XHR.responseText);
    var fixed_result = result[0].rate.toFixed(2);
    data.innerHTML = `<h1>${fixed_result}</h1>`;
      }
  var create = document.getElementById("create_schedule");
create.addEventListener('click',function(e){
  ;
  },false);
    },false);
    XHR.open("GET", URI);
    XHR.send();
    },false);


Highcharts.chart('container', {
  chart: {
    type: 'areaspline'
  },
  title: {
    text: 'currency exchenge'
  },
  legend: {
    layout: 'vertical',
    align: 'left',
    verticalAlign: 'top',
    x: 150,
    y: 100,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
  },
  xAxis: {
    categories: [
      '0',
      '4',
      '8',
      '13',
      '18',
      '25',
      '30',

    ],
    plotBands: [{ // visualize the weekend
      from: 4.5,
      to: 6.5,
      color: 'rgba(68, 170, 213, .2)'
    }]
  },
  yAxis: {
    title: {
      text: 'грн.'
    }
  },
  tooltip: {
    shared: true,
    valueSuffix: 'грн.'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    areaspline: {
      fillOpacity: 0.5
    }
  },
  series: [{
    name: 'USD',
    data: [3, 4, 3, 5, 4, 10, 20]
  }, {
    name: 'EUR',
    data: [1, 3, 4, 3, 3, 25,]
  },{
    name: 'PLN',
    data: [1, 3, 4, 3, 3, 10,]
  }
          ]
});
