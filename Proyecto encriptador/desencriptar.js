function desencriptar() {
    let codigo = ["ai", "enter", "imes", "ober", "ufat"];
    let letra = ["a", "e", "i", "o", "u"];

    let frase = document.getElementById('texto-input').value;  
    let frase2 = frase.split(" ");
    let frase3 = frase.slice();
    let n = 0;

    var x = document.getElementById("output-inicial");
    var y = document.getElementById("caja-output");

        //console.log(frase2);
    while (n<500){
          for (let i = 0; i < frase2.length; i++) {
            //console.log(frase2.length);
            for (let j=0; j < codigo.length; j++){
              //console.log(codigo.length);
              let indice = frase2[i].indexOf(codigo[j]);
                //console.log(indice);
                if (indice !== -1) {
                   frase3 = frase3.replace(codigo[i], letra[i]);
                      n++;
                } 
  
            } 
          }
    } document.getElementById("output").innerHTML = frase3;
      x.style.display = "none";
      y.style.display = "block";
  
  
  
}