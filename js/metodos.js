function Crearcarta(){
    var genero= "";
    var a=document.getElementById("rut").value;
    var b=document.getElementById("nom").value;
    var c=document.getElementById("appat").value;
    var d=document.getElementById("apmat").value;
    var e=document.getElementById("fecnac").value;
    var f=document.getElementById("edad").value;
    var g=document.getElementById("celu").value;
    var i=parseInt(document.getElementById("genero").value);

        if (i ==1)
        {
            genero= "hombre";
        }
        if (i ==2)
        {
            genero= "Mujer";
        }
        if (i ==3)
        {
            genero= "Otro Genero";
        }
    
    var cadena= "Postulacion Apoyo ambiental: \n"
                +"Rut " +a + "\n" + "Nombre: " +b+ "\n"+ "Apellido paterno: " + c
                +"\n" + "Apellido Materno: " +d+ "\n"+ "Edad: " + f
                +"\n" + "Fecha de nacimiento: " +e 
                +"\n" + "Genero: " +genero;

    document.getElementById("carta").value=cadena;
}

function colorOrange(obj){
    obj.style.backgroundColor= "orange";
}

function upperText(texto)
{
    const x=texto;
    x.value= x.value.toUpperCase();
}