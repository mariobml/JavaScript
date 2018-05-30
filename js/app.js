var num1;
var num2;
var sig;
var res;

//EFECTO PRESIONAR TECLA
function presionarTecla(){
  this.style.transform="scale(0.95)"
}
function soltarTecla(){
  this.style.transform="scale(1)"
}

//PRESIONAR TECLA 0
var cero=document.getElementById("0")
cero.addEventListener('mousedown', presionarTecla)
cero.addEventListener('mousedown',
function teclaCero(){
  //IMPRIMIR EL NUMERO CERO EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent=resultado.textContent
  }else if (resultado.textContent!="0" && resultado.textContent.length<8){
    resultado.textContent=resultado.textContent+"0"
  }else{
    resultado.textContent=resultado.textContent
  };
}
);
cero.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA 1
var uno=document.getElementById("1")
uno.addEventListener('mousedown', presionarTecla)
uno.addEventListener('mousedown',
function teclaUno(){
  //IMPRIMIR EL NUMERO UNO EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent="1"
  }else if (resultado.textContent!="0" && resultado.textContent.length<8){
    resultado.textContent=resultado.textContent+"1"
  }else{
    resultado.textContent=resultado.textContent
  };
}
);
uno.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA 2
var dos=document.getElementById("2")
dos.addEventListener('mousedown', presionarTecla)
dos.addEventListener('mousedown',
function teclaDos(){

  //IMPRIMIR EL NUMERO DOS EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent="2"
  }else if (resultado.textContent!="0" && resultado.textContent.length<8){
    resultado.textContent=resultado.textContent+"2"
  }else{
    resultado.textContent=resultado.textContent
  };
}
);
dos.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA 3
var tres=document.getElementById("3")
tres.addEventListener('mousedown', presionarTecla)
tres.addEventListener('mousedown',
function teclaTres(){
  //IMPRIMIR EL NUMERO TRES EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent="3"
  }else if (resultado.textContent!="0" && resultado.textContent.length<8){
    resultado.textContent=resultado.textContent+"3"
  }else{
    resultado.textContent=resultado.textContent
  };
}
);
tres.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA 4
var cuatro=document.getElementById("4")
cuatro.addEventListener('mousedown', presionarTecla)
cuatro.addEventListener('mousedown',
function teclaCuatro(){
  //IMPRIMIR EL NUMERO CUATRO EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent="4"
  }else if (resultado.textContent!="0" && resultado.textContent.length<8){
    resultado.textContent=resultado.textContent+"4"
  }else{
    resultado.textContent=resultado.textContent
  };
}
);
cuatro.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA 5
var cinco=document.getElementById("5")
cinco.addEventListener('mousedown', presionarTecla)
cinco.addEventListener('mousedown',
function teclaCinco(){
  //IMPRIMIR EL NUMERO CINCO EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent="5"
  }else if (resultado.textContent!="0" && resultado.textContent.length<8){
    resultado.textContent=resultado.textContent+"5"
  }else{
    resultado.textContent=resultado.textContent
  };
}
);
cinco.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA 6
var seis=document.getElementById("6")
seis.addEventListener('mousedown', presionarTecla)
seis.addEventListener('mousedown',
function teclaSeis(){
  //IMPRIMIR EL NUMERO SEIS EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent="6"
  }else if (resultado.textContent!="0" && resultado.textContent.length<8){
    resultado.textContent=resultado.textContent+"6"
  }else{
    resultado.textContent=resultado.textContent
  };
}
);
seis.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA 7
var siete=document.getElementById("7")
siete.addEventListener('mousedown', presionarTecla)
siete.addEventListener('mousedown',
function teclaSiete(){
  //IMPRIMIR EL NUMERO SIETE EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent="7"
  }else if (resultado.textContent!="0" && resultado.textContent.length<8){
    resultado.textContent=resultado.textContent+"7"
  }else{
    resultado.textContent=resultado.textContent
  };
}
);
siete.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA 8
var ocho=document.getElementById("8")
ocho.addEventListener('mousedown', presionarTecla)
ocho.addEventListener('mousedown',
function teclaOcho(){
  //IMPRIMIR EL NUMERO OCHO EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent="8"
  }else if (resultado.textContent!="0" && resultado.textContent.length<8){
    resultado.textContent=resultado.textContent+"8"
  }else{
    resultado.textContent=resultado.textContent
  };}
);
ocho.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA 9
var nueve=document.getElementById("9")
nueve.addEventListener('mousedown', presionarTecla)
nueve.addEventListener('mousedown',
function teclaNueve(){
  //IMPRIMIR EL NUMERO NUEVE EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent="9"
  }else if (resultado.textContent!="0" && resultado.textContent.length<8){
    resultado.textContent=resultado.textContent+"9"
  }else{
    resultado.textContent=resultado.textContent
  };}
);
nueve.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA PUNTO
var punto=document.getElementById("punto")
punto.addEventListener('mousedown', presionarTecla)
punto.addEventListener('mousedown',
function teclaPunto(){
  //IMPRIMIR EL PUNTO EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent=resultado.textContent+"."
  }else if (resultado.textContent!="0" && resultado.textContent.length<7){
    resultado.textContent=resultado.textContent+"."
  }else{
    resultado.textContent=resultado.textContent
  };}
);
punto.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA ON OFF
var on=document.getElementById("on")
on.addEventListener('mousedown', presionarTecla)
on.addEventListener('mousedown',
function teclaOn(){
  //IMPRIMIR EL ON/C EN LA PANTALLA
  var resultado=document.getElementById('display')
  if(resultado.textContent=="0"){
    resultado.textContent=resultado.textContent
    num1=0;
    num2=0;
    sig="";
  }else{
    resultado.textContent="0";
    num1=0;
    num2=0;
    sig="";
  };
}
);
on.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA SIGNO
var signo=document.getElementById("sign")
signo.addEventListener('mousedown', presionarTecla);
signo.addEventListener('mousedown',
function teclaSigno(){
  num1=document.getElementById('display').textContent;
  document.getElementById('display').textContent= -num1;
}
);
signo.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA RAIZ
var raiz=document.getElementById("raiz")
raiz.addEventListener('mousedown', presionarTecla);
raiz.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA DIVIDIDO
var dividido=document.getElementById("dividido")
dividido.addEventListener('mousedown',presionarTecla);
dividido.addEventListener('mousedown',
function teclaDividido(){
  num1=document.getElementById('display').textContent;
  sig="/";
  document.getElementById('display').textContent="";
}
);
dividido.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA POR
var por=document.getElementById("por")
por.addEventListener('mousedown',presionarTecla);
por.addEventListener('mousedown',
function teclaPor(){
  num1=document.getElementById('display').textContent;
  sig="*";
  document.getElementById('display').textContent="";
}
);
por.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA MENOS
var menos=document.getElementById("menos")
menos.addEventListener('mousedown', presionarTecla);
menos.addEventListener('mousedown',
function teclaMenos(){
  num1=document.getElementById('display').textContent;
  sig="-";
  document.getElementById('display').textContent="";
}
);
menos.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA MAS
var mas=document.getElementById("mas")
mas.addEventListener('mousedown', presionarTecla);
mas.addEventListener('mousedown',
function teclaMas(){
  num1=document.getElementById('display').textContent;
  sig="+";
  document.getElementById('display').textContent="";
}
);
mas.addEventListener('mouseup', soltarTecla);

//PRESIONAR TECLA IGUAL
var igual=document.getElementById("igual")
igual.addEventListener('mousedown', presionarTecla);
igual.addEventListener('mousedown',
function teclaIgual(){
  num2=document.getElementById('display').textContent;
  calculadora();
}
);
igual.addEventListener('mouseup', soltarTecla);

function calculadora(){
  switch (sig) {
    case "+":
    res=parseFloat(num1) + parseFloat(num2);
    break;
    case "-":
    res=parseFloat(num1) - parseFloat(num2);
    break;
    case "*":
    res=parseFloat(num1) * parseFloat(num2);
    break;
    case "/":
    res=parseFloat(num1) / parseFloat(num2);
    break;
  }
  document.getElementById('display').textContent="";
  if(res.toString().length>8){
    document.getElementById('display').textContent=res.toPrecision(3);
  }else{
    document.getElementById('display').textContent=res;
  };
}
