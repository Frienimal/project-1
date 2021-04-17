document.addEventListener("DOMContentLoaded", event => {
  const app = firebase.app();

  const db = firebase.firestore();
  console.log(app)
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