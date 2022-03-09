function ConverterReal() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmReal = valorEmDolarNumerico * 5;
  
    console.log(valorEmReal);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterEuros() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmEuros = valorEmDolarNumerico * 0.92;
    var valorFinal = valorEmEuros.toFixed(2);
  
    console.log(valorEmEuros);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Euro é €" + valorFinal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function ConverterBitcoin() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
    var valorEmBitcoin = valorEmDolarNumerico * 0.000026;
    var valorFinal = valorEmBitcoin.toFixed(3);
  
    console.log(valorEmBitcoin);
  
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em Bitcoin é ₿ " + valorFinal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  