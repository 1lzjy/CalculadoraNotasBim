function Calcular() {
  //variavel Ad
  var ValorElementoAD = document.getElementById("NotaAD");
  var valorAD = ValorElementoAD.value;
  var valorNumericoAD = parseFloat(valorAD);
  //variavel Simulado
  var ValorElementoS = document.getElementById("NotaS");
  var valorS = ValorElementoS.value;
  var valorNumericoS = parseFloat(valorS);
  //variavel Ab
  var ValorElementoAB = document.getElementById("NotaAB");
  var valorAB = ValorElementoAB.value;
  var valorNumericoAB = parseFloat(valorAB);
  //variavel Formativo
  var ValorElementoF = document.getElementById("NotaF");
  var valorF = ValorElementoF.value;
  var valorNumericoF = parseFloat(valorF);

  //variavel media bimestral
  var MB =
    (valorNumericoAD + valorNumericoS + valorNumericoAB + valorNumericoF) / 2;
  var MBF = MB.toFixed(2);
  //variavel mensagem media anual
  var elementoMB = document.getElementById("MediaB");
  var MB = "Média Bimestral arredonda = " + MBF;
  elementoMB.innerHTML = MB;
  //varial mensagem Status
  if (MBF > 6.99) {
    var elementoStatus = document.getElementById("Status");
    var Status = "Status = APROVADO";
    elementoStatus.innerHTML = Status;
  } else {
    var elementoStatus = document.getElementById("Status");
    var Status = "Status = REPROVADO";
    elementoStatus.innerHTML = Status;
  }
}