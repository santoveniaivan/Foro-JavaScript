
"use strict"



let comentarios = ['Alicia: Bienvenidos al foro de nuevo, ¿os esta pareciendo entretenido la informacion que estais leyendo?',
'Paco: Pues hacia mucho que no entraba, parece que han cambiado bastantes cosas...',
'Alicia: Si hemos implementado bastantes funciones que cambian la pagina por completo.',
'Paco: La pagina se ve con un diseño nuevo e increible, ¡me gusta!',
'Alicia: Encantada de que te guste el nuevo formato que tiene.'];



function añadirArray(){
    let usuario = document.getElementById('usuario').value;
    let mensaje = document.getElementById('mensaje').value;
    comentarios.push(usuario + ": " + mensaje);
    mostrarArray();
}

function mostrarArray(){
  let texto = "";
  for (let i = 0; i < comentarios.length;i++){
    texto = texto + comentarios[i] + "<br/>";

  }
  document.getElementById('texto').innerHTML = texto;

}

document.getElementById('enviar').addEventListener('click', añadirArray);











