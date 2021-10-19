function crerarNodosHTML(){
    //variable en la que introduzco el HTML
    let textos = 
        "<label>Nombre:</label>"+
        "<input type='text' name='nombre' id='nombre'/><br>"+
        "<label>Dni:</label>"+
        "<input type='text' name='dni' id='dni'/><br>"+
        "<label>Apellidos:</label>"+
        "<input type='text' name='apellidos' id='apellidos'/><br>"+
        "<label>Telefono:</label>"+
        "<input type='tel' name='telefono' id='telefono'/><br>"+
        "<label>Opinion</label>"+
        "<textarea name='texto' id='texto'/>"
    //Añado el HTML creado en js al div de mi página
    div1.innerHTML = textos
}