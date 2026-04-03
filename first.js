let quotes = [
  "Believe in yourself.",
  "Stay hungry, stay foolish.",
  "Dream big, work hard.",
  "Never give up.",
  "Success is a journey, not a destination.",
  "Be yourself; everyone else is taken.",
  "Do what you love.",
  "Hard work beats talent.",
  "Stay positive.",
  "Time is precious.",
  "Push yourself every day.",
  "Failure is the stepping stone to success.",
  "Consistency is the key.",
  "Knowledge is power.",
  "Practice makes perfect.",
  "Stay focused and never quit.",
  "Your only limit is you.",
  "Think big, act bigger.",
  "Start now, not later.",
  "Make it happen."
];
function baby(){

const quote=document.getElementById("random")
const index=Math.floor(Math.random(quotes)*quotes.length);
quote.textContent=quotes[index]
}
baby();
setInterval(baby,2000);
let colors = ["red", "blue", "green", "yellow", "purple", "orange"];

setInterval(() => {
    let random = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[random];
}, 2000);