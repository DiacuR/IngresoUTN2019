//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var mes = prompt("Ingresar un mes:").toLowerCase();
	switch(mes){
        case "enero":
        case "febrero":alert("Verano!!");break;
        case "marzo":
        case "abril":
        case "mayo":
        case "junio":
        case "julio":
        case "agosto":
        case "septiembre":
        case "octubre":
        case "noviembre":
        case "diciembre":alert("Extraño enero y febrero");break;
        
        default: mes = prompt("El mes ingresado no es valido. Reintente: ");
    }
	
	
}

