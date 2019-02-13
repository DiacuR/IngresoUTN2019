/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var importe = parseInt(document.getElementById("importe").value);
    var descuento = (25*importe)/100;
    var resultado = document.getElementById("resultado").value = importe - descuento;

    
}
