/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;

sueldo = parseInt(document.getElementById("sueldo").value);

var aumento = (10*sueldo)/100;

aumento = parseInt(aumento);

var total = aumento + sueldo

var resultado = document.getElementById("resultado").value = total;
	
}
