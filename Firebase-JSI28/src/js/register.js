//DOM
const registerForm = document.querySelector('#register-form')
const fullname = document.querySelector('#fullname')
const email = document.querySelector('#email')
const dob = document.querySelector('#dob')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#password-confirm')

//Handle-Register
const handleRegister = () => {
    //Get value input
    const fullname = fullname.value;    
    const email = email.value;
    const dob = dob.value;
    const password = password.value;
    const passwordConfirm = passwordConfirm.value;


//Check value
 if (!fullname ||   !email || !dob || !password||  !passwordConfirm ) {
    alert("Please fill all fields");
    return;
 }

 //Search: Regex email js
 if (password != passwordConfirm) {
    alert("Passwords are not matched");
    return;
 }

 firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
}


