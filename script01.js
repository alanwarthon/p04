const btn01 = document.getElementById("btnProcess");
btn01.addEventListener("click",process01);

const msg01 = document.getElementById("txt01");
const msg02 = document.getElementById("txt02");
const txtMessage = document.getElementById("txtS");


function process01() {
  console.log("Hello");
  
  let welcomeMessage = "Welcome " + msg01.value +" "+ msg02.value;

  //show txtMessage in txtS
  txtMessage.textContent = welcomeMessage;
  msg01.value = "";
  msg02.value = " ";
  msg01.focus();

  console.log(welcomeMessage);
}