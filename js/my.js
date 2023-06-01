
function toGetValuefromInput(elementID){

    const firstString= elementID.value;
    const element = parseFloat(firstString);
    return element;

}

// data Validation
function isNumber(a,b){
    if(isNaN(a)== false && isNaN(b)== false && a>0 && b > 0){
        return true;
    }
    else{
        return false;
    }
}

//Blog Section
document.getElementById('btn-blogs').addEventListener('click', function(){
   window.location.href = 'grant.html';
})

//non-input geometry calculation
 document.getElementById('btn-parralle').addEventListener('click', function(){
    let area = (10 * 12).toFixed(2);
    showResult(area,'Parallegram');
    console.log(area);
 })
 document.getElementById('btn-rhombos').addEventListener('click', function(){
    let area = (0.5 * 16 *8).toFixed(2);
    showResult(area,'Rhombus');
    console.log(area,'Rhombus');
 })
 document.getElementById('btn-pentagon').addEventListener('click', function(){
    let area = (0.5 * 6 *10).toFixed(2);
    showResult(area,'Pentagone');
    console.log(area);
 })
 document.getElementById('btn-ellipse').addEventListener('click', function(){
    let area = (3.14 * 10 *4).toFixed(2);
    console.log(area);
    showResult(area,'Elipse');
 })

 //input geometry work
 document.getElementById('btn-triangle').addEventListener('click', function(){
    const firstValue = document.getElementById('triangle-b');
    const secondValue = document.getElementById('triangle-h');
    const b = toGetValuefromInput(firstValue);
    const h= toGetValuefromInput(secondValue);
    
    const valid= isNumber(b,h);
    if(valid == true){
        const area = (0.5 * b * h).toFixed(2);
        console.log(area);
        showResult(area,'Triangel');

     }
     else{
        alert("Plz Enter A positive Number");
     }
    })
    


 document.getElementById('btn-rectangle').addEventListener('click', function(){
    const first = document.getElementById('rectangle-w');
    const second = document.getElementById('rectangle-l');

    const w = toGetValuefromInput(first);
    const l= toGetValuefromInput(second);

    const valid= isNumber(w,l);
    if(valid == true){
        const area = (w * l).toFixed(2);
        console.log(area);
        showResult(area,'Reactangle');
     }
     else{
        alert("Plz Enter A positive Number");
     }
 })

//  For Random color
const getColor =(id) => {
   const randomNumber= Math.floor(Math.random()*16777215);
   const randomCode = '#'+randomNumber.toString(16);
   document.getElementById(id).style.backgroundColor= randomCode;
}
document.getElementById('new-bg').addEventListener('click',function(){
   getColor('new-bg');
})
document.getElementById('new-bg-2').addEventListener('click',function(){
   getColor('new-bg-2');
})
document.getElementById('new-bg-3').addEventListener('click',function(){
   getColor('new-bg-3');
})
document.getElementById('new-bg-4').addEventListener('click',function(){
   getColor('new-bg-4');
})
document.getElementById('new-bg-5').addEventListener('click',function(){
   getColor('new-bg-5');
})
document.getElementById('new-bg-6').addEventListener('click',function(){
   getColor('new-bg-6');
})

let count = 0;
//task for show result
 function showResult(area,name){
   const parent = document.getElementById('content-container');
   count = count+1;
   let count1 = count +'.'+ name;
   let myvalue= area + 'cm2';
   const tr = document.createElement('tr');
   tr.innerHTML = `
   <td> ${count1} </td>
   <td>${myvalue}</td>
   <td><button>Convert To M<sup>2 </sup></button></td>`
  ;
   parent.appendChild(tr);
}
document.getElementById('btn-return').addEventListener('click',function(){
   //   pageRedirect();
   window.location.href = 'index.html';
})