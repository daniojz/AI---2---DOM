

var formulario = document.getElementById("form");/* obtengo el elemento form del documento */

añadirInputText();
añadirRadioButtom();
añadirCheckbox();
añadirEstilo();

function añadirInputText(){
    let div_datos_personales = document.createElement("div");
    div_datos_personales.id = "datos_personales_container";

    let textos = 
        "<div>"+
        "<label for='nombre'>Nombre:</label>"+
        "<input type='text' name='nombre' id='nombre'/>"+
        "</div>"+
        
        "<div>"+
        "<label for='dni'>Dni:</label>"+
        "<input type='text' name='dni' id='dni'/>"+
        "</div>"+

        "<div>"+
        "<label for='apellidos'>Apellidos:</label>"+
        "<input type='text' name='apellidos' id='apellidos'/>"+
        "</div>"+

        "<div>"+
        "<label for='telefono'>Telefono:</label>"+
        "<input type='tel' name='telefono' id='telefono'/>"+
        "</div>"+

        "<div>"+
        "<label for='texto'>Opinion general sobre Nintendo</label>"+
        "<textarea name='texto' id='texto'></textarea>"+
        "</div>"

    //Añado el HTML creado en js al div de mi página
    div_datos_personales.innerHTML = textos
    
    formulario.appendChild(div_datos_personales)
}

function añadirRadioButtom(){
    let div_tipo_videojuego = document.createElement("div");
    div_tipo_videojuego.id = "tipo_videojuego_container";

    let textos =
        "<h4>¿Que tipo videojuegos sueles jugar?</h4>"+
        "<div>"+
        "<label for='puzzle'>Puzzle:</label>"+
        "<input type='radio' name='puzzle' id='puzzle'/>"+
        "</div>"+

        "<div>"+
        "<label for='action'>Action:</label>"+
        "<input type='radio' name='action' id='action'/>"+
        "</div>"+

        "<div>"+
        "<label for='primera_persona'>Primera persona:</label>"+
        "<input type='radio' name='primera_persona' id='primera_persona'/>"+
        "</div>"+

        "<div>"+
        "<label for='deportes'>Deportes</label>"+
        "<input type='radio' name='deportes' id='deportes'/>"+ 
        "</div>"

    div_tipo_videojuego.innerHTML = textos
    
    formulario.appendChild(div_tipo_videojuego)
}

