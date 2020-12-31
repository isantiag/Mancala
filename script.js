// list of variables
let total = 48;
let player1Score = 0;
let player2Score = 0;
let mPlayer1;
let mPlayer2;
let pos1_1 = 0;
let pos1_2 = 0;
let pos1_3 = 0;
let pos1_4 = 0;
let pos1_5 = 0;
let pos1_6 = 0;
let pos2_1 = 0;
let pos2_2 = 0;
let pos2_3 = 0;
let pos2_4 = 0;
let pos2_5 = 0;
let pos2_6 = 0;
let pos1_1_event;
let pos1_2_event;
let pos1_3_event;
let pos1_4_event;
let pos1_5_event;
let pos1_6_event;
let pos2_1_event;
let pos2_2_event;
let pos2_3_event;
let pos2_4_event;
let pos2_5_event;
let pos2_6_event;
let imagem;
// stonesPerLoc = [mP1 p1P1 p2P1 p3P1 p4P1 p5P1 p6P1 mP2 p1P2 p2P2 p3P2 p4P2 p5P2 p6P2]
let stonesPerLoc = [0,4,4,4,4,4,4,0,4,4,4,4,4,4];
let display = ['player1','.player1','.player2','player2'];


// list of functions

function UpdateStones(){
  
  while (mPlayer1.children.length !== stonesPerLoc[0]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    mPlayer1.appendChild(imagem);
  }
  
  while (pos1_1.children.length !== stonesPerLoc[1]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos1_1.appendChild(imagem);
  }

  while (pos1_2.children.length !== stonesPerLoc[2]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos1_2.appendChild(imagem);
  }

  while (pos1_3.children.length !== stonesPerLoc[3]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos1_3.appendChild(imagem);
  }

  while (pos1_4.children.length !== stonesPerLoc[4]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos1_4.appendChild(imagem);
  }

  while (pos1_5.children.length !== stonesPerLoc[5]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos1_5.appendChild(imagem);
  }

  while (pos1_6.children.length !== stonesPerLoc[6]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos1_6.appendChild(imagem);
  }

  while (mPlayer2.children.length !== stonesPerLoc[7]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    mPlayer2.appendChild(imagem);
  }

  while (pos2_1.children.length !== stonesPerLoc[8]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos2_1.appendChild(imagem);
  }

  while (pos2_2.children.length !== stonesPerLoc[9]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos2_2.appendChild(imagem);
  }

  while (pos2_3.children.length !== stonesPerLoc[10]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos2_3.appendChild(imagem);
  }

  while (pos2_4.children.length !== stonesPerLoc[11]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos2_4.appendChild(imagem);
  }

  while (pos2_5.children.length !== stonesPerLoc[12]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos2_5.appendChild(imagem);
  }

  while (pos2_6.children.length !== stonesPerLoc[13]){
    imagem = document.createElement('img');
    imagem.src = './marble.png';
    imagem.width = '20';
    pos2_6.appendChild(imagem);
  }
  // document.querySelector('.MancalaPlayer1').innerHTML = stonesPerLoc[0];
  // pos1_1.textContent = stonesPerLoc[1];
  // document.querySelector('.pits2Player1').innerHTML = stonesPerLoc[2];
  // document.querySelector('.pits3Player1').innerHTML = stonesPerLoc[3];
  // document.querySelector('.pits4Player1').innerHTML = stonesPerLoc[4];
  // document.querySelector('.pits5Player1').innerHTML = stonesPerLoc[5];
  // document.querySelector('.pits6Player1').innerHTML = stonesPerLoc[6];
  // document.querySelector('.MancalaPlayer2').innerHTML = stonesPerLoc[7];
  // document.querySelector('.pits1Player2').innerHTML = stonesPerLoc[8];
  // document.querySelector('.pits2Player2').innerHTML = stonesPerLoc[9];
  // document.querySelector('.pits3Player2').innerHTML = stonesPerLoc[10];
  // document.querySelector('.pits4Player2').innerHTML = stonesPerLoc[11];
  // document.querySelector('.pits5Player2').innerHTML = stonesPerLoc[12];
  // document.querySelector('.pits6Player2').innerHTML = stonesPerLoc[13];
}

