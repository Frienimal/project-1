db.collection('PetForm').get().then((Snapshot) => {
  console.log(Snapshot.docs);
});



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