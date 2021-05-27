var firebaseConfig = {
  apiKey: "AIzaSyCLTQaJIOwSqjmStSlQhl_1YEU0GX3pryw",
  authDomain: "frienimal.firebaseapp.com",
  databaseURL: "https://frienimal.firebaseio.com",
  projectId: "frienimal",
  storageBucket: "frienimal.appspot.com",
  messagingSenderId: "264888471735",
  appId: "1:264888471735:web:b0dce2f4206e31994e3d32",
  measurementId: "G-4BGZRKHGG6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();
const db = firebase.firestore();

function signUp() {
var email = document.getElementById("email");
var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );
  promise.catch((e) => alert(e.message));

  alert("Signed Up");
}

//add pet

const form2 = document.querySelector("#add-pets-form");
form2.addEventListener("submit", (e) => {
  // e.preventDefault();
  console.log("Added");
  // const ref = firebase.storage().ref()
  // const file = document.querySelector("#photo").files[0]
  // const name = new Date() + '-' + file.name
  // const metadata = {
  //     contentType:file.type
  // }
  //   const task = ref.child(name).put(file,metadata)
  //   task
  //   .then(snapshot => snapshot.ref.getDownloadURL())
  //   .then(url => {
  //       const image = document.querySelector('#image')
  //       image.src = url
  //   })
  
  db.collection("PetForm").add({
    PetName: form2.Petname.value,
    PetType: form2.Type.value,
    Vaccination: form2.Vaccination.value,
    Name: form2.Name.value,
    Email: form2.Email.value,
    PhoneNo: form2.PhoneNo.value,
    PetResidence: form2.Resi.value,
    PetImage:form2.Image.value,
  });
  console.log('Completed');
  // window.location.href = "https://www.frienimal.web.app/pets.html";
  // form2.Petname.value = '';
  // form2.Type.value = '';
  // form2.Vaccination.value = '';
  // form2.Name.value = '';
  // form2.Email.value = '';
  // form2.PhoneNo.value = '';
  // form2.Resi.value = '';
  // form2.Image.value = image.src;
});

// firebase.initializeApp(firebaseConfig);
      
// const db = firebase.firestore();
// db.settings({timestampInSnapshots: true});

// function uploadImage(){
// const ref = firebase.storage().ref()

// const file = document.querySelector("#photo").files[0]

// const name = new Date() + '-' + file.name

// const metadata = {
//     contentType:file.type
// }

// const task = ref.child(name).put(file,metadata)

// task
// .then(snapshot => snapshot.ref.getDownloadURL())
// .then(url => {
//     console.log(url)
//     alert("Image uploaded")
//   }
// )
// }

// Pet Forms

const PetInfo = document.querySelector("#Pet-info");


// function renderPetInfo(doc) {
//   let li = document.createElement("li");
//   let Pet_Name = document.createElement("span");
//   let Pet_Type = document.createElement("span");
//   let vaccination = document.createElement("span");
//   let Pet_Residence = document.createElement("span");
//   let Email = document.createElement("span");
//   let Name = document.createElement("span");
//   let Phone_no = document.createElement("span");
//   let cross = document.createElement("div");

//   li.setAttribute("data-id", doc.id);
//   Pet_Name.textContent = doc.data().PetName;
//   Pet_Type.textContent = doc.data().PetType;
//   vaccination.textContent = doc.data().Vaccination;
//   Pet_Residence.textContent = doc.data().PetResidence;
//   Email.textContent = doc.data().Email;
//   Name.textContent = doc.data().Name;
//   Phone_no.textContent = doc.data().PhoneNo;
//   cross.textContent = "x";

//   li.appendChild(Pet_Name);
//   li.appendChild(Pet_Type);
//   li.appendChild(vaccination);
//   li.appendChild(Pet_Residence);
//   li.appendChild(Email);
//   li.appendChild(Name);
//   li.appendChild(Phone_no);
  

//   //deleting data
//   // cross.addEventListener("click", (e) => {
//   //   e.stopPropagation();
//   //   let id = e.target.parentElement.getAttribute("data-id");
//   //   db.collection("PetForm").doc(id).delete();
//   // });

//   PetInfo.appendChild(li);
// }

// // getting data
// //add .where() to for queries
// //orderby() for displaying data in an order
// db.collection("PetForm").get().then((Snapshot) => {
//     Snapshot.docs.forEach((doc) => {
//       renderPetInfo(doc);
//     });
//   });

//Saving Data

