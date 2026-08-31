function askAI(){

let question = document.querySelector("input").value;

let answerBox = document.querySelector(".ai");


if(question==""){
    answerBox.innerHTML="Please enter your question 🤔";
}
else{

answerBox.innerHTML=
"🤖 AI: "+question+" ka answer prepare ho raha hai...<br><br>"+
"📚 Pehle concept samjho, phir examples practice karo.";

}

}