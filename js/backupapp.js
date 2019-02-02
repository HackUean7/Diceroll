var player=1;
var num = 0 ,total=0;
var scores = [0,0];

var rollDice = function() {	
num = parseInt(Math.ceil(Math.random()*6));
document.querySelector(".dice").src = 'dice'+num+'.png';
if(num!== 1){
scores[player-1] += num;
document.querySelector(".currentScore"+player).textContent = scores[player-1];	

	if (document.querySelector(".mainScore"+player).textContent >= 15) {
	document.querySelector(".mainScore"+player).textContent = "Winner";
	swal(
  'Good job!',
  'You clicked the button!',
  'success'
);
}
}
else if(num==1){
	scores[player-1]=0;
document.querySelector(".currentScore"+player).textContent = 0;	
changePlayer();
}
}
var changePlayer = function() {

	document.querySelector(".mainScore"+player).textContent = scores[player-1];	
	if (document.querySelector(".mainScore"+player).textContent >= 15) {
	document.querySelector(".mainScore"+player).textContent = "Winner";
	swal(
'Good job!',
'You Won! Player'+player,
'success'
);	
}
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