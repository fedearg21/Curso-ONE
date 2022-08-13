function copiar() {

  var textoCopiado = document.getElementById("output");

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999);
  
  navigator.clipboard.writeText(textoCopiado.value);

}