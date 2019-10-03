

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
    data.innerHTML = `<center><h2>${fixed_result}</h2></center>`;
      }
    },false);
    XHR.open("GET", URI);
    XHR.send();
    },false);
