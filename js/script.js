
Campominato()
function Campominato(){
const btn=document.querySelector('button')
console.log(btn)


btn.addEventListener('click',function(){
  let allbombs = 16;
  let score=0;
  let gameInProgress = true;
  
  
  let sceltadifficoltà = document.getElementById('Difficoltà').value;
  const squarebox = document.getElementById('squarebox')
  squarebox.innerHTML='';
  console.log(sceltadifficoltà)
  let numeroquadratini;
  const bombscore = document.getElementById('scorebomb');
  
  if(sceltadifficoltà ==='facile'){
      numeroquadratini = 100;
  }
  else if(sceltadifficoltà==='medio'){
      numeroquadratini = 81;
  }
  else{
     numeroquadratini=49;
  }
  let maxscore = ((numeroquadratini-1) - allbombs); 
  console.log(maxscore)
  const bombegenerate= generabombe(numeroquadratini,allbombs)
   
   for(let i = 0; i < numeroquadratini;i++){
    let square = boxadd(i,numeroquadratini,bombegenerate,score);
    squarebox.append(square);
    
    
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
function boxadd(quadratinoattuale,numsquare,bombegenerate,){
  squarewidth= Math.sqrt(numsquare)
  const square = document.createElement('div')
  square.classList.add('box')
  square.style.width=`calc(100% / ${squarewidth})`
  square.style.height=`calc(100% / ${squarewidth})`
  
  square.addEventListener('click',drawclick)
    function drawclick(bombs){
  if (gameInProgress) {   
    square.classList.add('clicksquare')
    this.removeEventListener('click',drawclick);
    if (bombegenerate.includes(parseInt(quadratinoattuale +1))) {
      for (let i = 0; i < bombegenerate.length; i++) {
        const bombPos = bombegenerate[i];
        const bombSquare = squarebox.querySelector(`.box:nth-child(${bombPos})`);
        bombSquare.innerHTML = '<i class="fa-solid fa-bomb fa-beat" style="color: #fbff00;"></i>';
        bombSquare.style.backgroundColor = 'red';
        
      }
      bombscore.innerHTML = `Hai perso il tuo punteggio è ${score}`
      gameInProgress = false;
      
    
    } 
    
    else if( score >= maxscore){
      square.innerHTML = quadratinoattuale +1 ;
      score++;
      bombscore.innerHTML = `Hai vinto il tuo punteggio è ${score}`
      gameInProgress = false;
    }
    else {
      square.innerHTML = quadratinoattuale +1 ;
      score++;
      console.log(quadratinoattuale +1)
      
      bombscore.innerHTML = `Il tuo punteggio è ${score}`;
    }
    }
    }
  return square
}

})




function GetRandomnumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
}