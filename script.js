console.log("JS loaded");
function askAI(){

    let question = document.querySelector("input").value;
    let answerBox = document.querySelector(".ai");

    if(question.trim() === ""){
        answerBox.innerHTML = "❌ Pehle question likho";
    }
    else{
        answerBox.innerHTML = 
        "🤖 AI: Tumhara question hai - " + question + 
        "<br><br>📚 Main iska answer prepare kar raha hu.";
    }

}