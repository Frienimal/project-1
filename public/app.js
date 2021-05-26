const PetInfo = document.querySelector("#Pet-info");
const form2 = document.querySelector("#add-pets-form");

function renderPetInfo(doc) {
  let li = document.createElement("li");
  let Pet_Name = document.createElement("span");
  let Pet_Type = document.createElement("span");
  let vaccination = document.createElement("span");
  let Pet_Residence = document.createElement("span");
  let Email = document.createElement("span");
  let Name = document.createElement("span");
  let Phone_no = document.createElement("span");
  let cross = document.createElement("div");

  li.setAttribute("data-id", doc.id);
  Pet_Name.textContent = doc.data().PetName;
  Pet_Type.textContent = doc.data().PetType;
  vaccination.textContent = doc.data().Vaccination;
  Pet_Residence.textContent = doc.data().PetResidence;
  Email.textContent = doc.data().Email;
  Name.textContent = doc.data().Name;
  Phone_no.textContent = doc.data().PhoneNo;
  cross.textContent = "x";

  li.appendChild(Pet_Name);
  li.appendChild(Pet_Type);
  li.appendChild(vaccination);
  li.appendChild(Pet_Residence);
  li.appendChild(Email);
  li.appendChild(Name);
  li.appendChild(Phone_no);
  

  //deleting data
  // cross.addEventListener("click", (e) => {
  //   e.stopPropagation();
  //   let id = e.target.parentElement.getAttribute("data-id");
  //   db.collection("PetForm").doc(id).delete();
  // });

  PetInfo.appendChild(li);
}

// getting data
//add .where() to for queries
//orderby() for displaying data in an order
db.collection("PetForm").get().then((Snapshot) => {
    Snapshot.docs.forEach((doc) => {
      renderPetInfo(doc);
    });
  });

//Saving Data
form2.addEventListener("submit", (e) => {
  e.preventDefault();
  db.collection("PetForm").add({
    PetName: form2.Petname.value,
    PetType: form2.Type.value,
    Vaccination: form2.Vaccination.value,
    Name: form2.Name.value,
    Email: form2.Email.value,
    PhoneNo: form2.PhoneNo.value,
    PetResidence: form2.Resi.value,
  });
  form2.Petname.value = '';
  form2.Type.value = '';
  form2.Vaccination.value = '';
  form2.Name.value = '';
  form2.Email.value = '';
  form2.PhoneNo.value = '';
  form2.Resi.value = '';
});

