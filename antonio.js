
/* CHECKBOX - EDAD */
var form_content = document.getElementById("form"); /* Me situo en el form del documento */
var input = document.createElement ("input"); /* creo un nodo input  */
var label = document.createElement ("label"); /* creo un nodo label  */
label.for = "rango_menor"; /* Doy el atributo for a label  */
form_content.appendChild(label); /* meto como hijo a label del form_content  */
label="Tengo menos de 18 años"; /*  Le doy un valor string a label */
input.type="checkbox"; /* introduzco los atributos  */
input.id="rango_menor"; 
input.name="rango_menor"; 
input.value="rango_menor"; 
form_content.appendChild(input); /*  pongo input como hijo de form_content */


var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "rango_veintena";
form_content.appendChild(label);
label="Tengo entre 18 y 30 años años";
input.type="checkbox";
input.id="rango_veintena";
input.name="rango_veintena";
input.value="rango_veintena";
form_content.appendChild(input);    


var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "rango_treintena";
form_content.appendChild(label);
label="Tengo entre 30 y 40 años";
input.type="checkbox";
input.id="rango_treintena";
input.name="rango_treintena";
input.value="rango_treintena";
form_content.appendChild(input);


var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "rango_centena";
form_content.appendChild(label);
label="Tengo más de 40 años";
input.type="checkbox";
input.id="rango_centena";
input.name="rango_centena";
input.value="rango_centena";
form_content.appendChild(input);

/*CHECKBOX - TIPO JUEGO */

var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "belico";
form_content.appendChild(label);
label="Bélico";
input.type="checkbox";
input.id="belico";
input.name="belico";
input.value="belico";
form_content.appendChild(input);

var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "accion";
form_content.appendChild(label);
label="Acción";
input.type="checkbox";
input.id="accion";
input.name="accion";
input.value="accion";
form_content.appendChild(input);

var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "plataforma";
form_content.appendChild(label);
label="Plataforma";
input.type="checkbox";
input.id="plataforma";
input.name="plataforma";
input.value="plataforma";
form_content.appendChild(input);

var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "deportivo";
form_content.appendChild(label);
label="Deportivo";
input.type="checkbox";
input.id="deportivo";
input.name="deportivo";
input.value="deportivo";
form_content.appendChild(input);

var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "arcade";
form_content.appendChild(label);
label="Arcade";
input.type="checkbox";
input.id="arcade";
input.name="arcade";
input.value="arcade";
form_content.appendChild(input);

var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "estrategia";
form_content.appendChild(label);
label="Estrategia";
input.type="checkbox";
input.id="estrategia";
input.name="estrategia";
input.value="estrategia";
form_content.appendChild(input);

/*CHECKBOX - INFO MAIL */

var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "mail_si";
form_content.appendChild(label);
label="Si, acepto recibir información";
input.type="checkbox";
input.id="mail_si";
input.name="mail_si";
input.value="mail_si";
form_content.appendChild(input);  

/*CHECKBOX TIPOS CONSOLA */


var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "uno";
form_content.appendChild(label);
label="Un tipo";
input.type="checkbox";
input.id="uno";
input.name="uno";
input.value="uno";
form_content.appendChild(input); 


var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "dos";
form_content.appendChild(label);
label="dos tipos";
input.type="checkbox";
input.id="dos";
input.name="dos";
input.value="dos";
form_content.appendChild(input); 



var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "tres_omas";
form_content.appendChild(label);
label="Tres o mas";
input.type="checkbox";
input.id="tres_omas";
input.name="tres_omas";
input.value="tres_omas";
form_content.appendChild(input); 

/*CHECKBOX - IDIOMAS*/



var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "español";
form_content.appendChild(label);
label="Español";
input.type="checkbox";
input.id="español";
input.name="español";
input.value="español";
form_content.appendChild(input); 



var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "ingles";
form_content.appendChild(label);
label="Inglés";
input.type="checkbox";
input.id="ingles";
input.name="ingles";
input.value="ingles";
form_content.appendChild(input); 



var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "frances";
form_content.appendChild(label);
label="Francés";
input.type="checkbox";
input.id="frances";
input.name="frances";
input.value="frances";
form_content.appendChild(input); 



var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "aleman";
form_content.appendChild(label);
label="Alemán";
input.type="checkbox";
input.id="aleman";
input.name="aleman";
input.value="aleman";
form_content.appendChild(input); 



var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "chino";
form_content.appendChild(label);
label="Chino";
input.type="checkbox";
input.id="chino";
input.name="chino";
input.value="chino";
form_content.appendChild(input); 



var input = document.createElement ("input");
var label = document.createElement ("label");
label.for = "ruso";
form_content.appendChild(label);
label="Ruso";
input.type="checkbox";
input.id="ruso";
input.name="ruso";
input.value="ruso";
form_content.appendChild(input); 

/* INSERTAR - IMAGENES */

const img = document.createElement ("img");
img.src= imgfirst;
imgfirst.alt="Logo_medad";
