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


    // Boton de copiado del texto
    
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


/*Para la logica de encriptrar todo*/ 
 
/*

function reemplazarCaracteres(cadena){
    const reemplazos = {'e':'enter','i':'imes','a':'ai','o':'ober','u':'ufat'};

    //Aplicar el cambio de letras

    let nuevaCadena = cadena.replace(/[aeiou]/g, function(match){
        return reemplazos[match];
    });
    return nuevaCadena;
}

function volverInicio(cadena){
    const reemplazos = {'enter':'e','imes':'i','ai':'a','ober':'o','ufat':'u'};

    //Aplicar el cambio de letras

    let cadenaOriginal = cadena.replace(/[enterimesaioberufat]/g, function(match){
        return reemplazos[match];
    });
    return cadenaOriginal;
}

let cadenaOriginal = prompt('Digite una cadena, solo minusculas sin acentos:');
let nuevaCadena = reemplazarCaracteres(cadenaOriginal);
alert(`La cadena nueva es ${nuevaCadena}.`);

cadenados = volverInicio(nuevaCadena);
alert(`La cadena inicial es ${cadenados}.`);


*/