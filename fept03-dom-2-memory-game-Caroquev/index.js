// holds the deck of cards for the game
/*let cards = [];

// generates a new deck of cards, with size / 2 pairs, and shuffled
function generateCards(size) {}

// shuffles an array
function shuffle(arr) {}

// flips a card by id
function flipCard(id) {}

// marks any flipped cards as matched if they match
function checkMatched() {}

// shows a message if the game is over
function checkWin() {}

// sets all flipped props to false except for the matched ones
function flipBack() {}

// handles the click on a card
function handleCardClick(id) {}

// creates the DOM elements for the cards
function showCards() {}

// updates the classes on the card DOM elements based on the state of the cards
function updateCards() {}

// initializes the game
function createGame(size) {
  generateCards(size * size);
  showCards();
}

// INITIALIZE THE GAME WHEN THE PAGE LOADS
createGame(4);*/

const main = document.querySelector('.game');
const message = maker('div',document.body,'Press any square to start','message'); 
const grid = {x:4,y:4};
const arr=['red','blue','purple','green','yellow','pink','orange','brown'];
const game = {score:0,total:0,game:[],flip:[], timer:{}, pause:false};
let total = grid.x*grid.y;
total = arr.length * 2 < total? arr.length * 2 : total;
game.total = total/2;
document.addEventListener('DOMContentLoaded', makeGrid);

function makeGrid (){
  for (let i=0; i<total; i++){
    //const html=`${i+1}`;
    const el= maker('div',main,'','box');
    el.onclick = flipBox;
  }
  main.style.setProperty(`grid-template-columns`,`repeat(${grid.y},1fr)`);
  addBoxes();
}

function toogleFlip(parent,boo){
  const bEle = parent.querySelector('.back');
  const fEle = parent.querySelector('.front');
  if(boo){
    bEle.style.display ='none';
    bEle.style.display ='block';
  }else{
    bEle.style.display ='block';
    bEle.style.display ='none';
  }
  console.log(parent);
}

function checkcards(){
game.pause = true;
let match = false;
let found = false;
game.flip.forEach((ele)=>{
  if(ele.val == match){
    console.log('match found');
    found = true;
  }else{

  }
  console.log(ele.val);
})
if(!found){
  game.timer = setTimeout(flipback,500);
}else{
  game.score ++;
  game.flip.forEach((ele)=>{
    ele.found = true;
  })
}
  game.pause = false;
  game.flip.length =0;
  if(game.score>= game.total){
    message.textContent='Game Over'
  }

}

function flipback(){
  game.flip.forEach((ele)=>{
    toogleFlip(ele,false);
  })
  game.pause = false;
  game.flip.length =0;
}

function flipBox(e){
  if(!game.pause){

     const parent= e.target.parentNode;
     console.log(parent.found);
     if(parent.found){
      message.textContent ='Already found';
     }
     else{
     if(game.flip.length>=2){
     toggleflip(parent,false);
     }else{
     toggleflip(parent,true);
     }
     game.flip.push(parent);
    }
    message.textContent = `Cards Flipped : ${game.flip.length}`;
    if(game.flip.length>=2){
      checkcards();
    } else {
      message.textContent = 'Game Paused';
    }
  }
}


function addBoxes(){
  let gameItems = total/2;
  const temp=[];
  arr.sort(() => {
    return Math.random() - 0.5;
  })
  for (let i=0; i<gameItems; i++){
    temp.push(arr[i]);
  }
  game.game= temp.concat(temp);
  game.game.sort(() => {
    return Math.random() - 0.5
  })
  const boxes= main.querySelectorAll('.box');
  boxes.forEach((ele,ind) => {
    ele.val = game.game[ind];
    ele.found = false;
    const front= maker('div',ele,game.game[ind],'front');
    front.style.backgroundColor = game.game[ind];
    front.style.display = 'none';
    const back = maker('div',ele,ind+1,'back')
    back.style.display = 'block';
  });
    

  console.log(game);
}

function maker(eleType,parent,html,cla){
 const ele = document.createElement('div');
 ele.classList.add(cla);
 ele.innerHTML= html;
 return parent.appendChild(ele);
}
