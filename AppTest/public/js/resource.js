var votosM =0;
var votosF =0;
var votosg1=0;
var votosg2=0;
var votosg3=0;


function votar1(){
    var redad = document.getElementById("redad").value;
    var genero = document.getElementById("genero").value;
    var medio = document.getElementById("medio").value;
    if((redad>3 || redad<1) || (genero<1 || genero>2) || (medio<1 || medio>3)) window.alert('por favor complete los espacios');
    else{
        var Nombre= document.getElementById("n1").innerHTML;
        var retorno = parseInt(document.getElementById("retorno1").innerHTML, 10);
        var votos = parseInt(document.getElementById("votos1").innerHTML, 10);
        votos = votos+1;
        document.getElementById("votos1").innerHTML= votos;
        var tvotos = parseInt(document.getElementById("votos1").innerHTML, 10)+parseInt(document.getElementById('votos2').innerHTML, 10);
        var porcentaje = votos/tvotos *100;
        document.getElementById("pvotos1").innerHTML= porcentaje + "%" ;
        var aux = 100- porcentaje;
        document.getElementById("pvotos2").innerHTML= aux+ "%" ;
        if(medio==1){
            retorno = retorno +1000;
        }
        if(medio==2){
            retorno = retorno +500;
        }
        if(medio==3){
            retorno = retorno +100;
        }
        document.getElementById("retorno1").innerHTML= retorno;
        if(genero==1) votosM++;
        else votosF++;
        if(redad==1) votosg1++;
        else{
            if(redad==2) votosg2++;
            else votosg3++;
        }
    } 
}
function votar2(){
    var redad = document.getElementById("redad").value;
    var genero = document.getElementById("genero").value;
    var medio = document.getElementById("medio").value;
    if((redad>3 || redad<1) || (genero<1 || genero>2) || (medio<1 || medio>3)) window.alert('por favor complete los espacios');
    else{
        var Nombre= document.getElementById("n2").innerHTML;
        var retorno = parseInt(document.getElementById("retorno2").innerHTML, 10);
        var votos = parseInt(document.getElementById("votos2").innerHTML, 10);
        votos = votos+1;
        document.getElementById("votos2").innerHTML= votos;
        var tvotos = parseInt(document.getElementById("votos1").innerHTML, 10)+parseInt(document.getElementById('votos2').innerHTML, 10);
        var porcentaje = votos/tvotos *100;
        document.getElementById("pvotos2").innerHTML= porcentaje + "%" ;
        var aux = 100- porcentaje;
        document.getElementById("pvotos1").innerHTML= aux+ "%" ;
        if(medio==1){
            retorno = retorno +1000;
        }
        if(medio==2){
            retorno = retorno +500;
        }
        if(medio==3){
            retorno = retorno +100;
        }
        document.getElementById("retorno2").innerHTML=retorno;
        if(genero==1) votosM++;
        else votosF++;
        if(redad==1) votosg1++;
        else{
            if(redad==2) votosg2++;
            else votosg3++;
        }
    } 
}
function statist(){
    document.getElementById("stvotos").innerHTML=votosF+votosM;
    document.getElementById("stvotosM").innerHTML=votosM;
    document.getElementById("stvotosF").innerHTML=votosF;
    document.getElementById("stvotos1").innerHTML=votosg1;
    document.getElementById("stvotos2").innerHTML=votosg2;
    document.getElementById("stvotos3").innerHTML=votosg3;

}
function vaciar(){
    window.location.reload();
}
