let profileImg = document.getElementById("profile-img");
let inputFile = document.getElementById("input-file");
let username = document.getElementById("username");
let name = document.getElementById("exampleName1");
let phone = document.getElementById("exampleInputPhone1");
let email = document.getElementById("exampleInputEmail1");
let password = document.getElementById("exampleInputPassword1");
let container = document.getElementById("container");
//modal inputs
let modalName = document.getElementById("modalname");
let modalPhone = document.getElementById("modalphone");
let modalEmail = document.getElementById("modalemail");
let modalPassword = document.getElementById("modalpassword");
let modalImg = document.getElementById("modalpassword");
let container2 = document.getElementById("con2");
let entityIndex = document.getElementById("entityIndex");



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
  obtain.forEach((element,index) => {
    let card = document.createElement("div");
    card.classList.add("col-lg-4", "col-md-6", "col-sm-12", "mb-5", "mt-3");
    card.classList.add("cards");
    card.dataset.index = index;
    card.innerHTML += ` <div class="card m-auto" style="width: 16rem;">
<img src="${element[4]}" class="card-img-top" alt="...">
  <h6 class=" px-2 mt-2">Name : ${element[0]}</h6>
  <h6 class="card-text mb-2 px-2 ">Phone : ${element[1]}</h6>
  <h6 class="card-text  px-2">Email : ${element[2]}</h6>
  <h6  class="card-text  px-2 mb-2" >Password : ${element[3]}</h6>
  <div class="row">
  <div class="col-6 mb-2 text-end"> 
  <button type="button" class="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="update(${index})">Update</button>
  </div>
  <div class="col-6">
  <button type="button" class="btn btn-outline-danger" onclick="del(event,${index})">Delete</button>
  </div>
  </div>


</div>  `;
    container2.appendChild(card);
  });
};
//del function
const del =(e,index)=>{
  let getdata = JSON.parse(localStorage.getItem("formData"));
  let obtain= getdata;
  obtain.splice(index , 1);
  localStorage.setItem("formData", JSON.stringify(obtain));
  e.target.parentElement.parentElement.parentElement.parentElement.remove()
  console.log("dell")
}
//update function
let getdata = JSON.parse(localStorage.getItem("formData"));

const update = (index)=>{
  console.log("update")


 let modalinput = getdata[index]
 entityIndex.value = index;
  modalName.value = modalinput[0];
 modalPhone.value = modalinput[1];
 modalEmail.value = modalinput[2];
 modalPassword.value = modalinput[3];

//modalName.value = document.getElementById("exampleName1").value

}

const saveChanges = (e) => {
  e.preventDefault();

  let getEntityIndex = document.querySelector('#entityIndex').value;
  let getdataForUpdate = JSON.parse(localStorage.getItem("formData"));

  const filterDataforUpdate = getdataForUpdate.filter((item, index) => index === parseInt(getEntityIndex));

  if (filterDataforUpdate.length > 0) {
    const updatedEntity = filterDataforUpdate[0]; 
    updatedEntity[0] = document.getElementById("modalname").value;
    updatedEntity[1] = document.getElementById("modalphone").value;
    updatedEntity[2] = document.getElementById("modalemail").value;
    updatedEntity[3] = document.getElementById("modalpassword").value;

    localStorage.setItem("formData", JSON.stringify(getdataForUpdate));
    location.reload();

  } else {
    console.error("nooo");
  }
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
