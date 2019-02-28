//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var base = parseInt(document.getElementById("lado").value);
    
        if(isNaN(base) || base <= 0){
            alert("No es una base valida");
        }else{
            var resul = 3*base;
            alert("El perimetro de este triangulo es de: " + resul);            
        }


	
}

