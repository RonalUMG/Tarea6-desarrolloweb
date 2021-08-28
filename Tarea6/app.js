function crear()
{
    var numero=document.getElementById("numero").value;
    tabla="<table border>";
    for (var i = 1; i <= 10; i++){
        tabla+="<tr>";
        tabla+="<td>"+numero+" * "+i+"</td>";
        tabla+="<td>"+(numero*i)+"</td>";
        tabla+="</tr>";
    }
    tabla+="</table>";
    document.getElementById("resultado").innerHTML=tabla;
}
function borrar(){
    document.getElementById("resultado").innerHTML="";
}