function removeAllChildNodes(parent) {
  console.log('1');
  while (parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}


// Check last position has only 1 stone
function checkLastPos(lastPosition,player, oppPosition){
  setPlayer(player);
  setDisplay(display);
  if (stonesPerLoc[lastPosition] === 1 && stonesPerLoc[oppPosition] !== 0){
    total = total -1 - stonesPerLoc[oppPosition];
    if (player === 'player1'){
      document.querySelector('p').innerHTML = "Take all playing stones from your opponent's cup";
      stonesPerLoc[7] = stonesPerLoc[7] + 1 + stonesPerLoc[oppPosition];
    }else {
      document.querySelector('p').innerHTML = "Take all playing stones from your opponent's cup";
      stonesPerLoc[0] = stonesPerLoc[0] + 1 + stonesPerLoc[oppPosition];
    }
    stonesPerLoc[lastPosition] = 0;
    stonesPerLoc[oppPosition] = 0;
    switch (true) {
      case ((lastPosition === 1) || (lastPosition === 8)):
        removeAllChildNodes(pos2_1);
        removeAllChildNodes(pos1_1);
        break
      case ((lastPosition === 2) || (lastPosition === 9)):
        removeAllChildNodes(pos2_2);
        removeAllChildNodes(pos1_2);
        break
      case ((lastPosition === 3) || (lastPosition === 10)):
        removeAllChildNodes(pos2_3);
        removeAllChildNodes(pos1_3);
        break
      case ((lastPosition === 4) || (lastPosition === 11)):
        removeAllChildNodes(pos2_4);
        removeAllChildNodes(pos1_4);
        break
      case ((lastPosition === 5) || (lastPosition === 12)):
        removeAllChildNodes(pos2_5);
        removeAllChildNodes(pos1_5);
        break
      case ((lastPosition === 6) || (lastPosition === 13)):
        removeAllChildNodes(pos2_6);
        removeAllChildNodes(pos1_6);
        break
    }
    UpdateStones();
  }
} 

// Update player and display
function updatePlayerDisplay(player){
  setPlayer(player);
  setDisplay(display);
}

// Set player
function setPlayer(player) {
  if (player === 'player1'){
    display[0] = 'player1';
    display[1] = '.player1';
    display[2] = '.player2'
    display[3] = 'player2';
  }else {
    display[0] = 'player2';
    display[1] = '.player2';
    display[2] = '.player1'
    display[3] = 'player1';
  }
}

// Set display
function setDisplay(display){
  document.querySelector(display[1]).innerHTML = display[0];
  document.querySelector(display[1]).style.border = '1px solid black';
  document.querySelector(display[2]).innerHTML ='';
  document.querySelector(display[2]).style.border = '';
}

// Check for winner
function checkForWinner(){
  if (stonesPerLoc[1] === 0 && stonesPerLoc[2] === 0 && stonesPerLoc[3] === 0 && stonesPerLoc[4] === 0 && stonesPerLoc[5] === 0 && stonesPerLoc[6] === 0) {
    stonesPerLoc[7]+=total;
    console.log('test2')
    setStonesZero('player2');
    UpdateStones();
    printResult();
  }else if (stonesPerLoc[8] === 0 && stonesPerLoc[9] === 0 && stonesPerLoc[10] === 0 && stonesPerLoc[11] === 0 && stonesPerLoc[12] === 0 && stonesPerLoc[13] === 0){
    stonesPerLoc[0]+=total;
    console.log('test1')
    setStonesZero('player1');
    UpdateStones();
    printResult();
  }else {
    // game is on
    console.log('game is on')
  }
  
}

function printResult(){
  if (stonesPerLoc[0] > stonesPerLoc[7]){
    player1Score++;
    document.querySelector(".player1Score").innerHTML = `Player1 Score: ${player1Score}`;  
    document.querySelector('p').innerHTML = 'Player 1 is the winner!';
  }else if (stonesPerLoc[0] < stonesPerLoc[7]){
    player2Score++;
    document.querySelector(".player2Score").innerHTML = `Player2 Score: ${player2Score}`;
    document.querySelector('p').innerHTML = 'Player 2 is the winner!';
  }else {
    console.log('tie')
    console.log(total)
    document.querySelector('p').innerHTML = 'There is a tie!';
  }
}


function setStonesZero(player){
  if (player === 'player1') {
    stonesPerLoc[1] = 0;
    stonesPerLoc[2] = 0;
    stonesPerLoc[3] = 0;
    stonesPerLoc[4] = 0;
    stonesPerLoc[5] = 0;
    stonesPerLoc[6] = 0;
    removeAllChildNodes(pos1_1);
    removeAllChildNodes(pos1_2);
    removeAllChildNodes(pos1_3);
    removeAllChildNodes(pos1_4);
    removeAllChildNodes(pos1_5);
    removeAllChildNodes(pos1_6);
  }else {
    stonesPerLoc[8] = 0;
    stonesPerLoc[9] = 0;
    stonesPerLoc[10] = 0;
    stonesPerLoc[11] = 0;
    stonesPerLoc[12] = 0;
    stonesPerLoc[13] = 0;
    removeAllChildNodes(pos2_1);
    removeAllChildNodes(pos2_2);
    removeAllChildNodes(pos2_3);
    removeAllChildNodes(pos2_4);
    removeAllChildNodes(pos2_5);
    removeAllChildNodes(pos2_6);
  }
}

function reset(){
  total = 48;
  stonesPerLoc = [0,4,4,4,4,4,4,0,4,4,4,4,4,4];
  removeAllChildNodes(mPlayer1);
  removeAllChildNodes(mPlayer2);
  UpdateStones();
  display = ['player1','.player1','.player2','player2'];
  setDisplay(display);
  document.querySelector('p').innerHTML ="";
}

// Page loads
document.addEventListener("DOMContentLoaded", (e) => {

  mPlayer1 = document.querySelector('.MancalaPlayer1');
  mPlayer2 = document.querySelector('.MancalaPlayer2');
  pos1_1 = document.querySelector('.pits1Player1');
  pos1_2 = document.querySelector('.pits2Player1');
  pos1_3 = document.querySelector('.pits3Player1');
  pos1_4 = document.querySelector('.pits4Player1');
  pos1_5 = document.querySelector('.pits5Player1');
  pos1_6 = document.querySelector('.pits6Player1');
  pos2_1 = document.querySelector('.pits1Player2');
  pos2_2 = document.querySelector('.pits2Player2');
  pos2_3 = document.querySelector('.pits3Player2');
  pos2_4 = document.querySelector('.pits4Player2');
  pos2_5 = document.querySelector('.pits5Player2');
  pos2_6 = document.querySelector('.pits6Player2');
  document.querySelector('.player1').style.border = "1px solid black";
  document.querySelector('.player1Score').innerHTML =`Player1 Score: ${player1Score}`;
  document.querySelector('.player2Score').innerHTML =`Player2 Score: ${player2Score}`;
  resetBtn = document.querySelector('.reset');
  UpdateStones();
  // placeImage(stonesPerLoc[1],pos1_1);
    
  
  pos1_1_event = function (e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos1_1);
    switch(stonesPerLoc[1]){
      case 1:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        total--; 
        document.querySelector('p').innerHTML = 'Play again';
        UpdateStones();
        checkForWinner();
        break
      case 2:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        total-- ;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 3:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 4:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 5:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 6:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 7:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[1] = 0; 
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        total--;
        UpdateStones();
        checkLastPos(6,'player2',13);
        checkForWinner();
        break
      case 9:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;  
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        total--;
        UpdateStones();
        checkLastPos(5,'player2',12);
        checkForWinner();
        break
      case 10:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;  
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        total--;  
        UpdateStones();
        checkLastPos(4,'player2',11);
        checkForWinner();
        break
      case 11:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;  
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;  
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        total--;
        UpdateStones();
        checkLastPos(3,'player2',10);
        checkForWinner();
        break
      case 12:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;  
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;  
        stonesPerLoc[3] = stonesPerLoc[3]+1;  
        stonesPerLoc[2] = stonesPerLoc[2]+1; 
        total--;
        UpdateStones();
        checkLastPos(2,'player2',9);
        checkForWinner();
        break
    }
  };

  pos1_1.addEventListener('click', pos1_1_event);
 
  pos1_2_event = function (e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos1_2);
    switch(stonesPerLoc[2]){
      case 1:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        UpdateStones();
        checkLastPos(1,'player2',8);
        checkForWinner();
        break
      case 2:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        total-- ;
        UpdateStones();
        document.querySelector('p').innerHTML = 'Play again';
        checkForWinner();
        break
      case 3:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 4:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 5:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 6:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        total--;  
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 7:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[2] = 0; 
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 9:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;  
        total--;
        UpdateStones();
        checkLastPos(6,'player2',13);
        checkForWinner();
        break
      case 10:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;  
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        total--;  
        UpdateStones();
        checkLastPos(5,'player2',12);
        checkForWinner();
        break
      case 11:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;  
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;  
        total--;
        UpdateStones();
        checkLastPos(4,'player2',11);
        checkForWinner();
        break
      case 12:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;  
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;  
        stonesPerLoc[3] = stonesPerLoc[3]+1;  
        total--;
        UpdateStones();
        checkLastPos(3,'player2',10);
        checkForWinner();
        break
    }
  };  
 
  pos1_2.addEventListener('click', pos1_2_event);

  pos1_3_event = function (e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos1_3);
    switch(stonesPerLoc[3]){
      case 1:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        UpdateStones();
        checkLastPos(2,'player2',9);
        checkForWinner();
        break
      case 2:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        UpdateStones();
        checkLastPos(1,'player2',8);
        checkForWinner();
        break
      case 3:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        total--;
        UpdateStones();
        document.querySelector('p').innerHTML = 'Play again';
        checkForWinner();
        break
      case 4:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 5:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        total--; 
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 6:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 7:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1;  
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[3] = 0; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 9:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 10:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;   
        total--;  
        UpdateStones();
        checkLastPos(6,'player2',13);
        checkForWinner();
        break
      case 11:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;  
        stonesPerLoc[5] = stonesPerLoc[5]+1;    
        total--;
        UpdateStones();
        checkLastPos(5,'player2',12);
        checkForWinner();
        break
      case 12:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;  
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;   
        total--;
        UpdateStones();
        checkLastPos(4,'player2',11);
        checkForWinner();
        break
    }
  };  

  pos1_3.addEventListener('click', pos1_3_event);

  pos1_4_event = function(e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos1_4);
    switch(stonesPerLoc[4]){
      case 1:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        UpdateStones();
        checkLastPos(3,'player2',10);
        checkForWinner();
        break
      case 2:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        UpdateStones();
        checkLastPos(2,'player2',9);
        checkForWinner();
        break
      case 3:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        UpdateStones();
        checkLastPos(1,'player2',8);
        checkForWinner();
        break
      case 4:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        total--;
        UpdateStones();
        document.querySelector('p').innerHTML = 'Play again';
        checkForWinner();
        break
      case 5:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        total--; 
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 6:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 7:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[4] = 0; 
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 9:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 10:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;  
        total--;  
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 11:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;     
        total--;
        UpdateStones();
        checkLastPos(6,'player2',13);
        checkForWinner();
        break
      case 12:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;  
        stonesPerLoc[5] = stonesPerLoc[5]+1;     
        total--;
        UpdateStones();
        checkLastPos(5,'player2',12);
        checkForWinner();
        break
    }
  };  

  pos1_4.addEventListener('click', pos1_4_event);

  pos1_5_event = function(e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos1_5);
    switch(stonesPerLoc[5]){
      case 1:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        UpdateStones();
        checkLastPos(4,'player2',11);
        checkForWinner();
        break
      case 2:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        UpdateStones();
        checkLastPos(3,'player2',10);
        checkForWinner();
        break
      case 3:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        UpdateStones();
        checkLastPos(2,'player2',9);
        checkForWinner();
        break
      case 4:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        UpdateStones();
        checkLastPos(1,'player2',8);
        checkForWinner();
        break
      case 5:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        total--; 
        UpdateStones();
        document.querySelector('p').innerHTML = 'Play again';
        checkForWinner();
        break
      case 6:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 7:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[5] = 0; 
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 9:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 10:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        total--;  
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 11:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;    
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 12:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;      
        total--;
        UpdateStones();
        checkLastPos(6,'player2',13);
        checkForWinner();
        break
    }
  }; 

  pos1_5.addEventListener('click', pos1_5_event);

  pos1_6_event = function(e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos1_6);
    switch(stonesPerLoc[6]){
      case 1:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        UpdateStones();
        checkLastPos(5,'player2',12);
        checkForWinner();
        break
      case 2:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        UpdateStones();
        checkLastPos(4,'player2',11);
        checkForWinner();
        break
      case 3:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        UpdateStones();
        checkLastPos(3,'player2',10);
        checkForWinner();
        break
      case 4:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        UpdateStones();
        checkLastPos(2,'player2',9);
        checkForWinner();
        break
      case 5:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        UpdateStones();
        checkLastPos(1,'player2',8);
        checkForWinner();
        break
      case 6:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        total--;  
        UpdateStones();
        document.querySelector('p').innerHTML = 'Play again';
        checkForWinner();
        break
      case 7:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[6] = 0; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 9:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 10:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        total--;  
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 11:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1;     
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
      case 12:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;     
        total--;
        UpdateStones();
        updatePlayerDisplay('player2');
        checkForWinner();
        break
    }
  }; 
 
  pos1_6.addEventListener('click', pos1_6_event);

  pos2_1_event = function (e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos2_1);
    switch(stonesPerLoc[8]){
      case 1:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        UpdateStones();
        checkLastPos(9,'player1',2);
        checkForWinner();
        break
      case 2:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        UpdateStones();
        checkLastPos(10,'player1',3);
        checkForWinner();
        break
      case 3:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        UpdateStones();
        checkLastPos(11,'player1',4);
        checkForWinner();
        break
      case 4:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        UpdateStones();
        checkLastPos(12,'player1',5);
        checkForWinner();
        break
      case 5:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        UpdateStones();
        checkLastPos(13,'player1',6);
        checkForWinner();
        break
      case 6:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1;
        total--;  
        UpdateStones();
        document.querySelector('p').innerHTML = 'Play again';
        checkForWinner();
        break
      case 7:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[8] = 0; 
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 9:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 10:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 11:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 12:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;  
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
    }
  };

  pos2_1.addEventListener('click', pos2_1_event);

  pos2_2_event = function(e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos2_2);
    switch(stonesPerLoc[9]){
      case 1:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        UpdateStones();
        checkLastPos(10,'player1',3);
        checkForWinner();
        break
      case 2:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        UpdateStones();
        checkLastPos(11,'player1',4);
        checkForWinner();
        break
      case 3:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        UpdateStones();
        checkLastPos(12,'player1',5);
        checkForWinner();
        break
      case 4:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        UpdateStones();
        checkLastPos(13,'player1',6);
        checkForWinner();
        break
      case 5:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        total--; 
        UpdateStones();
        document.querySelector('p').innerHTML = 'Play again';
        checkForWinner();
        break
      case 6:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 7:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[9] = 0; 
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 9:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 10:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 11:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 12:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;  
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        total--;
        UpdateStones();
        checkLastPos(8,'player1',1);
        checkForWinner();
        break
    }
  };

  pos2_2.addEventListener('click', pos2_2_event);
  
  pos2_3_event = function (e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos2_3);
    switch(stonesPerLoc[10]){
      case 1:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1;
        UpdateStones();
        checkLastPos(11,'player1',4);
        checkForWinner();
        break
      case 2:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        UpdateStones();
        checkLastPos(12,'player1',5);
        checkForWinner();
        break
      case 3:
        stonesPerLoc[10] = 0; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        UpdateStones();
        checkLastPos(13,'player1',6);
        checkForWinner();
        break
      case 4:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        total--; 
        UpdateStones();
        document.querySelector('p').innerHTML = 'Play again';
        checkForWinner();
        break
      case 5:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 6:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 7:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[10] = 0; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 9:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 10:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 11:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        total--;
        UpdateStones();
        checkLastPos(8,'player1',1);
        checkForWinner();
        break
      case 12:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;  
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        stonesPerLoc[9] = stonesPerLoc[7]+1; 
        total--;
        UpdateStones();
        checkLastPos(9,'player1',2);
        checkForWinner();
        break
    }
  };

  pos2_3.addEventListener('click', pos2_3_event);
  
  pos2_4_event = function(e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos2_4);
    switch(stonesPerLoc[11]){
      case 1:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1;
        UpdateStones();
        checkLastPos(12,'player1',5);
        checkForWinner();
        break
      case 2:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        UpdateStones();
        checkLastPos(13,'player1',6);
        checkForWinner();
        break
      case 3:
        stonesPerLoc[11] = 0; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        total--; 
        UpdateStones();
        document.querySelector('p').innerHTML = 'Play again';
        checkForWinner();
        break
      case 4:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 5:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 6:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 7:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[11] = 0; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 9:
        stonesPerLoc[11] = 0; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1; 
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 10:
        stonesPerLoc[11] = 0; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        total--;  
        UpdateStones();
        checkLastPos(8,'player1',1);
        checkForWinner();
        break
      case 11:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        total--;
        UpdateStones();
        checkLastPos(9,'player1',2);
        checkForWinner();
        break
      case 12:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;  
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        stonesPerLoc[9] = stonesPerLoc[7]+1; 
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        total--;
        UpdateStones();
        checkLastPos(10,'player1',3);
        checkForWinner();
        break
    }
  };

  pos2_4.addEventListener('click', pos2_4_event);
  
  pos2_5_event = function(e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos2_5);
    switch(stonesPerLoc[12]){
      case 1:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        UpdateStones();
        checkLastPos(13,'player1',6);
        checkForWinner();
        break
      case 2:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        total--; 
        UpdateStones();
        document.querySelector('p').innerHTML = 'Play again';
        checkForWinner();
        break
      case 3:
        stonesPerLoc[12] = 0; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 4:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 5:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 6:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 7:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[12] = 0; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1; 
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 9:
        stonesPerLoc[12] = 0; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1; 
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        total--;
        UpdateStones();
        checkLastPos(8,'player1',1);
        checkForWinner();
        break
      case 10:
        stonesPerLoc[12] = 0; 
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        total--;  
        UpdateStones();
        checkLastPos(9,'player1',2);
        checkForWinner();
        break
      case 11:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        total--;
        UpdateStones();
        checkLastPos(10,'player1',3);
        checkForWinner();
        break
      case 12:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;  
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        stonesPerLoc[9] = stonesPerLoc[7]+1; 
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        total--;
        UpdateStones();
        checkLastPos(11,'player1',4);
        checkForWinner();
        break
    }
  };

  pos2_5.addEventListener('click', pos2_5_event);
  
  pos2_6_event = function(e) {
    document.querySelector('p').innerHTML = ' ';
    removeAllChildNodes(pos2_6);
    switch(stonesPerLoc[13]){
      case 1:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1;
        total--; 
        UpdateStones();
        document.querySelector('p').innerHTML = 'Play again';
        checkForWinner();
        break
      case 2:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 3:
        stonesPerLoc[13] = 0; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 4:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 5:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        total--; 
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 6:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1;
        stonesPerLoc[6] = stonesPerLoc[6]+1;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        total--;  
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 7:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1; 
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        total--;
        UpdateStones();
        updatePlayerDisplay('player1');
        checkForWinner();
        break
      case 8:
        stonesPerLoc[13] = 0; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1; 
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        total--;
        UpdateStones();
        checkLastPos(8,'player1',1);
        checkForWinner();
        break
      case 9:
        stonesPerLoc[13] = 0; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1; 
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        stonesPerLoc[9] = stonesPerLoc[9]+1; 
        total--;
        UpdateStones();
        checkLastPos(9,'player1',2);
        checkForWinner();
        break
      case 10:
        stonesPerLoc[13] = 0; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        total--;  
        UpdateStones();
        checkLastPos(10,'player1',3);
        checkForWinner();
        break
      case 11:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1;
        total--;
        UpdateStones();
        checkLastPos(11,'player1',4);
        checkForWinner();
        break
      case 12:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1;  
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        stonesPerLoc[2] = stonesPerLoc[2]+1;  
        stonesPerLoc[1] = stonesPerLoc[1]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        stonesPerLoc[9] = stonesPerLoc[7]+1; 
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        total--;
        UpdateStones();
        checkLastPos(11,'player1',4);
        checkForWinner();
        break
    }
  };

  pos2_6.addEventListener('click', pos2_6_event);

  resetBtn.addEventListener('click', (e) => {
      console.log('hello1');
      // clear all total and set initial condition
      reset();
  })


  
});  
  




    
   



