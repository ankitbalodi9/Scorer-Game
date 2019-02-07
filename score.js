var p1button = document.querySelector("#p1button");
var p2button = document.querySelector("#p2button");
var resetbutton = document.getElementById("reset");
var p1display = document.getElementById("p1score");
var p2display = document.getElementById("p2score");
var total =  document.querySelector("#limit");
var number = document.querySelector("input");
var p1score = 0;
var p2score = 0;
var limit = 7;
var check = false;

p1button.addEventListener("click", function(){	
	if(!check){
		p1score++;
		if(limit === p1score)
		{
			check = true;		
			p1display.classList.add("winner");
		}
	p1display.textContent = p1score;	
	}
});

p2button.addEventListener("click", function(){
	if(!check){
		p2score++;
		if(limit === p2score)
		{	
			check = true;
			p2display.classList.add("winner");
		}				
	p2display.textContent = p2score;
	}
});

resetbutton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1display.textContent = 0;
	p1score = 0;
	p2score = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	check = false;
};

number.addEventListener("change", function(){
	total.textContent = this.value;
	limit = Number(this.value);
	reset();
});