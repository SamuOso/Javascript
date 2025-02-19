let _name = prompt("Ingrese dos nombres separados por coma: ");
let _names = _name.split(",");
let _age=[];

_age[0] = prompt(_names[0]+" ingrese su edad: ");
_age[1] = prompt(_names[1]+" ingrese su edad: ");
let i = parseFloat(_age[0]) + parseFloat(_age[1]);
alert("El doble de la edad de "+_names[0]+"es de: "+(_age[0]*2));
alert("La suma de las dos edades es de:"+parseFloat(i));
alert("La resta de las dos edades es de:"+parseFloat(_age[0]-_age[1]));
alert("La multiplicacion de las dos edades es de:"+parseFloat(_age[0]*_age[1]));
alert("La divición de las dos edades es de:"+parseFloat(_age[0]/_age[1]));
alert("Gracias por participar");