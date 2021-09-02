function validate1Update() {
  var present1 = document.getElementById('present1');
  var price1 = document.getElementById('price1');
  var cant1 = document.getElementById('cant1');
  if (present1.checked) {
      price1.disabled = false;
      cant1.disabled = false;
  } else {
      price1.value = '';
      cant1.value = '';
      price1.disabled = true;
      cant1.disabled = true;
  }
}

function validate2Update() {
  var present2 = document.getElementById('present2');
  var price2 = document.getElementById('price2');
  var cant2 = document.getElementById('cant2');
  if (present2.checked) {
      price2.disabled = false;
      cant2.disabled = false;
  } else {
      price2.value = '';
      cant2.value = ''
      price2.disabled = true;
      cant2.disabled = true;
  }
}

function validate3Update() {
  var present3 = document.getElementById('present3');
  var price3 = document.getElementById('price3');
  var cant3 = document.getElementById('cant3');
  if (present3.checked) {
      price3.disabled = false;
      cant3.disabled = false;
  } else {
      price3.value = '';
      cant3.value = ''
      price3.disabled = true;
      cant3.disabled = true;
  }
}