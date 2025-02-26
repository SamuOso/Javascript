let _asklist = ["Ingrese su nombre", "Ingrese su edad", "Ingrese su genero M masculino F femenino"];
let _person = [];

for (let i = 0; i < _asklist.length; i++) {
    _person[i] = prompt(_asklist[i])
}
console.log(_person)

if (parseFloat(_person[1]) >= 18) {
    console.log(_person[0] + " ya puede votar en las proximas elecciones");
    if (_person[2].toUpperCase() == "M") {
        console.log(_person[0] + " Feliz dia del hombre y reclame un dulce al almuerzo");
    }
    
}
else {
    console.log(_person[0] + "Haga deporte y enfocate en tus metas")
}
if (_person[2].toUpperCase() == "F" && _person[1] > 16) {
    console.log(_person[0] + "has un proyecto claro en tu vida y las metas que deberia ir logrando paso a paso para alcanzarlo")
}
