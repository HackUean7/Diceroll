var playerName = [];
playerName[1] = prompt("Enter Your Name Player 1");
playerName[2] = prompt("Enter Your Name Player 2");
var currentScores=[0,0];
var player=1;
var num = 0 ,total=0;
var scores = [0,0];
var prev;
var rollDice = function() {	
num = parseInt(Math.ceil(Math.random()*6));
document.querySelector(".dice").src = 'dice'+num+'.png';
if(num!=1 && num!=prev){
currentScores[player-1] += num;
document.querySelector(".currentScore"+player).textContent = currentScores[player-1];	
	if(num==6){
		prev=num;
	}
	else {
		prev=0;
	}
}
 else if(num==1 || prev==num){
document.querySelector(".currentScore"+player).textContent = 0;	
currentScores[player-1]=0;
changePlayer();
}
}
var changePlayer = function() {
	scores[player-1]+=currentScores[player-1];	
	currentScores[player-1]=0;
	document.querySelector(".mainScore"+player).textContent = scores[player-1];		
	if (document.querySelector(".mainScore"+player).textContent >= 20) {
	document.querySelector(".mainScore"+player).textContent = "Winner";
	alert(playerName[player]+" is The Winner!");
																		}//This Part Will Change The Players On Call Of The Function Which Will Be Triggered By The Halt Button
else if (player==2)
{
	document.querySelector(".left").classList.add("active");
	document.querySelector(".right").classList.remove("active");
	player = 1;
}
else if (player==1){
	document.querySelector(".right").classList.add("active");
	document.querySelector(".left").classList.remove("active");
	player = 2;
}	
}
document.querySelector('.btn-left').addEventListener('click',rollDice);
document.querySelector('.btn-right').addEventListener('click',changePlayer);