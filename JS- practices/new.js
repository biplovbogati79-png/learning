const form=document.getElementById("number");
const numberInput=document.getElementById("number-input");
const message=document.getElementById("message");
const secretnumber= Math.floor(Math.random()*100);

  form.addEventListener("submit", function(a) 
  {  
    a.preventDefault();
const  guess= Number(numberInput.value);
if (guess === 0){
    alert("enter greater number");
return;
}
if(guess >100){
    alert("enter smaller number");
    return;
  } 

   
  if( guess > secretnumber){
  message.textContent="smaller";}
  
  else if( guess< secretnumber){
  message.textContent="greater";}

  else{
  message.textContent="congratulation correct guess ";} });
  