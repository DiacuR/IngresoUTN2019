/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cant = parseInt(document.getElementById("Cantidad").value);
     var marca = document.getElementById("Marca").value;
     

     var precio = 35;
     

     if(cant >= 6){
         var precioLamp = precio * cant;
         var descuento = precioLamp * 50/100;
         var precioFinal = precioLamp - descuento;
                  
     }else if(cant == 5){
        if(marca == "ArgentinaLuz"){
         var precioLamp = precio * cant;
         var descuento= precioLamp * 40/100;
         var precioFinal = precioLamp - descuento;
         
        }else{
         var precioLamp = precio * cant;
         var descuento = precioLamp * 30 / 100;
         var precioFinal = precioLamp - descuento;
         
     }
     }else if(cant == 4){
        if(marca == ("ArgentinaLuz" || "FelipeLamparas")){
         var precioLamp = precio * cant;
         var descuento = precioLamp * 25/100;
         var precioFinal = precioLamp - descuento;
        
        }else{
         var precioLamp = precio * cant;
         var descuento = precioLamp * 20 / 100;
         var precioFinal = precioLamp - descuento;
         
     }
     }else if(cant == 3){
        if(marca == "ArgentinaLuz"){
         var precioLamp = precio * cant;
         var descuento= precioLamp * 15/100;
         var precioFinal = precioLamp - descuento;
        
        }else if(marca == "FelipeLamparas"){
         var precioLamp = precio * cant;
         var descuento = precioLamp * 10 / 100;
         var precioFinal = precioLamp - descuento;
         
     }else{
         var precioLamp = precio * cant;
         var descuento = precioLamp * 5 / 100;
         var precioFinal = precioLamp - descuento;
     }
      
    }else{
        var precioLamp = precio * cant;
        precioFinal = precioLamp;
    }


    
    var descuentoFinal = document.getElementById("precioDescuento").value = descuento;


    if(precioFinal >= 120){
        var IIBB = precioFinal * 10 / 100;
        var importeFinal = precioFinal + IIBB;
        alert("El precio total: " + precioFinal + " y los impuestos son: " + IIBB);
    }else{
        alert("El precio total: " + precioFinal);
    }





}
