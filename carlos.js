function tipoJuegos(){
    //variable en la que introduzco el HTML
    let textos =
        "<label for='puzzle'>Puzzle:</label>"+
        "<input type='radio' name='puzzle' id='puzzle'/>"+

        "<label for='action'>Action:</label>"+
        "<input type='radio' name='action' id='action'/>"+

        "<label for='primera_persona'>Primera persona:</label>"+
        "<input type='radio' name='primera_persona' id='primera_persona'/>"+

        "<label for='deportes'>Deportes</label>"+
        "<input type='radio' name='deportes' id='deportes'/>" 
    //Añado el HTML creado en js al div de mi página
    div2.innerHTML = textos
}