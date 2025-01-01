const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restart");
let options = ["","","","","","","","",""];
let currentPlayer = "X";

function checkWinner(currentPlayer,options){
    if(options[0] !="" && options[0]== options[1] && options[1]==options[2]
        ||
      options[3]!= "" && options[3]== options[4] && options[4]==options[5]
      ||
      options[6]!= "" && options[6]== options[7] && options[7]==options[8]
      ||
      options[0]!= "" && options[0]== options[4] && options[4]==options[8]
      ||
      options[2]!= "" && options[2]== options[4] && options[4]==options[6]
      ||
      options[1]!= "" && options[1]== options[4] && options[4]==options[7]
    ||
    options[2]!= "" && options[2]== options[5] && options[5]==options[8]
    ||
    options[0]!= "" && options[0]== options[3] && options[3]==options[6]

    ){
        statusText.innerText = `${currentPlayer} is the winner!`
        return true;
    }

}

function restart(){
    restartBtn.addEventListener("click" , (event)=>{
        cells.forEach((btn)=> btn.innerText = "");
        currentPlayer = "X";
        options = ["","","","","","","","",""];
        statusText.innerText = ""
;    })
}
function handleClick(){
    cells.forEach(btn=> btn.addEventListener("click",(event)=>
    {
        let id = Number(event.target.id);
        if(event.target.innerText==""){
            options[id] = currentPlayer;
            event.target.innerText = currentPlayer;
            checkWinner(currentPlayer,options);
            if(currentPlayer == "X"){
            currentPlayer = "O";
            }
            else{
                currentPlayer = "X";
            }
        }
    }))

}
handleClick();
restart();


