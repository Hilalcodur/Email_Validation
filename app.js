let myButton=document.getElementById("btn");

myButton.addEventListener('click', ()=>{
    validation();
})

function validation() {
let form=document.getElementById("form")
let myMail=document.getElementById("mail").value;

let myResult=document.getElementById("result");

var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if (myMail.match(pattern))
{
    blue();
    form.classList.add("valid")
    form.classList.remove("invalid");
    myResult.innerHTML="Your Email Address in Valid.";
}
else {
    red();
    form.classList.remove("valid")
    form.classList.add("invalid");
    myResult.innerHTML="Please Enter Valid Email Address"
    
}
}

function blue(){
    document.getElementById('result').style.color="blue";
}

function red(){
    document.getElementById('result').style.color="red";
}