function añadirCheckbox(){

    let div_all_checkbox = document.createElement("div"); /*div que va a contener todos los checkbox*/
    div_all_checkbox.id=("all_checkbox")
    div_all_checkbox.className=("all_checkbox_container")

    let div_edad = document.createElement("div"); /*agrupado de checkbox en divs segun tematica, aquí van a ir los checkbox, en cada div*/
    let div_juego = document.createElement("div");
    let div_info_mail = document.createElement("div");
    let div_tipos_consola = document.createElement("div");
    let div_idioma = document.createElement("div");

    div_edad.id = "edad_checkbox_container";
    div_juego.id = "juego_checkbox_container";
    div_info_mail.id = "infoMail_checkbox_container";
    div_tipos_consola.id = "tiposConsola_checkbox_container";
    div_idioma.id = "idioma_checkbox_container";

    /*----H4----Titulo--de--cada--grupo--de--checkbox*/
    let h4;
    h4= document.createElement("h4");
    h4.appendChild(document.createTextNode("Edad:"));
    div_edad.appendChild(h4);

    h4= document.createElement("h4");
    h4.appendChild(document.createTextNode("Cuales de los siguientes generos son tus favoritos..."));
    div_juego.appendChild(h4);

    h4= document.createElement("h4");
    h4.appendChild(document.createTextNode("Tipos de consola:"));
    div_tipos_consola.appendChild(h4);

    h4= document.createElement("h4");
    h4.appendChild(document.createTextNode("Idiomas en los que juegas tus juegos:"));
    div_idioma.appendChild(h4);


    /*-----CHECKBOX-----*/
    let input; /*variables que se va utilizar para crear los elemntos*/
    let label;
    let label_t;
    let div;

        /* CHECKBOX - EDAD */
    div = document.createElement("div")
    input = document.createElement ("input"); /* creo un elemento input  */
    label = document.createElement ("label"); /* creo un elemento label  */
    label_t =document.createTextNode ("Tengo menos de 18 años"); /* Creo un nodo de texto para añadirlo al label */
    label.for = "rango_menor"; /* Doy el atributo for a label  */
    input.type="checkbox"; /* introduzco los atributos de input */
    input.id="rango_menor"; 
    input.name="rango_menor"; 
    input.value="rango_menor";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label); /*  pongo input como hijo de form_content */
    div_edad.appendChild(div); /* meto como hijo a label del form_content  */

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Tengo entre 18 y 30 años años"); 
    label.for="rango_veintena";
    input.type="checkbox";
    input.id="rango_veintena";
    input.name="rango_veintena";
    input.value="rango_veintena";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_edad.appendChild(div); 

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Tengo entre 30 y 40 años"); 
    label.for = "rango_treintena";
    input.type="checkbox";
    input.id="rango_treintena";
    input.name="rango_treintena";
    input.value="rango_treintena";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_edad.appendChild(div); 

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Tengo más de 40 años"); 
    input.type="checkbox";
    input.id="rango_centena";
    input.name="rango_centena";
    input.value="rango_centena";
    label.for = "rango_centena";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_edad.appendChild(div); 

    div_all_checkbox.appendChild(div_edad);

    /*CHECKBOX  TIPO JUEGO */
    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Bélico"); 
    label.for = "belico";
    input.type="checkbox";
    input.id="belico";
    input.name="belico";
    input.value="belico";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_juego.appendChild(div); 

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Acción"); 
    label.for = "accion";
    input.type="checkbox";
    input.id="accion";
    input.name="accion";
    input.value="accion";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_juego.appendChild(div); 

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Plataforma"); 
    label.for = "plataforma";
    input.type="checkbox";
    input.id="plataforma";
    input.name="plataforma";
    input.value="plataforma";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_juego.appendChild(div); 

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Deportivo"); 
    label.for = "deportivo";
    input.type="checkbox";
    input.id="deportivo";
    input.name="deportivo";
    input.value="deportivo";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_juego.appendChild(div); 

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Arcade"); 
    label.for = "arcade";
    input.type="checkbox";
    input.id="arcade";
    input.name="arcade";
    input.value="arcade";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_juego.appendChild(div); 

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Estrategia"); 
    label.for = "estrategia";
    input.type="checkbox";
    input.id="estrategia";
    input.name="estrategia";
    input.value="estrategia";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_juego.appendChild(div); 

    div_all_checkbox.appendChild(div_juego);

    /*CHECKBOX TIPOS CONSOLA */
    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Un tipo"); 
    label.for = "uno";
    input.type="checkbox";
    input.id="uno";
    input.name="uno";
    input.value="uno";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_tipos_consola.appendChild(div); 

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Dos tipos"); 
    label.for = "dos";
    input.type="checkbox";
    input.id="dos";
    input.name="dos";
    input.value="dos";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_tipos_consola.appendChild(div);

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Tres o más tipos"); 
    label.for = "tres_omas";
    input.type="checkbox";
    input.id="tres_omas";
    input.name="tres_omas";
    input.value="tres_omas";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_tipos_consola.appendChild(div);

    div_all_checkbox.appendChild(div_tipos_consola);

    /*CHECKBOX  IDIOMAS*/

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Español"); 
    label.for = "español";
    input.type="checkbox";
    input.id="español";
    input.name="español";
    input.value="español";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_idioma.appendChild(div);

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Inglés"); 
    label.for = "ingles";
    input.type="checkbox";
    input.id="ingles";
    input.name="ingles";
    input.value="ingles";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_idioma.appendChild(div);

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Francés"); 
    label.for = "frances";
    input.type="checkbox";
    input.id="frances";
    input.name="frances";
    input.value="frances";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_idioma.appendChild(div);

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Alemán"); 
    label.for = "aleman";
    input.type="checkbox";
    input.id="aleman";
    input.name="aleman";
    input.value="aleman";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_idioma.appendChild(div);

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Chino"); 
    label.for = "chino";
    input.type="checkbox";
    input.id="chino";
    input.name="chino";
    input.value="chino";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_idioma.appendChild(div);

    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Ruso"); 
    label.for = "ruso";
    input.type="checkbox";
    input.id="ruso";
    input.name="ruso";
    input.value="ruso";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_idioma.appendChild(div);

    div_all_checkbox.appendChild(div_idioma)

    /*CHECKBOX  INFO MAIL */
    div = document.createElement("div")
    input = document.createElement ("input");
    label = document.createElement ("label");
    label_t =document.createTextNode ("Si, acepto recibir información"); 
    label.for = "mail_si";
    input.type="checkbox";
    input.id="mail_si";
    input.name="mail_si";
    input.value="mail_si";
    label.appendChild(label_t);
    div.appendChild(input);
    div.appendChild(label);
    div_info_mail.appendChild(div);

    div_all_checkbox.appendChild(div_info_mail);

    
    
    /* INSERTAR  IMAGENES */
    // var img = document.createElement ("img");
    // img.src= imgfirst;
    // img.alt="Logo_medad";

    formulario.appendChild(div_all_checkbox) /* se añade el contenedor que contiene todos los checkbox al formulario*/
}


function añadirEstilo(){

    /*CONTENEDORES_DE_DATOS_PERSONALES_INPUT_TEXT*/
    var datos_personales_container = document.getElementById("datos_personales_container");
    var elementos_container = datos_personales_container.querySelectorAll("div");;

    elementos_container.forEach(elemento => {
        // if (elemento.type=="div") {
        //     elemento.classList.add('dato_personal')
        // }
        elemento.classList.add('dato_personal')
    });

    /*TIPOS_DE_JUEGOS_RADIO_BUTTOM*/
    var tipo_videojuego_container = document.getElementById("tipo_videojuego_container");
    var elementos_container = tipo_videojuego_container.querySelectorAll("div");;

    elementos_container.forEach(elemento => {
        elemento.classList.add('tipo_videojuego')
    });

    /*PREGUNTAS_CHECKBOX*/
    var all_checkbox_container = document.getElementById("all_checkbox");
    var elementos_container = all_checkbox_container.childNodes

    elementos_container.forEach(elemento => {
        elemento.classList.add('checkbox_container');
        
        (elemento.childNodes).forEach(elementoChild => {
            elementoChild.className=("checkbox_content");
            
                if(elementoChild.firstChild.id=="mail_si"){
                    elementoChild.parentElement.classList.add("mail_info"); /*clase especial, para quitar el borde*/
                    /*tambien prodia hacerlo así -> elemento.classList.add("mail_info") - refiriendome al elemento del bucle principal */
                }
        });
    });

    /*PREGUNTAS_CHECKBOX*/
    var all_checkbox_container = document.getElementById("all_checkbox");
    var elementos_container = all_checkbox_container.childNodes

    elementos_container.forEach(elemento => {
        elemento.classList.add('checkbox_content')
    });
}