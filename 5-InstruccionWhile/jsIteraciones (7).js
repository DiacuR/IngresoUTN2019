function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta=true;

while(respuesta){

	acumulador += parseInt(prompt("Ingrese un numero: "));
	respuesta = confirm("Quiere ingresar otro numero?");
	contador++;
}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN