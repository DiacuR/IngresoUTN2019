function Mostrar()
{	
	var positivo=0;
	var negativo=1;
	var contador=0;
	var respuesta=true;
	var numero = 0;
	
	while(respuesta){
		 numero = parseInt(prompt("Ingrese un nuemro: "));
			if(numero > 0){
				positivo += numero;
			}else{
				negativo *= numero;
			}
			numero = 0;
		respuesta = confirm("Desea ingresar otro numero?");
	}
	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN