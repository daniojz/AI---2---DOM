function tipoJuegos(){
    let textos =
        "<label for='puzzle'>Puzzle:</label>"+
        "<input type='radio' name='puzzle' id='puzzle'/>"+

        "<label for='action'>Action:</label>"+
        "<input type='radio' name='action' id='action'/>"+

        "<label for='primera_persona'>Primera persona:</label>"+
        "<input type='radio' name='primera_persona' id='primera_persona'/>"+

        "<label for='deportes'>Deportes</label>"+
        "<input type='radio' name='deportes' id='deportes'/>" 
    div2.innerHTML = textos
}
