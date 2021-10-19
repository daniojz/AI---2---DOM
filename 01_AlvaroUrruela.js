function crerarNodosHTML(){
    //variable en la que introduzco el HTML
    let textos = 
        "<p>Nombre:</p>"+
        "<input type='text' name='nombre' id='nombre'/>"+
        "<p>Dni:</p>"+
        "<input type='text' name='dni' id='dni'/>"+
        "<p>Apellidos:</p>"+
        "<input type='text' name='apellidos' id='apellidos'/>"+
        "<p>Telefono:</p>"+
        "<input type='tel' name='telefono' id='telefono'/>"+
        "<p></p>"+
        "<textarea name='texto' id='texto'/>"
    //Añado el HTML creado en js al div de mi página
    div1.innerHTML = textos
}