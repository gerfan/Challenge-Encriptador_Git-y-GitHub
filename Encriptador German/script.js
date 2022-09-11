// Programa encriptador .... Js

// Puntos a tener en cuenta : " eliminar posibles errores "
 
 /* 1- que el input No permita ingresar Numeros, y caracteres especiales
    2- que No permita entradas de letras Mayusculas
    3- Posible solucion utilizar solamente abecedario letras minusculas,
       crear un condicional dento de la funcion {o} bien encontrar la manera de reconocer 
       la entrada en el input Texto */


const inputTexto = document.querySelector(".entradaTexto");
const mensaje = document.querySelector(".mensaje");
const adv = document.querySelector(".advertencia");
const copiar = document.querySelector(".btnCopiar");

copiar.style.display = "none"

// Boton Encriptar mensaje

function btnCript() {
  const textoEncriptado = cript(inputTexto.value)
  mensaje.value = textoEncriptado
  mensaje.style.backgroundImage="none"
  adv.style.display= "none"
  inputTexto.value = ""
  copiar.style.display = "block"

}

function cript(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase(); // ESYA LINEA DE CODIGO CONVIERTE EL STRING EN MINUSCULAS

  for(let i=0; i < matrizCodigo.length; i++) {
      if(stringEncriptada.includes(matrizCodigo[i][0])) {
          stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
      }                
  }
  return stringEncriptada;
  
}


// Boton Desencriptar mensaje

function btnDscript() {
  const textoEncriptado = dsCript(inputTexto.value)
  mensaje.value = textoEncriptado
  inputTexto.value = ""  
}

function dsCript(stringDesencriptada) {
  let matrizCodigo = [ ["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();// ESYA LINEA DE CODIGO CONVIERTE EL STRING EN MINUSCULAS

  for(let i=0; i < matrizCodigo.length; i++) {
      if(stringDesencriptada.includes(matrizCodigo[i][1])) {
          stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
      }
  }

  return stringDesencriptada;
}


// Boton copiar

function copiarJS() {
  mensaje.select;
  mensaje.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(mensaje.value);
  mensaje.value = "";
  alert("Texto copiado");
}
