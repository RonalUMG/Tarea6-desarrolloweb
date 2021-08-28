



    function crear()
    {
    var numero=document.getElementById("numero").value;
    multiplicar(numero);

    division(numero);
    
    suma(numero);

    resta(numero);
    }

    function multiplicar(numero){
        tabla="<a> Multiplicacion <a> <table border>";
    tabla+="<tr>";
    tabla+=`<td> Multiplicacion  </td>`;
    tabla+=`<td> Total </td>`;
    tabla+="</tr>";
    for (var i = 1; i <= 10; i++){
        tabla+="<tr>";
        tabla+="<td>"+numero+" * "+i+"</td>";
        tabla+=`<td>`+(numero*i)+" </td>";
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado1").innerHTML=tabla;
    }

    function division(numero){
        tabla="<a> Division <a> <table border>";
    tabla+="<tr>";
    tabla+=`<td> Division  </td>`;
    tabla+=`<td> Total </td>`;
    tabla+="</tr>";
    for (var i = 1; i <= 10; i++){
        tabla+="<tr>";
        tabla+="<td>"+(numero*i)+" / "+3+"</td>";
        tabla+=`<td> `+(parseInt(numero*i)/numero)+"</td>";
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado2").innerHTML=tabla;
    }

    
    function suma(numero){
        tabla="<a> Suma <a> <table border>";
    tabla+="<tr>";
    tabla+=`<td>  suma </td>`;
    tabla+=`<td> Total </td>`;
    tabla+="</tr>";
    for (var i = 1; i <= 10; i++){
        tabla+="<tr>";
        tabla+="<td>"+numero+" + "+i+"</td>";
        tabla+=`<td>`+(parseInt(numero)+parseInt(i))+" </td>";
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado3").innerHTML=tabla;
    }

    function resta(numero){
        tabla="<a> Resta <a> <table border>";
    tabla+="<tr>";
    tabla+=`<td>  Resta </td>`;
    tabla+=`<td>  Total </td>`;
    tabla+="</tr>";
    for (var i = 1; i <= 10; i++){
        tabla+="<tr>";
        tabla+="<td>"+numero+" - "+i+"</td>";
        tabla+=`<td> `+(numero-i)+"  </td>";
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado4").innerHTML=tabla;
    }


function borrar(){
    document.getElementById("resultado").innerHTML="";
}