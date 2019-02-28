//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho = parseInt(document.getElementById("ancho").value);
    var largo = parseInt(document.getElementById("largo").value);
 
        if((isNaN(ancho) && isNaN(largo)) || (ancho <= 0 && largo <= 0)){
            var perimetro = ancho*2 + largo*2;
            var hiloTotal = perimetro * 6;
            alert("La cantidad total de hilo que se necesita es de: " + hiloTotal);
 
       }else{
            alert("El largo o el ancho no es un valor valido");
           
        }

}

