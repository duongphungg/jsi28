//DOM
const registerForm = document.querySelector('#register-form')
const fullname = document.querySelector('#fullname')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirm = document.querySelector('#password-confirm')
//Handle Register

const handleRegister = () => {
    //Get value input
    const fullname = fullname.value;
    const email = email.value;
    const password = password.value;
    const passwordConfirm = passwordConfirm.value;

    if (!fullname || !email || !password || !passwordConfirm) {
        alert("Please fill all fields");
        return;
    }

    if (password != passwordConfirm) {
        alert("Passwords are not matched");
        return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            db.collection("users")
                .add({
                    fullname,
                    email,
                    password
                })
                .then((docRef) => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });


        })
        .then(() => {
            alert("Create account succesfully")
        })
        .catch((err) => {
            const errorCode = err.code;
            const errorMess = err.message;

            alert(errorMess);
        });
}

registerForm.addEventListener('submit', function(event) {
    handleRegister(event)
})



