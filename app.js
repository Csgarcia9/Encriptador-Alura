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


    // Aqui agrega la funcion de encriptar el texto
    const otraFuncion = () =>{
    alert('Cambios agregados');
}
otraFuncion(); 
});
