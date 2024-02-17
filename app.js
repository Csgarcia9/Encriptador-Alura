//Para acceder al boton por un click para remover y poner el hidden

  let botonEncriptar = document.getElementById('encrypt-button');

  botonEncriptar.addEventListener('click', ()=>{
    
    let elemento = document.getElementById('Copy-button');
    elemento.removeAttribute('hidden');
    let imagenMuneco = document.getElementById('imagen-muneco');
    imagenMuneco.setAttribute('hidden',true);
    let titleBox = document.getElementById('title-box');
    titleBox.setAttribute('hidden',true);
    let instructionMessage = document.getElementById('instruction-message');
    instructionMessage.setAttribute('hidden',true);

    function reemplazarCaracteres(cadena){
      const reemplazos = {'e':'enter','i':'imes','a':'ai','o':'ober','u':'ufat'};
 
      //Aplicar el cambio de letras
 
      let nuevaCadena = cadena?.replace(/[aeiou]/g, function(match){
          return reemplazos[match];
      });
      return nuevaCadena;
 
  }

  // Tomo el texto a encriptar del textarea 
 
  let textoAencriptar = document.getElementById('text-message').value;

  // Le asigno la funcion de flecha una variable
  let resultText = reemplazarCaracteres(textoAencriptar);

  // Accedo al elemento parrafo para darle el valor del texto
  let parrafoResultado = document.getElementById('text-result');

  // Le paso el resultado de encriptar
  parrafoResultado.textContent = resultText;

  let textArea = document.getElementById('text-message');
  textArea.value = ''; // Clear the content of the text area

});


let botonDesencritar = document.getElementById('decrypt-button');

botonDesencritar.addEventListener('click', () => {
  function volverInicio(cadena) {
    const reemplazos = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };

    // Aplicar el cambio de letras

    let cadenaOriginal = cadena.replace(/enter|imes|ai|ober|ufat/g, function (match) {
      return reemplazos[match];
    });
    return cadenaOriginal;
  }

  let textEncrypt = document.getElementById('text-message').value;

  let textDescryp = volverInicio(textEncrypt);

  let parrafoDe = document.getElementById('text-result');

  parrafoDe.textContent = textDescryp;

  let textArea = document.getElementById('text-message');
  textArea.value = ''; // Clear the content of the text area
});




document.addEventListener('DOMContentLoaded', () => {
  const copyButton = document.getElementById('Copy-button');
  const textoEncriptado = document.getElementById('text-result');

  copyButton.addEventListener('click', () => {
    const textoCopiado = textoEncriptado.textContent;
    navigator.clipboard.writeText(textoCopiado)
      .then(() => {
        console.log("Texto copiado con éxito");
      })
      .catch(err => {
        console.error("Error al copiar el texto", err);
      });
  });
});


