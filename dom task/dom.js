//1
formName=document.getElementById("formIme");
console.log(formName);


userName= document.querySelector('label[for="fname"]');
userName.textContent="User Name";

passWord= document.querySelector('label[for="lname"]');
passWord.textContent="Password";

passWordC= document.querySelector('label[for="wname"]');
passWordC.textContent="Confirm Password";

nameText=document.getElementById("fname");
passText=document.getElementById("lname");
passCText=document.getElementById("wname");


if (nameText.value  === "" ){
spanRequired=document.querySelector(".required-message");
spanRequired.textContent="Required";
spanRequired.style.color= "red";


}


if (passText.value === "" ){
    spanRequired1=document.querySelector(".required-message1");
    spanRequired1.textContent="Required";
    spanRequired1.style.color= "red";

    }

if (passCText.value === "" ){
    spanRequired2=document.querySelector(".required-message2");
    spanRequired2.textContent="Required";
    spanRequired2.style.color= "red";
}

if (passText.value !== passCText.value ){
    spanPassE=document.querySelector(".required-password");
    spanPassE.textContent="The password dosen't match";
    
}


if (passCText.value !== passText.value){
    console.log("not match");
}

