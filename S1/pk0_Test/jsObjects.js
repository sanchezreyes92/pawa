var estudiante={
nombre:"jonathan",
apellido1:"Sanchez ",
apellido2:"Reyes",
imprimirNombre:function(){
  console.log(this.nombre+
    " "+this.apellido1+
    " "+this.apellido2);
  }
};
estudiante.imprimirNombre()