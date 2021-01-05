// list of variables
let player1Score = 0;
let player2Score = 0;
// Total number of marbles in the board, except the stores
let total = 48; 
// Board positions
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
// Functions for click event listener
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
// Represent the marbles
let imagem;
// Variable created to indicate player 2 or computer. The default is player 2.
let player = "player2";
let Player = "Player2"
// Selection for 1 or 2 players
let onePlayer;
let twoPlayers;
// It will be used to open an instruction box
let hToPlay;
// stonesPerLoc = [mP1 p1P1 p2P1 p3P1 p4P1 p5P1 p6P1 mP2 p1P2 p2P2 p3P2 p4P2 p5P2 p6P2]
let stonesPerLoc = [0,4,4,4,4,4,4,0,4,4,4,4,4,4];
// It is used to display the player turn
let display = ["Player1 Turn",".player1",".player2","Player2 Turn"];
// Variable created to print "Caputure" or "Play again" in html
let p;
// Variable created to print the result in html
let gameResult;
// Select the computer pit that makes the opponet to win less
let opt = [];
let count8 = 0;
let count9 = 0;
let count10 = 0;
let count11 = 0;
let count12 = 0;
let count13 = 0;
let value;
let modal;
let span;


// list of functions

function appendMarbles(){
  
  while (mPlayer1.children.length !== stonesPerLoc[0]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    mPlayer1.appendChild(imagem);
  }
  
  while (pos1_1.children.length !== stonesPerLoc[1]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos1_1.appendChild(imagem);
  }

  while (pos1_2.children.length !== stonesPerLoc[2]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos1_2.appendChild(imagem);
  }

  while (pos1_3.children.length !== stonesPerLoc[3]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos1_3.appendChild(imagem);
  }

  while (pos1_4.children.length !== stonesPerLoc[4]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos1_4.appendChild(imagem);
  }

  while (pos1_5.children.length !== stonesPerLoc[5]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos1_5.appendChild(imagem);
  }

  while (pos1_6.children.length !== stonesPerLoc[6]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos1_6.appendChild(imagem);
  }

  while (mPlayer2.children.length !== stonesPerLoc[7]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    mPlayer2.appendChild(imagem);
  }

  while (pos2_1.children.length !== stonesPerLoc[8]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos2_1.appendChild(imagem);
  }

  while (pos2_2.children.length !== stonesPerLoc[9]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos2_2.appendChild(imagem);
  }

  while (pos2_3.children.length !== stonesPerLoc[10]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos2_3.appendChild(imagem);
  }

  while (pos2_4.children.length !== stonesPerLoc[11]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos2_4.appendChild(imagem);
  }

  while (pos2_5.children.length !== stonesPerLoc[12]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos2_5.appendChild(imagem);
  }

  while (pos2_6.children.length !== stonesPerLoc[13]){
    imagem = document.createElement("img");
    imagem.src = "./marble.png";
    imagem.width = "20";
    pos2_6.appendChild(imagem);
  }
}
// Remove the marbles from the pit
function removeAllChildNodes(parent) {
  while (parent.firstChild){
    parent.removeChild(parent.firstChild);
  }
}

