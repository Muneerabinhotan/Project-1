
let gameBoard = document.querySelectorAll(".cell");
let playerTurn= true;
let count=0;
let textArea = document.querySelector("#textArea");
const modalBox = document.querySelector(".modal-box");
const text = document.querySelector(".text");

const scoreX = document.querySelector(".playerX");
const scoreO = document.querySelector(".playerO");
const scoreTie = document.querySelector(".tie");
countScoreX=1;
countScoreO=1;
countScoreTie=1;

let audio = new Audio("audio/woohoo.mp3");
let audio1 = new Audio("audio/lose.wav");

const startGame = function(){
if(playerTurn === true){
    this.innerText= "X";
    playerTurn=false;
    textArea.innerText="It's O turn";
}
else{
    this.innerText= "O";
    playerTurn= true;
    textArea.innerText="It's X turn";}
count++;
console.log(count);
winner();

//do not repeat the click on the clicked cells
this.removeEventListener("click", startGame)
}
for(let i=0 ; i<gameBoard.length ; i++){
    gameBoard[i].addEventListener("click", startGame)
}

const whoWon = function(){
    if(playerTurn == true){
        console.log("entered");
        audio.play();
        text.innerHTML+="<p>O is the winner</p>";
        scoreO.innerText=countScoreO++;
    }
    else if(playerTurn == false){
        console.log("entered");
        audio.play();
        text.innerHTML+="<p>X is the winner</p>";
        scoreX.innerHTML=countScoreX++;}
        

    
    
 //remove every event listener
for(let i=0 ; i<gameBoard.length ; i++){
    gameBoard[i].removeEventListener("click", startGame);}

}

const winner = function(){
   
    let cell0 = document.getElementById("0"),
     cell1 = document.getElementById("1"),
     cell2 = document.getElementById("2"),
     cell3 = document.getElementById("3"),
     cell4 = document.getElementById("4"),
     cell5 = document.getElementById("5"),
     cell6 = document.getElementById("6"),
     cell7 = document.getElementById("7"),
     cell8 = document.getElementById("8");

        
        if(cell0.innerHTML !== "" && cell0.innerHTML === cell1.innerHTML && cell0.innerHTML === cell2.innerHTML){
            cell0.style.background="grey";
            cell1.style.background="grey";
            cell2.style.background="grey";
            whoWon();
            modalBox.style.display = 'block'; 

            }


        else if(cell3.innerHTML !== "" && cell3.innerHTML === cell4.innerHTML && cell3.innerHTML === cell5.innerHTML){
            cell3.style.background="grey";
            cell4.style.background="grey";
            cell5.style.background="grey";            
            whoWon();
            modalBox.style.display = 'block'; 
        }

        else if(cell6.innerHTML !== "" && cell6.innerHTML === cell7.innerHTML && cell6.innerHTML === cell8.innerHTML){
            cell6.style.background="grey";
            cell7.style.background="grey";
            cell8.style.background="grey";
            whoWon();
            modalBox.style.display = 'block'; 
        }

        else if(cell0.innerHTML !== "" && cell0.innerHTML === cell3.innerHTML && cell0.innerHTML === cell6.innerHTML){
            cell0.style.background="grey";
            cell3.style.background="grey";
            cell6.style.background="grey";
            whoWon();
            modalBox.style.display = 'block'; 
        }

        else if(cell1.innerHTML !== "" && cell1.innerHTML === cell4.innerHTML && cell1.innerHTML === cell7.innerHTML){
            cell1.style.background="grey";
            cell4.style.background="grey";
            cell7.style.background="grey";
            whoWon();
            modalBox.style.display = 'block'; 
        }
        else if(cell2.innerHTML !== "" && cell2.innerHTML === cell5.innerHTML && cell2.innerHTML === cell8.innerHTML){
            cell2.style.background="grey";
            cell5.style.background="grey";
            cell8.style.background="grey";
            whoWon();
            modalBox.style.display = 'block'; 
        }

        else if(cell0.innerHTML !== "" && cell0.innerHTML === cell3.innerHTML && cell0.innerHTML === cell6.innerHTML){
            cell0.style.background="grey";
            cell3.style.background="grey";
            cell6.style.background="grey";
            whoWon();
            modalBox.style.display = 'block'; 
        }

        else if(cell0.innerHTML !== "" && cell0.innerHTML === cell4.innerHTML && cell0.innerHTML === cell8.innerHTML){
            cell0.style.background="grey";
            cell4.style.background="grey";
            cell8.style.background="grey";
            whoWon();
            modalBox.style.display = 'block'; 
        }

        else if(cell2.innerHTML !== "" && cell2.innerHTML === cell4.innerHTML && cell2.innerHTML === cell6.innerHTML){
            cell2.style.background="grey";
            cell4.style.background="grey";
            cell6.style.background="grey";
            whoWon();
            modalBox.style.display = 'block'; 
        }
        else if(count==9){
        textArea.innerText="It's a tie";
        scoreTie.innerHTML=countScoreTie++;
        audio1.play();

    }

        }


const newGame = function(){
console.log("clicked");        
for(let i=0 ; i<gameBoard.length ; i++){
    gameBoard[i].innerText="";
    gameBoard[i].style.background=" #ffffff url('image.png')";
    count=0;
    playerTurn= true;
    textArea.innerText="It's X turn";
    modalBox.style.display = "none"; 
    text.innerText="";
    gameBoard[i].addEventListener("click", startGame);
}}

const ResetScore = function(){
    for(let i=0 ; i<gameBoard.length ; i++){
        gameBoard[i].innerText="";
        gameBoard[i].style.background=" #ffffff url('image.png')";
        scoreX.innerText=0;
        countScoreX= 1;
        scoreO.innerText=0;
        countScoreO= 1;
        scoreTie.innerText=0;
        countScoreTie= 1;


        gameBoard[i].addEventListener("click", startGame);
}}


   
   
   