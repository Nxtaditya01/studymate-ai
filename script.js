function askAI(){

let question = document.querySelector("input").value.toLowerCase();
let answerBox = document.querySelector(".ai");

if(question.trim() === ""){
    answerBox.innerHTML = "❌ Pehle question likho";
}

else if(question.includes("photosynthesis")){
    answerBox.innerHTML = 
    "🌱 Photosynthesis ek process hai jisme plants sunlight, water aur carbon dioxide ki help se apna food banate hain.";
}

else if(question.includes("gravity")){
    answerBox.innerHTML =
    "🌍 Gravity ek force hai jo objects ko Earth ki taraf attract karta hai.";
}

else if(question.includes("hello") || question.includes("hi")){
    answerBox.innerHTML =
    "👋 Hello! Main StudyMate AI hu. Tum apna study doubt puch sakte ho.";
}
else{
    answerBox.innerHTML = "🤖 Mujhe is question ka answer dhoondhna padega.";
}
function openNotes(){
  let notes = localStorage.getItem("studyNotes");

  if(notes){
    document.querySelector(".ai").innerHTML =
    "📚 Your Notes:<br><br>" + notes;
  }else{
    alert("❌ Abhi koi notes saved nahi hai");
  }
}
function saveNotes(){
  let notes = prompt("Apne notes likho:");

  if(notes){
    localStorage.setItem("studyNotes", notes);
    alert("✅ Notes saved!");
  }
}