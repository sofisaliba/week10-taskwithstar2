

function showTotalPrice() {
    let quantity = 2;
    let price = 15000000;
    let result = quantity * price;
    let formattedResult = result.toLocaleString('ru-RU');
    document.getElementById('text').textContent = "Стоимость покупки: " + formattedResult + " рублей";
  }