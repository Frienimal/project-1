const PetInfo = document.querySelector('#Pet-info');
const form2 = document.querySelector('#add-pets-form');

function renderPetInfo(doc){
  let li = document.createElement('li');
  let Pet_Name = document.createElement('span');
  let Pet_Type = document.createElement('span');
  let vaccination = document.createElement('span');
  let Pet_Residence= document.createElement('span');
  let Email = document.createElement('span');
  let Name = document.createElement('span');
  let Phone_no = document.createElement('span');
  let cross = document.createElement('div');

  li.setAttribute('data-id', doc.id);
  Pet_Name.textContent = doc.data().PetName;
  Pet_Type.textContent = doc.data().PetType;
  vaccination.textContent = doc.data().Vaccination;
  Pet_Residence.textContent = doc.data().PetResidence;
  Email.textContent = doc.data().Email;
  Name.textContent = doc.data().Name;
  Phone_no.textContent = doc.data().PhoneNo;
  cross.textContent = 'x';

  li.appendChild(Pet_Name);
  li.appendChild(Pet_Type);
  li.appendChild(vaccination);
  li.appendChild(Pet_Residence);
  li.appendChild(Email);
  li.appendChild(Name);
  li.appendChild(Phone_no);
  li.appendChild(cross);

  //deleting data
  cross.addEventListener('click', (e) => {
    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');
    db.collection('PetForm').doc(id).delete();
  })
  
  
  PetInfo.appendChild(li);

}

// getting data
//add .where() to for queries
//orderby() for displaying data in an order
db.collection('PetForm').get().then((Snapshot) => {
  Snapshot.docs.forEach(doc =>{
    renderPetInfo(doc);
  })
});

//Saving Data
form2.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('PetForm').add({
      PetName : form2.Petname.value,
      PetType : form2.Type.value,
      Vaccination : form2.Vaccination.value,
      Name : form2.Name.value,
      Email : form2.Email.value,
      PhoneNo : form2.PhoneNo.value,
      PetResidence : form2.Resi.value
  });
  form2.Petname.value = '';
  form2.Type.value = '';
  form2.Vaccination.value = '';
  form2.Name.value = '';
  form2.Email.value = '';
  form2.PhoneNo.value = '';
  form2.Resi.value = '';

})



//Google Login

function googlelogin(){

  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)

    .then (result => {
      const user = result.user;
      window.alert(`Hello ${user.displayName}`);
      document.querySelector('#A1').textContent = `${user.displayName}`
      console.log(user)
    })
    .catch(console.log)

}

//Newsletter SignUp (Saving user Content to Database)

 const form = document.querySelector('#add-signup-form');

 //saving form
function signup(){
 form.addEventListener('submit',(e)=>{
   e.preventDefault();
   db.collection('Email').add({
      email : form.email.value
   });
   form.email.value = '';
 })
}

<<<<<<< HEAD

//Pop-up animation  
$(document).ready(function(){

    $('.col-4-lg').hover(

        function(){
            $(this).animate({
            marginTop: "-=1%",
        },200);
        },

        function(){
            $(this).animate({
            marginTop: "0%"
        },200);
        }
    );
});
=======
  var firebaseConfig = {
    apiKey: "AIzaSyCLTQaJIOwSqjmStSlQhl_1YEU0GX3pryw",
    authDomain: "frienimal.firebaseapp.com",
    databaseURL: "https://frienimal.firebaseio.com",
    projectId: "frienimal",
    storageBucket: "frienimal.appspot.com",
    messagingSenderId: "264888471735",
    appId: "1:264888471735:web:b0dce2f4206e31994e3d32",
    measurementId: "G-4BGZRKHGG6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
      const auth = firebase.auth();


  function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		alert("Signed Up");
	}
  
>>>>>>> 57c1968390fd827b97fdfada707623d7add348cd
