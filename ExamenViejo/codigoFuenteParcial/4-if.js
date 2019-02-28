//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var nro1 = parseInt(prompt("Ingrese el primer numero"));
    var nro2 = parseInt(prompt("Ingrese el segundo numero"));

	if(isNaN(nro1) || isNaN(nro2)){
        alert("Los valores ingresados son erroneos");
    }else if(nro1 == nro2){
        var mult = nro1 * nro2;
        document.write("La multipicacion es de: " + mult);
    }else if(nro1 > nro2){
        resta = nro1 - nro2;
        document.write("La resta es de: " + resta);
    }else{
        var suma = nro1 + nro2;
        document.write("La suma es de: " + suma);
    }

}

