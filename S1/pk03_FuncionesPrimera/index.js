// Creando dos function expressions
var funcionSaludar = function(name){
	console.log("Hola %s", name);
};

var funcionDespide = function(name){
	console.log("Adios %s", name);
};

// Creando una declaración de función
// Handler -> Manejador
// Manejador: es una funcion que procesa datos
function mensaje(name, handler){
	name = name.toUpperCase();
	handler(name);
};
//Invocar la función mensaje
mensaje("itgam", funcionSaludar);
mensaje("itgam", funcionDespide);
