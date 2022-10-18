var nombre="Antonio Fdez";
var estatura=175;
/*
var concatenacion= nombre + "  " + estatura;
//document.write(concatenacion);
var datos = document.getElementById("datos");
//datos.innerHTML= concatenacion;
datos.innerHTML=`
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${estatura} cm</h3>
`;
if(estatura>=170){
datos.innerHTML +='<h1>Eres una persona alta</h1>';

}else {
    datos.innerHTML +='<h1>Eres una persona baja</h1>'
}
for(var i=0; i<=10;i++){

    datos.innerHTML +="<h2>Estamos en el año:"+i;
}*/
function MuestraMiNombre(nombre, estatura){
    
   var misdatos=`
<h1>Soy la caja de datos</h1>
<h2>Mi nombre es: ${nombre}</h2>
<h3>Mido: ${estatura} cm</h3>
`;
return misdatos;
}

function imprimir (){
    var datos = document.getElementById("datos"); 
    datos.innerHTML=MuestraMiNombre("Raul Fdez",195);
}
imprimir();

var coche={
modelo:'Mercedes clase A',
maxima:500,
antiguedad:2020,
mostrarDatos(){
    console.log(this.modelo,this.maxima,this.antiguedad);
},
propiedad1:"valor aleatorio"


}
document.write("<h1>"+coche.antiguedad+"</h1>");
coche.mostrarDatos();
var saludar= new Promise((resolve,reject)=>{
setTimeout(()=>{

    let saludo="Hola muy buenas a todos chavales!!!";
   // saludo=false;
    if(saludo){
        resolve(saludo);
    }else{
        reject('No hay saludo');
    }
},2000);



});
saludar.then(resultado =>{
    alert(resultado);})
    .catch(err =>{
        alert(err);
    });