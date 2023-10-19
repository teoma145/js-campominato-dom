
const btn=document.querySelector('button')
console.log(btn)


btn.addEventListener('click',function(){
  let allbombs = 16;

  let sceltadifficoltà = document.getElementById('Difficoltà').value;
  const squarebox = document.getElementById('squarebox')
  squarebox.innerHTML='';
  console.log(sceltadifficoltà)
  let numeroquadratini;
  
  
  if(sceltadifficoltà ==='facile'){
      numeroquadratini = 100;
  }
  else if(sceltadifficoltà==='medio'){
      numeroquadratini = 81;
  }
  else{
     numeroquadratini=49;
  }
   
  const bombegenerate= generabombe(numeroquadratini,allbombs)
  
   for(let i = 0; i < numeroquadratini;i++){
    let square = boxadd(i,numeroquadratini,bombegenerate);
    squarebox.append(square);
   }
   
})

function boxadd(quadratinoattuale,numsquare,bombegenerate){
    squarewidth= Math.sqrt(numsquare)
    const square = document.createElement('div')
    square.classList.add('box')
    square.style.width=`calc(100% / ${squarewidth})`
    square.style.height=`calc(100% / ${squarewidth})`
    
    square.addEventListener('click',function(){
      square.classList.add('clicksquare')
      if (bombegenerate.includes(quadratinoattuale)) {
        square.innerHTML = '<i class="fa-solid fa-bomb fa-beat" style="color: #fbff00;"></i>';
      } else {
        square.innerHTML = quadratinoattuale + 1;
      }
    })
    return square
}
function generabombe(numeroquadratini,allbombs){
    const arraybombe=[];
    while(arraybombe.length < allbombs){
    let bomb = GetRandomnumber(1,numeroquadratini);
    if(!arraybombe.includes(bomb)){
      arraybombe.push(bomb);
    }
  }
  console.log(arraybombe)
  return arraybombe;
}

function GetRandomnumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}