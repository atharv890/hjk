x = 0;
y = 0;
var value=0;
draw_apple = "";
apple="";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload(){
  apple=loadImage("apple.jpg");
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;
value=Number(content);
if(Number.isInteger(value)){
  document.getElementById("status").innerHTML = "Started drawing apple" + value; 
draw_apple="set";
}
else{
  document.getElementById("status").innerHTML = "Speech has not recognised as number"; 
}}
function setup() {
 canvas=createCanvas(500,500);
 canvas.position(500,150);
}

function draw() {
  if(draw_apple == "set")
  {
    for(i=1; i<=value; i++){
      x=Math.floor(Math.random()*400);
      y=Math.floor(Math.random()*400);
    image(apple,x,y,100,100);
    }
    document.getElementById("status").innerHTML = value + " Apples drawn";
    draw_apple = "";
    speak();
  }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data="Apples drawn"

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}