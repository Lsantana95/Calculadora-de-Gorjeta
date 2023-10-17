const total = document.getElementById('total');
const percentual = document.querySelectorAll('.btn-calc');
const QtdPessoas = document.getElementById('pessoa');
const resetar = document.getElementById('reset');


function percent(e) {
  e.preventDefault();
  totalConta = parseFloat(total.value);
  totalPessoa = QtdPessoas.value;

  recuperado = e.target.innerHTML;
  valorPercentual = parseFloat(recuperado.replace(',', '.'));

  calculoTotal(totalConta, valorPercentual, totalPessoa);
}
percentual.forEach(function listar(e) {
  e.addEventListener('click', percent);
});

function calculoTotal(total, percentual, qtdPessoas) {
  divisao = total / qtdPessoas;
  resultado = divisao * percentual / 100;

  valorTotal.innerHTML = `R$ ${total.toFixed(2)}`;
  valorPessoa.innerHTML = `R$ ${resultado.toFixed(2)}`;
}

function resete(e) {
  e.preventDefault();
  total.value = '';
  QtdPessoas.value = ''; 
  valorTotal.innerHTML = "R$ 0.00";
  valorPessoa.innerHTML = "R$ 0.00";
}

resetar.addEventListener('click', resete);