//////////////////////////////////////////////////////////////////////////// Import CHUNG

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

import {
  get,
  getDatabase,
  set,
  ref,
  onValue,
  update,
  remove,
  push,
  child,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQS_VxuQHkt5HoIwAcR7KVluQd315SZzw",
  authDomain: "jsi-28-v2.firebaseapp.com",
  databaseURL: "https://jsi-28-v2-default-rtdb.firebaseio.com",
  projectId: "jsi-28-v2",
  storageBucket: "jsi-28-v2.appspot.com",
  messagingSenderId: "58102111830",
  appId: "1:58102111830:web:fd1cc8e07594a02fc9e5f7",
  measurementId: "G-67WD497HRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

// DOM
let user_data = localStorage.getItem("current_user_data");
let user_email_span = document.getElementById("email");
let user_uid_span = document.getElementById("uid");
let ol = document.querySelector("ol");

if (user_data == "") {
  user_email_span.innerText = "Chưa có";
  user_uid_span.innerText = "Chưa có";
} else {
  user_data = JSON.parse(user_data);
  // email
  user_email_span.innerText = user_data.user_email;
  // uid
  user_uid_span.innerText = user_data.user_uid;
}

let sign_btn = document.querySelector("button");
sign_btn.addEventListener("click", function () {
  localStorage.setItem("current_user_data", "");
  window.location.reload();
});

// Hàm Read
let read_full_user = document.getElementsByTagName("button"); // => Trả về 1 mảng
read_full_user[1].addEventListener("click", function () {
  onValue(ref(database, `users`), (snap) => {
    let data = snap.val();

    data = Object.entries(data);
    ol.innerHTML = "";


    for (let i = 0; i < data.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = `<b>${data[i][0]}</b> - <u>${data[i][1].username}</u>
      <button class= "edit_btn">Sửa</button>`
      ol.appendChild(li);
    }
    //Lấy ra nút sửa
    let edit_btn = document.getElementsByClassName('edit_btn');

    let Check = false
    //Xử lí sự kiện nút bấm

    for (let i = 0; i < edit_btn.length; i++) {
      edit_btn[i].addEventListener("click", function () {
        //Xử lí trường hợp bị hiện ra nhiều lần
        if (!edit_btn[i].nextSibling) {
          let div = document.createElement("div")
          div.innerHTML = `
          <input id="age_input" placeholder="Enter age?"> 
          <button id="save_btn">Save</button>`;
          edit_btn[i].insertAdjacentElement("afterend", div);
          //save
          let save_btn = document.getElementById("save_btn");
          save_btn.addEventListener("click", function() {
            let age_input = document.getElementById("age_input");
          })
          
          
        }
        else {
          edit_btn[i].nextSibling.remove();
        }

        // Lọc các thẻ khác sẽ không có dòng ở dưới
        for (let z = 0; z < edit_btn.length; z++) {
          if (i != z) {
            if (edit_btn[z].nextSibling) {
              edit_btn[z].nextSibling.remove()
            }
              
          }

        }
        //save data
        saveData()
      });

    }

    // Save data function
// Save data function
const saveData = () => {
  let saveBtn = document.getElementsByClassName("save-btn");
  for (let i = 0; i < saveBtn.length; i++) {
    saveBtn[i].addEventListener("click", () => {
      let tempUID =
        saveBtn[i].parentElement.previousElementSibling.previousElementSibling
          .previousElementSibling.innerText;

      const ageInput = document.querySelector("#age-input");
      if (ageInput.value) {
        updateData(tempUID, ageInput.value);
      }
    });
  }
};

const updateData = (tempUID, ageInput) => {
  update(ref(database, "users/" + tempUID), {
    age: ageInput,
  }).then(() => {
    alert("Update thành công");
  });
};

          
        
        });
    }


        
        
  );

