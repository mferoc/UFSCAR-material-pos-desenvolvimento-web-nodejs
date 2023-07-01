function onMouseEnterBtnComprar(event) {
  event.target.classList.add('destacado');
}

function onMouseLeaveBtnComprar(event) {
  event.target.classList.remove('destacado');
}

function onClickBtnComprar(carro) {
  if (confirm(`Confirma a compra do carro ${carro}?`)) {
    window.location = 'https://www.google.com';
  }
}

function buscarCurrency() {
  const currency = document.getElementById('currency').value;
  fetch(`https://open.er-api.com/v6/latest/${currency}`)
    .then(function (resp) {
      return resp.json();
    })
    .then(function (dados) {
      console.log(dados)
      document.getElementById('resultado').innerText = dados['rates'].BRL;
    })
    .catch(function (err) {
      console.error(err);
      document.getElementById('resultado').innerText = `Não foi possível carregar: ${err.message}`;
    });
}
