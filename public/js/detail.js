function validate1Detalle() {
    var present1 = document.getElementById('present1');
    var price1 = document.getElementById('price1');
    var present2 = document.getElementById('present2');
    var price2 = document.getElementById('price2');
    var present3 = document.getElementById('present3');
    var price3 = document.getElementById('price3');
    if (present1.checked) {
        price1.disabled = true;
        price1.style.display = 'block';
        price1.style.color = 'black';
        price2.style.display = 'none';
        price3.style.display = 'none';
        present2.disabled = true;
        present3.disabled = true;
    } else {
        price1.style.display = 'none';
        price2.style.display = 'none';
        price3.style.display = 'none';
        present2.disabled = false;
        present3.disabled = false;
    }
}

function validate2Detalle() {
    var present1 = document.getElementById('present1');
    var price1 = document.getElementById('price1');
    var present2 = document.getElementById('present2');
    var price2 = document.getElementById('price2');
    var present3 = document.getElementById('present3');
    var price3 = document.getElementById('price3');
    if (present2.checked) {
        price2.disabled = true;
        price2.style.display = 'block';
        price2.style.color = 'black';
        price1.style.display = 'none';
        price3.style.display = 'none';
        present1.disabled = true;
        present3.disabled = true;
    } else {
        price1.style.display = 'none';
        price2.style.display = 'none';
        price3.style.display = 'none';
        present1.disabled = false;
        present3.disabled = false;
    }
}

function validate3Detalle() {
    var present1 = document.getElementById('present1');
    var price1 = document.getElementById('price1');
    var present2 = document.getElementById('present2');
    var price2 = document.getElementById('price2');
    var present3 = document.getElementById('present3');
    var price3 = document.getElementById('price3');
    if (present3.checked) {
        price3.disabled = true;
        price3.style.display = 'block';
        price3.style.color = 'black';
        price2.style.display = 'none';
        price1.style.display = 'none';
        present1.disabled = true;
        present2.disabled = true;
    } else {
        price1.style.display = 'none';
        price2.style.display = 'none';
        price3.style.display = 'none';
        present1.disabled = false;
        present2.disabled = false;
    }
}