// Check last position has only 1 stone
function checkLastPos(lastPosition,pl, oppPosition){
  if (stonesPerLoc[lastPosition] === 1 && stonesPerLoc[oppPosition] !== 0){
    total = total -1 - stonesPerLoc[oppPosition];
    if (pl === "player1"){
      p.textContent = "CAPTURE";
      setTimeout(clearMessage,1000);
      stonesPerLoc[0] = stonesPerLoc[0] + 1 + stonesPerLoc[oppPosition];
    }else {
      p.textContent = "CAPTURE";
      setTimeout(clearMessage,1000);
      stonesPerLoc[7] = stonesPerLoc[7] + 1 + stonesPerLoc[oppPosition];
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
    appendMarbles();
  }
} 

// Clear message
function clearMessage(){
  p.textContent = " ";
}

// Update player and display
function updatePlayerDisplay(pl){
  setPlayer(pl);
  setDisplay(display);
}

// Computer position selection
function compSelection() {
  opt = [];
  count8 = 0;
  count9 = 0;
  count10 = 0;
  count11 = 0;
  count12 = 0;
  count13 = 0;
  switch(true){
    // Check the play again for pos2_6
    case (stonesPerLoc[13] === 1):
      console.log("1")
      setTimeout(()=>{pos2_6_event();},2000);
      break
    // Check the "Capture" positions
    case ((stonesPerLoc[13] === 8 && stonesPerLoc[1] !== 0 && stonesPerLoc[8] === 0) || (stonesPerLoc[13] === 9 && stonesPerLoc[2] !== 0 && stonesPerLoc[9] === 0) || (stonesPerLoc[13] === 10 && stonesPerLoc[3] !== 0 && stonesPerLoc[10] === 0) || (stonesPerLoc[13] === 11 && stonesPerLoc[4] !== 0 && stonesPerLoc[11] === 0) || (stonesPerLoc[13] === 12 && stonesPerLoc[5] !== 0 && stonesPerLoc[12] === 0)):
      console.log("2")
      setTimeout(()=>{pos2_6_event();},2000);
      break
    case ((stonesPerLoc[12] === 1 && stonesPerLoc[6] !== 0 && stonesPerLoc[13] === 0) || (stonesPerLoc[12] === 9 && stonesPerLoc[1] !== 0 && stonesPerLoc[8] === 0) || (stonesPerLoc[12] === 10 && stonesPerLoc[2] !== 0 && stonesPerLoc[9] === 0) || (stonesPerLoc[12] === 11 && stonesPerLoc[3] !== 0 && stonesPerLoc[10] === 0) || (stonesPerLoc[12] === 12 && stonesPerLoc[4] !== 0 && stonesPerLoc[11] === 0)):
      console.log("3")
      setTimeout(()=>{pos2_5_event();},2000); 
      break
    case ((stonesPerLoc[11] === 1 && stonesPerLoc[5] !== 0 && stonesPerLoc[12] === 0) || (stonesPerLoc[11] === 2 && stonesPerLoc[6] !== 0 && stonesPerLoc[12] === 0) || (stonesPerLoc[11] === 10 && stonesPerLoc[1] !== 0 && stonesPerLoc[8] === 0) || (stonesPerLoc[11] === 11 && stonesPerLoc[2] !== 0 && stonesPerLoc[9] === 0) || (stonesPerLoc[11] === 12 && stonesPerLoc[3] !== 0 && stonesPerLoc[10] === 0)):
      console.log("4")
      setTimeout(()=>{pos2_4_event();},2000);  
      break
    case ((stonesPerLoc[10] === 1 && stonesPerLoc[4] !== 0 && stonesPerLoc[11] === 0) || (stonesPerLoc[10] === 2 && stonesPerLoc[5] !== 0 && stonesPerLoc[12] === 0) || (stonesPerLoc[10] === 3 && stonesPerLoc[6] !== 0 && stonesPerLoc[13] === 0) || (stonesPerLoc[10] === 11 && stonesPerLoc[1] !== 0 && stonesPerLoc[8] === 0) || (stonesPerLoc[10] === 12 && stonesPerLoc[2] !== 0 && stonesPerLoc[9] === 0)):
      console.log("5")
      setTimeout(()=>{pos2_3_event();},2000);  
      break
    case ((stonesPerLoc[9] === 1 && stonesPerLoc[3] !== 0 && stonesPerLoc[10] === 0) || (stonesPerLoc[9] === 2 && stonesPerLoc[4] !== 0 && stonesPerLoc[11] === 0) || (stonesPerLoc[9] === 3 && stonesPerLoc[5] !== 0 && stonesPerLoc[12] === 0) || (stonesPerLoc[9] === 4 && stonesPerLoc[6] !== 0 && stonesPerLoc[13] === 0) || (stonesPerLoc[9] === 12 && stonesPerLoc[1] !== 0 && stonesPerLoc[8] === 0)):
      console.log("6")
      setTimeout(()=>{pos2_2_event();},2000);  
      break
    case ((stonesPerLoc[8] === 1 && stonesPerLoc[2] !== 0 && stonesPerLoc[9] === 0) || (stonesPerLoc[8] === 2 && stonesPerLoc[3] !== 0 && stonesPerLoc[10] === 0) || (stonesPerLoc[8] === 3 && stonesPerLoc[4] !== 0 && stonesPerLoc[11] === 0) || (stonesPerLoc[8] === 4 && stonesPerLoc[5] !== 0 && stonesPerLoc[12] === 0) || (stonesPerLoc[8] === 5 && stonesPerLoc[6] !== 0 && stonesPerLoc[13] === 0)):
      console.log("7")
      setTimeout(()=>{pos2_1_event();},2000);
      break
    //  Check the play again for pos2_1 to pos2_5 
    case (stonesPerLoc[12] === 2):
      console.log("8")
      setTimeout(()=>{pos2_5_event();},2000);
      break
    case (stonesPerLoc[11] === 3):
      console.log("9")
      setTimeout(()=>{pos2_4_event();},2000);
      break
    case (stonesPerLoc[10] === 4):
      console.log("10")
      setTimeout(()=>{pos2_3_event();},2000);
      break
    case (stonesPerLoc[9] === 5):
      setTimeout(()=>{pos2_2_event();},2000);
      console.log("11")
      break
    case (stonesPerLoc[8] === 6):
      setTimeout(()=>{pos2_1_event();},2000);
      console.log("12")
      break
    // Options to reduce the possibilty of play again for player 1  
    case (stonesPerLoc[1] === 1 && stonesPerLoc[13] === 7):
      setTimeout(()=>{pos2_6_event();},2000);
      console.log("13")
      break
    case (stonesPerLoc[1] === 1 && stonesPerLoc[12] === 8):
      setTimeout(()=>{pos2_5_event();},2000);
      console.log("14")
      break
    case (stonesPerLoc[1] === 1 && stonesPerLoc[11] === 9):
      setTimeout(()=>{pos2_4_event();},2000);
      console.log("15")
      break
    case (stonesPerLoc[1] === 1 && stonesPerLoc[10] === 10):
      setTimeout(()=>{pos2_3_event();},2000);
      console.log("16")
      break
    case (stonesPerLoc[1] === 1 && stonesPerLoc[9] === 11):
      setTimeout(()=>{pos2_2_event();},2000);
      console.log("17")
      break
    case (stonesPerLoc[1] === 1 && stonesPerLoc[8] === 12):
      setTimeout(()=>{pos2_1_event();},2000);
      console.log("18")
      break
    case (stonesPerLoc[2] === 2 && stonesPerLoc[13] === 6):
      setTimeout(()=>{pos2_6_event();},2000);
      console.log("19")
      break
    case (stonesPerLoc[2] === 2 && stonesPerLoc[12] === 7):
      setTimeout(()=>{pos2_5_event();},2000);
      console.log("20")
      break
    case (stonesPerLoc[2] === 2 && stonesPerLoc[11] === 8):
      setTimeout(()=>{pos2_4_event();},2000);
      console.log("21")
      break  
    case (stonesPerLoc[2] === 2 && stonesPerLoc[10] === 9):
      setTimeout(()=>{pos2_3_event();},2000);
      console.log("22")
      break
    case (stonesPerLoc[2] === 2 && stonesPerLoc[9] === 10):
      setTimeout(()=>{pos2_2_event();},2000);
      console.log("23")
      break
    case (stonesPerLoc[2] === 2 && stonesPerLoc[8] === 11):
      setTimeout(()=>{pos2_1_event();},2000);
      console.log("24")
      break
    case (stonesPerLoc[3] === 3 && stonesPerLoc[13] === 5):
      setTimeout(()=>{pos2_6_event();},2000);
      console.log("25")
      break
    case (stonesPerLoc[3] === 3 && stonesPerLoc[12] === 6):
      setTimeout(()=>{pos2_5_event();},2000);
      console.log("26")
      break
    case (stonesPerLoc[3] === 3 && stonesPerLoc[11] === 7):
      setTimeout(()=>{pos2_4_event();},2000);
      console.log("27")
      break
    case (stonesPerLoc[3] === 3 && stonesPerLoc[10] === 8):
      setTimeout(()=>{pos2_3_event();},2000);
      console.log("28")
      break
    case (stonesPerLoc[3] === 3 && stonesPerLoc[9] === 9):
      setTimeout(()=>{pos2_2_event();},2000); 
      console.log("29")
      break
    case (stonesPerLoc[3] === 3 && stonesPerLoc[8] === 10):
      setTimeout(()=>{pos2_1_event();},2000);
      console.log("30")
      break
    case (stonesPerLoc[4] === 4 && stonesPerLoc[13] === 4):
      setTimeout(()=>{pos2_6_event();},2000);
      console.log("31")
      break
    case (stonesPerLoc[4] === 4 && stonesPerLoc[12] === 5):
      setTimeout(()=>{pos2_5_event();},2000);
      console.log("32")
      break
    case (stonesPerLoc[4] === 4 && stonesPerLoc[11] === 6):
      setTimeout(()=>{pos2_4_event();},2000);
      console.log("33")
      break
    case (stonesPerLoc[4] === 4 && stonesPerLoc[10] === 7):
      setTimeout(()=>{pos2_3_event();},2000);
      console.log("34")
      break
    case (stonesPerLoc[4] === 4 && stonesPerLoc[9] === 8):
      setTimeout(()=>{pos2_2_event();},2000); 
      console.log("35")
      break
    case (stonesPerLoc[4] === 4 && stonesPerLoc[8] === 9):
      setTimeout(()=>{pos2_1_event();},2000);
      console.log("36")
      break
    case (stonesPerLoc[5] === 5 && stonesPerLoc[13] === 3):
      setTimeout(()=>{pos2_6_event();},2000);
      console.log("37")
      break
    case (stonesPerLoc[5] === 5 && stonesPerLoc[12] === 4):
      setTimeout(()=>{pos2_5_event();},2000);
      console.log("38")
      break
    case (stonesPerLoc[5] === 5 && stonesPerLoc[11] === 5):
      setTimeout(()=>{pos2_4_event();},2000);
      console.log("39")
      break
    case (stonesPerLoc[5] === 5 && stonesPerLoc[10] === 6):
      setTimeout(()=>{pos2_3_event();},2000);
      console.log("40")
      break
    case (stonesPerLoc[5] === 5 && stonesPerLoc[9] === 7):
      setTimeout(()=>{pos2_2_event();},2000); 
      console.log("41")
      break
    case (stonesPerLoc[5] === 5 && stonesPerLoc[8] === 8):
      setTimeout(()=>{pos2_1_event();},2000);
      console.log("42")
      break
    case (stonesPerLoc[6] === 6 && stonesPerLoc[13] === 2):
      setTimeout(()=>{pos2_6_event();},2000);
      console.log("43")
      break
    case (stonesPerLoc[6] === 6 && stonesPerLoc[12] === 3):
      setTimeout(()=>{pos2_5_event();},2000);
      console.log("44")
      break
    case (stonesPerLoc[6] === 6 && stonesPerLoc[11] === 4):
      setTimeout(()=>{pos2_4_event();},2000);
      console.log("45")
      break
    case (stonesPerLoc[6] === 6 && stonesPerLoc[10] === 5):
      setTimeout(()=>{pos2_3_event();},2000);
      console.log("46")
      break
    case (stonesPerLoc[6] === 6 && stonesPerLoc[9] === 6):
      setTimeout(()=>{pos2_2_event();},2000);  
      console.log("47")
      break
    case (stonesPerLoc[6] === 6 && stonesPerLoc[8] === 7):
      setTimeout(()=>{pos2_1_event();},2000);
      console.log("48")
      break
    case ((stonesPerLoc[1] + 1) === 1 || (stonesPerLoc[2] + 1) === 2 || (stonesPerLoc[3] + 1) === 3 || (stonesPerLoc[4] + 1) === 4 || (stonesPerLoc[5] + 1) === 5 || (stonesPerLoc[6] + 1) === 6 ):
      if ((stonesPerLoc[1] + 1) === 1){
        if (stonesPerLoc[8] !== 12 && stonesPerLoc[8] !== 0){
          opt.push(8);
        }
        if (stonesPerLoc[9] !== 11 && stonesPerLoc[9] !== 0){
          opt.push(9);
        }
        if (stonesPerLoc[10] !== 10 && stonesPerLoc[10] !== 0){
          opt.push(10);
        }
        if (stonesPerLoc[11] !== 9 && stonesPerLoc[11] !== 0){
          opt.push(11);
        }
        if (stonesPerLoc[12] !== 8 && stonesPerLoc[12] !== 0){
          opt.push(12);
        }
        if (stonesPerLoc[13] !== 7 && stonesPerLoc[13] !== 0){
          opt.push(13);
        }
      }
      if ((stonesPerLoc[2] + 1) === 2){
        if (stonesPerLoc[8] !== 11 && stonesPerLoc[8] !== 0){
          opt.push(8);
        }
        if (stonesPerLoc[9] !== 10 && stonesPerLoc[9] !== 0){
          opt.push(9);
        }
        if (stonesPerLoc[10] !== 9 && stonesPerLoc[10] !== 0){
          opt.push(10);
        }
        if (stonesPerLoc[11] !== 8 && stonesPerLoc[11] !== 0){
          opt.push(11);
        }
        if (stonesPerLoc[12] !== 7 && stonesPerLoc[12] !== 0){
          opt.push(12);
        }
        if (stonesPerLoc[13] !== 6 && stonesPerLoc[13] !== 0){
          opt.push(13);
        }
      }
      if ((stonesPerLoc[3] + 1) === 3){
        if (stonesPerLoc[8] !== 10 && stonesPerLoc[8] !== 0){
          opt.push(8);
        }
        if (stonesPerLoc[9] !== 9 && stonesPerLoc[9] !== 0){
          opt.push(9);
        }
        if (stonesPerLoc[10] !== 8 && stonesPerLoc[10] !== 0){
          opt.push(10);
        }
        if (stonesPerLoc[11] !== 7 && stonesPerLoc[11] !== 0){
          opt.push(11);
        }
        if (stonesPerLoc[12] !== 6 && stonesPerLoc[12] !== 0){
          opt.push(12);
        }
        if (stonesPerLoc[13] !== 5 && stonesPerLoc[13] !== 0){
          opt.push(13);
        }
      }
      if ((stonesPerLoc[4] + 1) === 4){
        if (stonesPerLoc[8] !== 9 && stonesPerLoc[8] !== 0){
          opt.push(8);
        }
        if (stonesPerLoc[9] !== 8 && stonesPerLoc[9] !== 0){
          opt.push(9);
        }
        if (stonesPerLoc[10] !== 7 && stonesPerLoc[10] !== 0){
          opt.push(10);
        }
        if (stonesPerLoc[11] !== 6 && stonesPerLoc[11] !== 0){
          opt.push(11);
        }
        if (stonesPerLoc[12] !== 5 && stonesPerLoc[12] !== 0){
          opt.push(12);
        }
        if (stonesPerLoc[13] !== 4 && stonesPerLoc[13] !== 0){
          opt.push(13);
        }
      }
      if ((stonesPerLoc[5] + 1) === 5){
        if (stonesPerLoc[8] !== 8 && stonesPerLoc[8] !== 0){
          opt.push(8);
        }
        if (stonesPerLoc[9] !== 7 && stonesPerLoc[9] !== 0){
          opt.push(9);
        }
        if (stonesPerLoc[10] !== 6 && stonesPerLoc[10] !== 0){
          opt.push(10);
        }
        if (stonesPerLoc[11] !== 5 && stonesPerLoc[11] !== 0){
          opt.push(11);
        }
        if (stonesPerLoc[12] !== 4 && stonesPerLoc[12] !== 0){
          opt.push(12);
        }
        if (stonesPerLoc[13] !== 3 && stonesPerLoc[13] !== 0){
          opt.push(13);
        }
      }
      if ((stonesPerLoc[6] + 1) === 6){
        if (stonesPerLoc[8] !== 7 && stonesPerLoc[8] !== 0){
          opt.push(8);
        }
        if (stonesPerLoc[9] !== 6 && stonesPerLoc[9] !== 0){
          opt.push(9);
        }
        if (stonesPerLoc[10] !== 5 && stonesPerLoc[10] !== 0){
          opt.push(10);
        }
        if (stonesPerLoc[11] !== 4 && stonesPerLoc[11] !== 0){
          opt.push(11);
        }
        if (stonesPerLoc[12] !== 3 && stonesPerLoc[12] !== 0){
          opt.push(12);
        }
        if (stonesPerLoc[13] !== 2 && stonesPerLoc[13] !== 0){
          opt.push(13);
        }
      }
      for (let i = 0; i < opt.length; i++){
        if (opt[i] === 8){
          count8++;
        }else if (opt[i] === 9){
          count9++;
        }else if (opt[i] === 10){
          count10++;
        }else if (opt[i] === 11){
          count11++;
        }else if (opt[i] === 12){
          count12++;
        }else if (opt[i] === 13){
          count13++;
        }
      }
      value = Math.max(count8,count9,count10,count11,count12,count13);
      if (value === count8){
        console.log("49")
        setTimeout(()=>{pos2_1_event();},2000);
      }else if (value === count9){
        setTimeout(()=>{pos2_2_event();},2000);
        console.log("50")
      }else if (value === count10){
        setTimeout(()=>{pos2_3_event();},2000);
        console.log("51")
      }else if (value === count11){
        setTimeout(()=>{pos2_4_event();},2000);
        console.log("52")
      }else if (value === count12){
        setTimeout(()=>{pos2_5_event();},2000);
        console.log("53")
      }else if (value === count13){
        setTimeout(()=>{pos2_6_event();},2000);
        console.log("54")
      }
      break
    case ((stonesPerLoc[1] + 1) !== 1 && (stonesPerLoc[2] + 1) !== 2 && (stonesPerLoc[3] + 1) !== 3 && (stonesPerLoc[4] + 1) !== 4 && (stonesPerLoc[5] + 1) !== 5 && (stonesPerLoc[6] + 1) !== 6 ):
      if (stonesPerLoc[8] !== 0){
        setTimeout(()=>{pos2_1_event();},2000);
        console.log("55")
      }else if (stonesPerLoc[9] !== 0){
        setTimeout(()=>{pos2_2_event();},2000);
        console.log("56")
      }else if (stonesPerLoc[10] !== 0){
        setTimeout(()=>{pos2_3_event();},2000);
        console.log("57")
      }else if (stonesPerLoc[11] !== 0){
        setTimeout(()=>{pos2_4_event();},2000);
        console.log("58")
      }else if (stonesPerLoc[12] !== 0){
        setTimeout(()=>{pos2_5_event();},2000);
        console.log("59")
      }else if (stonesPerLoc[13] !== 0){
        setTimeout(()=>{pos2_6_event();},2000);
        console.log("60")
      }
      break
  }
}

// Set player
function setPlayer(pl) {
  if (pl === "player1"){
    display[0] = "Player1 Turn";
    display[1] = ".player1";
    display[2] = ".player2";
    if (player === "computer"){
      display[3] = "Computer Turn";
    }else {
      display[3] = "Player2 Turn";
    }
    pos1_1.addEventListener("click", pos1_1_event);
    pos1_2.addEventListener("click", pos1_2_event);
    pos1_3.addEventListener("click", pos1_3_event);
    pos1_4.addEventListener("click", pos1_4_event);
    pos1_5.addEventListener("click", pos1_5_event);
    pos1_6.addEventListener("click", pos1_6_event);
    pos2_1.removeEventListener("click",pos2_1_event);
    pos2_2.removeEventListener("click",pos2_2_event);
    pos2_3.removeEventListener("click",pos2_3_event);
    pos2_4.removeEventListener("click",pos2_4_event);
    pos2_5.removeEventListener("click",pos2_5_event);
    pos2_6.removeEventListener("click",pos2_6_event);
  }else if (pl === "player2"){
    display[0] = "Player2 Turn";
    display[1] = ".player2";
    display[2] = ".player1"
    display[3] = "Player1 Turn";
    pos1_1.removeEventListener("click",pos1_1_event);
    pos1_2.removeEventListener("click",pos1_2_event);
    pos1_3.removeEventListener("click",pos1_3_event);
    pos1_4.removeEventListener("click",pos1_4_event);
    pos1_5.removeEventListener("click",pos1_5_event);
    pos1_6.removeEventListener("click",pos1_6_event);
    pos2_1.addEventListener("click", pos2_1_event);
    pos2_2.addEventListener("click", pos2_2_event);
    pos2_3.addEventListener("click", pos2_3_event);
    pos2_4.addEventListener("click", pos2_4_event);
    pos2_5.addEventListener("click", pos2_5_event);
    pos2_6.addEventListener("click", pos2_6_event);
  }else {
    display[0] = "Computer Turn";
    display[1] = ".player2";
    display[2] = ".player1"
    display[3] = "Player1 Turn";
    pos1_1.removeEventListener("click",pos1_1_event);
    pos1_2.removeEventListener("click",pos1_2_event);
    pos1_3.removeEventListener("click",pos1_3_event);
    pos1_4.removeEventListener("click",pos1_4_event);
    pos1_5.removeEventListener("click",pos1_5_event);
    pos1_6.removeEventListener("click",pos1_6_event);
    pos2_1.removeEventListener("click",pos2_1_event);
    pos2_2.removeEventListener("click",pos2_2_event);
    pos2_3.removeEventListener("click",pos2_3_event);
    pos2_4.removeEventListener("click",pos2_4_event);
    pos2_5.removeEventListener("click",pos2_5_event);
    pos2_6.removeEventListener("click",pos2_6_event);
    compSelection();
  }
}

// Set display
function setDisplay(display){
  document.querySelector(display[1]).innerHTML = display[0];
  document.querySelector(display[2]).innerHTML ="";
}

// Check for winner
function checkForWinner(){
  if (stonesPerLoc[1] === 0 && stonesPerLoc[2] === 0 && stonesPerLoc[3] === 0 && stonesPerLoc[4] === 0 && stonesPerLoc[5] === 0 && stonesPerLoc[6] === 0) {
    stonesPerLoc[7]+=total;
    clearBoard(player);
    appendMarbles();
    printResult();
  }else if (stonesPerLoc[8] === 0 && stonesPerLoc[9] === 0 && stonesPerLoc[10] === 0 && stonesPerLoc[11] === 0 && stonesPerLoc[12] === 0 && stonesPerLoc[13] === 0){
    stonesPerLoc[0]+=total;
    clearBoard("player1");
    appendMarbles();
    printResult();
  }else {
  // game is on
  }
  
}

function printResult(){
  if (stonesPerLoc[0] > stonesPerLoc[7]){
    player1Score++;
    document.querySelector(".player1Score").innerHTML = `Player1 Score: ${player1Score}`;  
    gameResult.textContent = "Player 1 is the winner!";
  }else if (stonesPerLoc[0] < stonesPerLoc[7]){
    player2Score++;
    document.querySelector(".player2Score").innerHTML = `${Player} Score: ${player2Score}`;
    gameResult.textContent = "Player 2 is the winner!";
  }else {
    gameResult.textContent = "There is a tie!";
  }
}


function clearBoard(pl){
  if (pl === "player1") {
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
  removeAllChildNodes(pos1_1);
  removeAllChildNodes(pos1_2);
  removeAllChildNodes(pos1_3);
  removeAllChildNodes(pos1_4);
  removeAllChildNodes(pos1_5);
  removeAllChildNodes(pos1_6);
  removeAllChildNodes(mPlayer2);
  removeAllChildNodes(pos2_1);
  removeAllChildNodes(pos2_2);
  removeAllChildNodes(pos2_3);
  removeAllChildNodes(pos2_4);
  removeAllChildNodes(pos2_5);
  removeAllChildNodes(pos2_6);
  appendMarbles();
  display = ["Player1 Turn",".player1",".player2",player];
  updatePlayerDisplay("player1")
  p.textContent =" ";
  gameResult.textContent = " ";
}

// Page loads
document.addEventListener("DOMContentLoaded", (e) => {

  mPlayer1 = document.querySelector(".MancalaPlayer1");
  mPlayer2 = document.querySelector(".MancalaPlayer2");
  pos1_1 = document.querySelector(".pits1Player1");
  pos1_2 = document.querySelector(".pits2Player1");
  pos1_3 = document.querySelector(".pits3Player1");
  pos1_4 = document.querySelector(".pits4Player1");
  pos1_5 = document.querySelector(".pits5Player1");
  pos1_6 = document.querySelector(".pits6Player1");
  pos2_1 = document.querySelector(".pits1Player2");
  pos2_2 = document.querySelector(".pits2Player2");
  pos2_3 = document.querySelector(".pits3Player2");
  pos2_4 = document.querySelector(".pits4Player2");
  pos2_5 = document.querySelector(".pits5Player2");
  pos2_6 = document.querySelector(".pits6Player2");
  gameResult = document.querySelector(".gameResult");
  onePlayer = document.querySelector(".onePlayer");
  twoPlayers = document.querySelector(".twoPlayers");
  hToPlay = document.querySelector(".hToPlay");
  modal = document.querySelector(".modal");
  span = document.getElementsByClassName("close")[0];
  p = document.querySelector("p");
  document.querySelector(".player1Score").innerHTML =`Player1 Score: ${player1Score}`;
  document.querySelector(".player2Score").innerHTML =`${Player} Score: ${player2Score}`;
  resetBtn = document.querySelector(".reset");
  appendMarbles();
  
    
  onePlayer.addEventListener("click", (e) =>{
    if (player === "player2"){
      player1Score = 0;
      player2Score = 0;
      document.querySelector(".player1Score").innerHTML =`Player1 Score: ${player1Score}`;
      document.querySelector(".player2Score").innerHTML =`${Player} Score: ${player2Score}`;
    }
    player = "computer";
    Player = "Computer"
  });

  twoPlayers.addEventListener("click", (e) =>{
    if (player === "computer"){
      player1Score = 0;
      player2Score = 0;
      document.querySelector(".player1Score").innerHTML =`Player1 Score: ${player1Score}`;
      document.querySelector(".player2Score").innerHTML =`${Player} Score: ${player2Score}`;
    }
    player = "player2";
    Player = "Player2";

  });

  // Popup the instrunction
  hToPlay.addEventListener("click", (e) =>{
    modal.style.display = "block";
  });

  span.onclick = function(event) {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  pos1_1_event = function (e) {
    p.textContent = " ";
    removeAllChildNodes(pos1_1);
    switch(stonesPerLoc[1]){
      case 1:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        total--; 
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
        break
      case 2:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        total-- ;
        appendMarbles();
        updatePlayerDisplay(player);
        break
      case 3:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1; 
        total--;
        appendMarbles();
        updatePlayerDisplay(player);
        break
      case 4:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        total--;
        appendMarbles();
        updatePlayerDisplay(player);
        break
      case 5:
        stonesPerLoc[1] = 0;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(6,"player1",13);
        checkForWinner();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(5,"player1",12);
        checkForWinner();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(4,"player1",11);
        checkForWinner();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(3,"player1",10);
        checkForWinner();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(2,"player1",9);
        checkForWinner();
        updatePlayerDisplay(player);
        break
    }
  };
 
  pos1_2_event = function (e) {
    p.textContent = " ";
    removeAllChildNodes(pos1_2);
    switch(stonesPerLoc[2]){
      case 1:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        appendMarbles();
        checkLastPos(1,"player1",8);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 2:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        total-- ;
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
        break
      case 3:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1; 
        total--;
        appendMarbles();
        updatePlayerDisplay(player);
        break
      case 4:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1; 
        total--;
        appendMarbles();
        updatePlayerDisplay(player);
        break
      case 5:
        stonesPerLoc[2] = 0;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(6,"player1",13);
        checkForWinner();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(5,"player1",12);
        checkForWinner();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(4,"player1",11);
        checkForWinner();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(3,"player1",10);
        checkForWinner();
        updatePlayerDisplay(player);
        break
    }
  };  

  pos1_3_event = function (e) {
    p.textContent = " ";
    removeAllChildNodes(pos1_3);
    switch(stonesPerLoc[3]){
      case 1:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        appendMarbles();
        checkLastPos(2,"player1",9);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 2:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        appendMarbles();
        checkLastPos(1,"player1",8);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 3:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        total--;
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
        break
      case 4:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        total--;
        appendMarbles();
        updatePlayerDisplay(player);
        break
      case 5:
        stonesPerLoc[3] = 0;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        total--; 
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(6,"player1",13);
        checkForWinner();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(5,"player1",12);
        checkForWinner();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(4,"player1",11);
        checkForWinner();
        updatePlayerDisplay(player);
        break
    }
  };  

  pos1_4_event = function(e) {
    p.textContent = " ";
    removeAllChildNodes(pos1_4);
    switch(stonesPerLoc[4]){
      case 1:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        appendMarbles();
        checkLastPos(3,"player1",10);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 2:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        appendMarbles();
        checkLastPos(2,"player1",9);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 3:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        appendMarbles();
        checkLastPos(1,"player1",8);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 4:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1;
        total--;
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
        break
      case 5:
        stonesPerLoc[4] = 0;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        stonesPerLoc[8] = stonesPerLoc[8]+1;
        total--; 
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(6,"player1",13);
        checkForWinner();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(5,"player1",12);
        checkForWinner();
        updatePlayerDisplay(player);
        break
    }
  };  

  pos1_5_event = function(e) {
    p.textContent = " ";
    removeAllChildNodes(pos1_5);
    switch(stonesPerLoc[5]){
      case 1:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        appendMarbles();
        checkLastPos(4,"player1",11);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 2:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        appendMarbles();
        checkLastPos(3,"player1",10);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 3:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        appendMarbles();
        checkLastPos(2,"player1",9);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 4:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        appendMarbles();
        checkLastPos(1,"player1",8);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 5:
        stonesPerLoc[5] = 0;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        stonesPerLoc[0] = stonesPerLoc[0]+1; 
        total--; 
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkLastPos(6,"player1",13);
        checkForWinner();
        updatePlayerDisplay(player);
        break
    }
  }; 

  pos1_6_event = function(e) {
    p.textContent = " ";
    removeAllChildNodes(pos1_6);
    switch(stonesPerLoc[6]){
      case 1:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        appendMarbles();
        checkLastPos(5,"player1",12);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 2:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        appendMarbles();
        checkLastPos(4,"player1",11);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 3:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        appendMarbles();
        checkLastPos(3,"player1",10);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 4:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        appendMarbles();
        checkLastPos(2,"player1",9);
        checkForWinner();
        updatePlayerDisplay(player);
        break
      case 5:
        stonesPerLoc[6] = 0;
        stonesPerLoc[5] = stonesPerLoc[5]+1;
        stonesPerLoc[4] = stonesPerLoc[4]+1;
        stonesPerLoc[3] = stonesPerLoc[3]+1;
        stonesPerLoc[2] = stonesPerLoc[2]+1;
        stonesPerLoc[1] = stonesPerLoc[1]+1;
        appendMarbles();
        checkLastPos(1,"player1",8);
        checkForWinner();
        updatePlayerDisplay(player);
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
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
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
        appendMarbles();
        updatePlayerDisplay(player);
        break
    }
  }; 

  pos2_1_event = function (e) {
    p.textContent = " ";
    removeAllChildNodes(pos2_1);
    switch(stonesPerLoc[8]){
      case 1:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        appendMarbles();
        checkLastPos(9,player,2);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 2:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        appendMarbles();
        checkLastPos(10,player,3);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 3:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        appendMarbles();
        checkLastPos(11,player,4);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 4:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        appendMarbles();
        checkLastPos(12,player,5);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 5:
        stonesPerLoc[8] = 0;
        stonesPerLoc[9] = stonesPerLoc[9]+1;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        appendMarbles();
        checkLastPos(13,player,6);
        checkForWinner();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
        if (display[0] === "Computer Turn"){
          compSelection();
        }
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
        break
    }
  };

    pos2_2_event = function(e) {
    p.textContent = " ";
    removeAllChildNodes(pos2_2);
    switch(stonesPerLoc[9]){
      case 1:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        appendMarbles();
        checkLastPos(10,player,3);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 2:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        appendMarbles();
        checkLastPos(11,player,4);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 3:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        appendMarbles();
        checkLastPos(12,player,5);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 4:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        appendMarbles();
        checkLastPos(13,player,6);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 5:
        stonesPerLoc[9] = 0;
        stonesPerLoc[10] = stonesPerLoc[10]+1; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        total--; 
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
        if (display[0] === "Computer Turn"){
          compSelection();
        }
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(8,player,1);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
    }
  };
  
  pos2_3_event = function (e) {
    p.textContent = " ";
    removeAllChildNodes(pos2_3);
    switch(stonesPerLoc[10]){
      case 1:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1;
        appendMarbles();
        checkLastPos(11,player,4);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 2:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        appendMarbles();
        checkLastPos(12,player,5);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 3:
        stonesPerLoc[10] = 0; 
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        appendMarbles();
        checkLastPos(13,player,6);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 4:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        total--; 
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
        if (display[0] === "Computer Turn"){
          compSelection();
        }
        break
      case 5:
        stonesPerLoc[10] = 0;
        stonesPerLoc[11] = stonesPerLoc[11]+1; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(8,player,1);
        checkForWinner();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(9,player,2);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
    }
  };
  
  pos2_4_event = function(e) {
    p.textContent = " ";
    removeAllChildNodes(pos2_4);
    switch(stonesPerLoc[11]){
      case 1:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1;
        appendMarbles();
        checkLastPos(12,player,5);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 2:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        appendMarbles();
        checkLastPos(13,player,6);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 3:
        stonesPerLoc[11] = 0; 
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        total--; 
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
        if (display[0] === "Computer Turn"){
          compSelection();
        }
        break
      case 4:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay("player1");
        break
      case 5:
        stonesPerLoc[11] = 0;
        stonesPerLoc[12] = stonesPerLoc[12]+1; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(8,player,1);
        checkForWinner();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(9,player,2);
        checkForWinner();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(10,player,3);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
    }
  };
  
  pos2_5_event = function(e) {
    p.textContent = " ";
    removeAllChildNodes(pos2_5);
    switch(stonesPerLoc[12]){
      case 1:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1;
        appendMarbles();
        checkLastPos(13,player,6);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
      case 2:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        total--; 
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
        if (display[0] === "Computer Turn"){
          compSelection();
        }
        break
      case 3:
        stonesPerLoc[12] = 0; 
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay("player1");
        break
      case 4:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay("player1");
        break
      case 5:
        stonesPerLoc[12] = 0;
        stonesPerLoc[13] = stonesPerLoc[13]+1; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(8,player,1);
        checkForWinner();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(9,player,2);
        checkForWinner();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(10,player,3);
        checkForWinner();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(11,player,4);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
    }
  };
  
  pos2_6_event = function(e) {
    p.textContent = " ";
    removeAllChildNodes(pos2_6);
    switch(stonesPerLoc[13]){
      case 1:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1;
        total--; 
        appendMarbles();
        checkForWinner();
        p.textContent = "Play again";
        setTimeout(clearMessage,1000);
        if (display[0] === "Computer Turn"){
          compSelection();
        }
        break
      case 2:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay("player1");
        break
      case 3:
        stonesPerLoc[13] = 0; 
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay("player1");
        break
      case 4:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay("player1");
        break
      case 5:
        stonesPerLoc[13] = 0;
        stonesPerLoc[7] = stonesPerLoc[7]+1; 
        stonesPerLoc[6] = stonesPerLoc[6]+1; 
        stonesPerLoc[5] = stonesPerLoc[5]+1; 
        stonesPerLoc[4] = stonesPerLoc[4]+1; 
        stonesPerLoc[3] = stonesPerLoc[3]+1; 
        total--; 
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(8,player,1);
        checkForWinner();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(9,player,2);
        checkForWinner();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(10,player,3);
        checkForWinner();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(11,player,4);
        checkForWinner();
        updatePlayerDisplay("player1");
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
        appendMarbles();
        checkLastPos(12,player,5);
        checkForWinner();
        updatePlayerDisplay("player1");
        break
    }
  };

  pos1_1.addEventListener("click", pos1_1_event);
  pos1_2.addEventListener("click", pos1_2_event);
  pos1_3.addEventListener("click", pos1_3_event);
  pos1_4.addEventListener("click", pos1_4_event);
  pos1_5.addEventListener("click", pos1_5_event);
  pos1_6.addEventListener("click", pos1_6_event);

  resetBtn.addEventListener("click", (e) => {
      console.log("hello1");
      // clear all total and set initial condition
      reset();
  })


  
});  
  




    
   



