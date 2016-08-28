pad=document.getElementById('pad');
commands=[]
erorrmsg="command not found";
function keyPressHandler(e){
	var code = e.keyCode|| e.charCode;

	console.log(e);
	switch (code){
		

		case 8: //backspace
			backspace();break;
		case 16:
			shift();break;
		case 17:
			control();
		case 18:
			alt();break;
		case 38:
			arrowUp();break;
		case 39:
			arrowRight();break;
		case 40:
			arrowDown();break;
		case 37:
			arrowLeft();break;
		case 13:
			enter();break;
		case 91:break;
		default:
			charcter(e.key);break;


	}

}

currentCommand=document.getElementById('command');

document.addEventListener("keydown",keyPressHandler);

function backspace(){
	console.log("backspace");
	var command=currentCommand.innerHTML;
	command=command.substr(0,command.length-1);
	currentCommand.innerHTML=command
}
function shift(){
	console.log("shift");


}
function control(){
	console.log("control");
}

function alt(){
	console.log("alt");
}
function arrowDown(){
	console.log("Down");
}
function arrowUp(){
	console.log("Up");
}

function arrowLeft(){
	console.log("Left");
}

function arrowRight(){
	console.log("Right");
}

function enter(){
	console.log("enter");
	line=currentCommand.innerHTML;
	line.replace(/ +/gmi," ")
	line=line.split(' ')
	console.log(line);
	console.log(commands);
	if(!commands[line[0]])
		output(line[0] +": Unknown command")
	else{
		console.log(line[0]);
		commands[line[0]].process(line)
	}

	creatNewCommandContainer();
}
function output(msg){
	var emsg=document.createElement("div")
	 emsg.setAttribute("class","output")
	 emsg.innerHTML=msg
	document.body.appendChild(emsg)
}
function charcter(keyChar){
	currentCommand.innerHTML+=keyChar
	console.log(keyChar);
}

function creatNewCommandContainer(){
	var newPad=pad.cloneNode(true);
	pad.removeAttribute("id");
	pad.setAttribute("class","completed")
	currentCommand.removeAttribute("id");
	currentCommand=newPad.children[1];
	newPad.setAttribute("id","pad");
	currentCommand.setAttribute("id","command");
	currentCommand.innerHTML="";
	pad=newPad;
	document.getElementsByTagName('body')[0].appendChild(newPad);
}

commands['']={
	process:function (args){

	}
}


commands['abt']=new command("Hello my name is Omar Zahed<br/>Shoot me an email pizza[at]omarzahed.me<br/>","about me")

commands['fuck_off']=new command("Well! fuck you too","Grow up");

function command(msg,discription){
	this.msg=msg
	this.process=function(args){
		output(this.msg);
	}
	this.discription=discription
}


// commands['clear']=new command("","clear screen");

// commands['clear'].process=function(){
// 	$('.completed').remove();
// 	$('.output').remove();
//}
commands['help']=new command("", "print this msg");
for (var cmd in commands){
	if(cmd=="")continue;
	commands['help'].msg+=cmd+"::&#09;:: "+commands[cmd].discription +"<br>";
}

