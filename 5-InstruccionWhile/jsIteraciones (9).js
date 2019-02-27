function Mostrar()
{

	var numero;
	var max;
	var min;
	var contador = 0;
	// declarar variables
	
	var respuesta=true;

	while(respuesta!=false)
	{
		numero = parseInt(prompt("Ingrse un numero"));

		if(contador == 0){
			max = numero;
			min = numero;
		}

		if(numero > max){
			max = numero;
		}
		if(numero < min){
			min = numero;
		}
		contador ++;
		respuesta = confirm("Desea seguir agregando numeros?");
	
	}

	document.getElementById("maximo").value = max;
	document.getElementById("minimo").value = min;
}//FIN DE LA FUNCIÓN