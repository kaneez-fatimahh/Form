let profileImg = document.getElementById("profile-img");
let inputFile = document.getElementById("input-file");
let username = document.getElementById("username");
let name = document.getElementById("exampleName1");
let phone = document.getElementById("exampleInputPhone1");
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let container = document.getElementById("container");

// Empty All Feilds
const emptyFeilds = () => {
  name.value = "";
  phone.value = "";
  email.value = "";
  password.value = "";
  console.log("clear");
};
// Alert
const alert = (text, className) => {
  let parent = username.parentElement;
  let alert = document.createElement("div");
  alert.className = `alert alert-${className}`;
  alert.innerText = text;
  parent.insertBefore(alert, username);
  console.log("alert");
  setTimeout(() => {
    alert.remove();
  }, 3000);
};

//Display data on next page
const display = () => {
  let container2 = document.getElementById("container2");
  let getdata = JSON.parse(localStorage.getItem("formData"));
  console.log(getdata);
  let obtain = getdata;
  obtain.forEach((element) => {
    let card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "col-sm-12", "mb-5", "mt-3");
    card.classList.add("cards");
    card.innerHTML += ` <div class="card m-auto" style="width: 16rem;">
<img src="${element[4]}" class="card-img-top" alt="...">
  <h6 class=" px-2 mt-2">Name : ${element[0]}</h6>
  <h6 class="card-text mb-2 px-2 ">Phone : ${element[1]}</h6>
  <h6 class="card-text  px-2">Email : ${element[2]}</h6>
  <h6  class="card-text  px-2 mb-2" >Password : ${element[3]}</h6>
</div>
</div>  `;
    container2.appendChild(card);
  });
};

let submitform = (e) => {
  if (
    name.value == "" ||
    phone.value == "" ||
    email.value == "" ||
    password.value == ""
  ) {
    e.preventDefault();
    alert("Please fill all the feilds!", "danger");
  } else {
    event.preventDefault();
    let name = document.getElementById("exampleName1").value;
    let phone = document.getElementById("exampleInputPhone1").value;
    let email = document.getElementById("exampleInputEmail1").value;
    let password = document.getElementById("exampleInputPassword1").value;
    let img = profileImg.src;
    const formData = [name, phone, email, password, img];
    saveFormData(formData);
    emptyFeilds();
    window.location.href = "index2.html";
    display();
  }
};

function saveFormData(formData) {
  const storedFormData = JSON.parse(localStorage.getItem("formData")) || [];

  storedFormData.push(formData);

  localStorage.setItem("formData", JSON.stringify(storedFormData));
}
