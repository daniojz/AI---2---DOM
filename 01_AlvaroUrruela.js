function crerarNodosHTML(){
    //variable en la que introduzco el HTML
    let textos = 
        "<label for='nombre'>Nombre:</label>"+
        "<input type='text' name='nombre' id='nombre'/><br>"+
        "<label for='dni'>Dni:</label>"+
        "<input type='text' name='dni' id='dni'/><br>"+
        "<label for='apellidos'>Apellidos:</label>"+
        "<input type='text' name='apellidos' id='apellidos'/><br>"+
        "<label for='telefono'>Telefono:</label>"+
        "<input type='tel' name='telefono' id='telefono'/><br>"+
        "<label for='texto'>Opinion</label>"+
        "<textarea name='texto' id='texto'/>"
    //Añado el HTML creado en js al div de mi página
    div1.innerHTML = textos
}
