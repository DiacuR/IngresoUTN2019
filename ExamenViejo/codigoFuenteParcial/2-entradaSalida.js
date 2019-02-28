//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var producto = parseInt(prompt("Ingresar el importe del producto"));


    if(isNaN(proucto) || producto <= 0){
        alert("No es un importe valido");
    }else{
    var iva = producto * 21/100;

    var total = producto + iva;

    var importe = document.getElementById("importe").value = total;
    }

}

