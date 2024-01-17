let profileImg = document.getElementById("profile-img");
let inputFile = document.getElementById("input-file");
let username = document.getElementById("username");
let name = document.getElementById("exampleName1");
let phone = document.getElementById("exampleInputPhone1");
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let container = document.getElementById("container");
let container2 = document.getElementById("containerr");
let cardboday = document.querySelectorAll(".card-body");


// Empty All Feilds
const emptyFeilds = ()=>{
    name.value = "";
    phone.value = "";
    email.value = "";
    password.value = "";
    console.log("clear")
}
// Alert 
const alert = (text , className)=>{
 let   parent = username.parentElement
let alert = document.createElement("div");
 alert.className = `alert alert-${className}`
alert.innerText =text;
parent.insertBefore(alert,username);
console.log("alert");
setTimeout(() => {
    alert.remove();
}, 3000);
}

//Display data on next page
const display = ()=>{
 const getname = localStorage.getItem("name");
  const getphone = localStorage.getItem("phone");
  const getemail = localStorage.getItem("email");
  const getpassword = localStorage.getItem("password");
  let card =  document.createElement("div");
  card.setAttribute("class","card" );
  card.style.width = "18rem";
  card.innerHTML += `  <h5 class="text-body-secondary px-2">Name:${getname}</h5>
  <h5 class="card-subtitle mb-2 text-body-secondary px-2">Phone No:${getphone}</h5>
  <h5 class="card-text text-body-secondary px-2">Email:${getemail}</h5>
  <h5  class="card-text text-body-secondary px-2" >Password${getpassword}</h5>`
container2.appendChild(card)
 }

//Submit function
let submitform = (e)=>{
    if (name.value == "" || phone.value == "" ||email.value == ""||password.value == "") {
        e.preventDefault();
        alert("Please fill all the feilds!", "danger");
    }else{

         e.preventDefault();
        localStorage.setItem("name",name.value);
    localStorage.setItem("phone",phone.value);
    localStorage.setItem("email",email.value);
    localStorage.setItem("password",password.value);
        emptyFeilds();
        window.location.href = "index2.html"
        display();
        console.log("hy")
    }
     
}

