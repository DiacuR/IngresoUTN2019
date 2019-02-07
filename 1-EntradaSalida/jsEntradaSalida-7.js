/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 


function sumar()
{	
    var primerNumero = document.getElementById("x").value;
    var segundoNumero = document.getElementById("y").value;
	 var total = parseInt(primerNumero) + parseInt(segundoNumero);

     alert("El resultado es "+ total);
}

function restar()
{
    var primerNumero = document.getElementById("x").value;
    var segundoNumero = document.getElementById("y").value;
	var total = parseInt(primerNumero) - parseInt(segundoNumero);

     alert("El resultado es: "+ total);
}

function multiplicar()
{ 
    var primerNumero = document.getElementById("x").value;
    var segundoNumero = document.getElementById("y").value;
	var total = parseInt(primerNumero) * parseInt(segundoNumero);

     alert("El resultado es "+ total);
}

function dividir()
{
    var primerNumero = document.getElementById("x").value;
    var segundoNumero = document.getElementById("y").value;
	var total = parseInt(primerNumero) / parseInt(segundoNumero);

     alert("El resultado es "+ total);
}

