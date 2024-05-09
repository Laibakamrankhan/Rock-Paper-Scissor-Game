
import inquirer from "inquirer"

let answer1 = await inquirer.prompt(
    {
        name : "player1",
        type:"list",
        message:"Chose 1 Option",
        choices:["Rock","Paper","Scissor"]
    })
    let answer2 = await inquirer.prompt(
    { 
        name:"player2",
        type:"list",
        message: "Chose 1 Option",
        choices:["Rock","Paper","Scissor"]
      

    })
if(answer1.player1==answer2.player2){
    console.log("Game tie");
}
else if((answer1.player1=="Rock"&&answer2.player2=="Paper")||(answer1.player1=="Scissor"&&answer2.player2=="Paper")||
(answer1.player1=="Rock"&&answer2.player2=="Scissor")){
    console.log("Player 1 win");   
}
else{
    console.log("Player 2 win"); 
}
