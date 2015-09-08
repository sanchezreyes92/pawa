//Este codigo ejecuta sin problemas
//debido a que la function declaration
//es cargada antes de que cualquier
//otro codigo cargue, por lo tanto
//carga antes de que saluda sea invocada
//por primera vez
function saluda(name){
	console.log("Hola " + name);
};
saluda("Jonathan");
//Este codigo marca error debido a que solo
//podemos usar la function expression despide
//despues de haberla creado

var despide = function(name){
	console.log("Adios "+ name);
};
despide("Ivan");