function capital(){
    let cap= document.getElementById("cap").value;
    let resultado=cap*0.02;

    document.getElementById("resul").value=resultado;
}
function resul2(){
    let sueldobase= document.getElementById("sueldobase").value;
    let comision1= document.getElementById("comision1").value;
    let comision2= document.getElementById("comision2").value;
    let comision3= document.getElementById("comision3").value;

    let resultadocomisiones= comision1*0.10;
    resultadocomisiones+= comision2*0.10;
    resultadocomisiones+= comision3*0.10;
  
    let sumatotal= parseInt(resultadocomisiones) + parseInt(sueldobase);


    document.getElementById("resul11").value=resultadocomisiones;
    document.getElementById("resul22").value=sumatotal;


}
function resul3(){
    let compratotal = document.getElementById("totalcompra").value;
    let descuentototal = compratotal*0.15;
    let totalcompra =  parseFloat(compratotal) - parseFloat(descuentototal);

    document.getElementById("resultadodescuento").value = totalcompra;

}
function resul4(){

    let examfinal = document.getElementById("examfin").value;
    examfinal *= 30;
    examfinal = examfinal / 10;

    let proyectfinal = document.getElementById("proyectofinal").value;
    proyectfinal *= 15
    proyectfinal = proyectfinal / 10

    let parcial1 = document.getElementById("calif1").value;
    let parcial2 = document.getElementById("calif2").value;
    let parcial3 = document.getElementById("calif3").value;

    let califparcialfinal = parseFloat(parcial1) + parseFloat(parcial2) + parseFloat(parcial3)
    califparcialfinal *= 55;
    califparcialfinal = califparcialfinal/30;

    let finalfinal= parseFloat(califparcialfinal) + parseFloat(proyectfinal) + parseFloat(examfinal);
 

    document.getElementById("califfinal").value= finalfinal;

}

function resul5(){

    let hombres = document.getElementById("hombres").value;
    let mujeres = document.getElementById("mujeres").value;

    let total = parseFloat(hombres) + parseFloat(mujeres);

    let mujeresresultado = mujeres * 100;
    mujeresresultado /= total;

    let hombresresultado = hombres * 100;
    hombresresultado /= total;

    document.getElementById("mujeresresultado").value =mujeresresultado;
    document.getElementById("hombresresultado").value =hombresresultado;


}

function resul6(){
    let nacimiento = document.getElementById("nacimiento").value;
    let actualidad = document.getElementById("actualidad").value;

    let edadfinal= parseInt(actualidad) - parseInt(nacimiento);
    document.getElementById("edad").value=edadfinal;
}

function resul7(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    if(num1 == num2){
        let numresul = parseFloat(num1) * parseFloat(num2);
        document.getElementById("numresul").value = numresul;
        document.getElementById("cuales").value = "multiplicacion";
    }
    if(num1 > num2){
        let numresul = parseFloat(num1) - parseFloat(num2);
        document.getElementById("numresul").value = numresul;
        document.getElementById("cuales").value = "resta";
    }
    if(num1 < num2){
        let numresul = parseFloat(num1) + parseFloat(num2);
        document.getElementById("numresul").value = numresul;
        document.getElementById("cuales").value = "suma";
    }

}

function resul8(){

    
  
    let num1 = parseFloat(document.getElementById("num11").value);
    let num2 = parseFloat(document.getElementById("num22").value);
    let num3 = parseFloat(document.getElementById("num33").value);
    let numeromasgrande = 0;

    if(num1 > num2){
        if(num1 > num3){
            document.getElementById("grande").value= num1;
        }
        else{
            document.getElementById("grande").value= num3;
        }
    }
    else{
        if(num2 > num3){
            document.getElementById("grande").value= num2;
        }
        else{
            document.getElementById("grande").value= num3;
        }

    }
      
}

function ejercicio9()
 {
  let horastotales=document.getElementById("horastotales").value;
  let salariohora=document.getElementById("salario").value;
  let horasnormalestrabajadas;
  let pagototal;
  let pagonormal;
  let horasextra;
  let salariohorasextra2;
  let pagohorasextra;
  let salarioenhoratriple;
  let horasextratrabajadasp;
  let horasdobletrabajadas;
  let horastripletrabajadas;
  if (horastotales<=40)
  {
    pagototal=horastotales*salariohora;
  }
  else
  {
    pagonormal=40*salariohora;
    horasextra=horastotales-40;
    if(horasextra<=8)
    {
      pagohorasextra=salariohora*2;
      salariohorasextra2=pagohorasextra*horasextra;
      pagototal=pagonormal+salariohorasextra2;
    }
    else
    {
      pagohorasextra=salariohora*2;
      salariohorasextra2=pagohorasextra*8;
      horastriple=horasextra-8;
      salarioenhoratriple=salariohora*3;
      pagohorastriple=horastriple*salarioenhoratriple;
      pagototal=pagohorastriple+pagonormal+salariohorasextra2;
    }
  }
  if(horastotales<=40)
  {
    horasnormalestrabajadas=horastotales;
    horasdobletrabajadas=0;
    horastripletrabajadas=0;
  }
  else
  {
    horasnormalestrabajadas=40;
    horasextratrabajadasp=horastotales-40;
    if(horasextratrabajadasp<=8)
    {
      horasdobletrabajadas=horasextratrabajadasp;
      horastripletrabajadas=0;
    }
    else
    {
      horasnormalestrabajadas=40;
      horasdobletrabajadas=8;
      horastripletrabajadas=horasextratrabajadasp-8;
    }

  }
  document.getElementById("salariofinal").value=pagototal;
  document.getElementById("horasnormales").value=horasnormalestrabajadas;
  document.getElementById("horasdobles").value=horasdobletrabajadas;
  document.getElementById("horastriples").value=horastripletrabajadas;
 }

function resul10(){
    let anos = parseFloat(document.getElementById("anos").value);
    let meses = parseFloat(document.getElementById("mesess").value);
    let pagomes = parseFloat(document.getElementById("pagomes").value);

    meses *= 10;
    meses /= 12;
    meses *= 0.1;
    pagomes *=12;

    let total = parseFloat(anos) + parseFloat(meses);

    if(total < 1){
        pagomes *= 0.05;
        document.getElementById("recibir").value= pagomes;

    }
    if(total >= 1  && total < 2){
        pagomes *= 0.07;
        document.getElementById("recibir").value= pagomes;

    }
    if(total >= 2  && total < 5){
        pagomes *= 0.10;
        document.getElementById("recibir").value= pagomes;

    }
    if(total >= 5  && total < 10){
        pagomes *= 0.15;
        document.getElementById("recibir").value= pagomes;

    }
    if(total >= 10 ){
        pagomes *= 0.20;
        document.getElementById("recibir").value= pagomes;

    }
    


}