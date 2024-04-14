function plus (a, b) {
    return a + " " + b
}
// let plus = (a,b) => {
//     return a + " " + b
// }

// let plus = (a, b) => a + " " + b 

// let plus = (a, b) => console.log(a + " " + b )

let result = plus("Phuong", "Dzai")
console.log(result);


fetch("https://jsonplaceholder.typicode.com/photos")
    .then(function (response) {
        return response.json()
    })
    .then(function(data){
        let newArray = data.slice (0 ,5)
        // console.log(data),
        console.log(newArray[0].title)
        console.log(newArray[1].title)
        console.log(newArray[2].title)
        console.log(newArray[3].title)
        console.log(newArray[4].title)
        
        // let div1 = document.createElement("div")
        // div1.innerText = newArray[0].title  
        // document.body.appendChild(div1) 

        // let div2 = document.createElement("div")
        // div2.innerText = newArray[1].title  
        // document.body.appendChild(div2) 
        
        // let div3 = document.createElement("div")
        // div3.innerText = newArray[2].title  
        // document.body.appendChild(div3) 

        // let div4 = document.createElement("div")
        // div4.innerText = newArray[3].title  
        // document.body.appendChild(div4) 

        // let div5 = document.createElement("div")
        // div5.innerText = newArray[4].title  
        // document.body.appendChild(div5) 

    //     for (let i = 0; i < newArray.length; i++) {
    //         let div1 = document.createElement("div")
    //         div1.innerText = newArray[i].title  
    //         document.body.appendChild(div1) 
    //     }

    //    for (let index = 0; index < newArray.length; index++) {
    //     let img = document.createElement("img")
    //     img.src = newArray[index].thumbnailUrl
    //     document.body.appendChild(img)
    //    }

        
        
    })
 
    // let newDiv = document.createElement("div")
    // newDiv.innerText = "abcdxyz"
    // document.body.appendChild(newDiv) 

    // let img = document.createElement("img")
    // img.src = "https://via.placeholder.com/150/92c952"
    // document.body.appendChild(img)


   
   
   let a = 10
   console.log("a = " + a)
   console.log(`a = ${a}`);

   let s1 = "Hello"
   let s2 = "abcdxyz"

   console.log(` s1 = ${s2}`);
   
   
    let example = document.querySelector(".example")
    example.innerHTML = `<h1>${s1}</h1> <p>${s2}</p>`

    let container = document.querySelector(".container")
    
     let divBox = `
    <div class="box">
        <img src=" ${newArray[2].thumbnailUrl}" alt= "">
        <h1>${newArray[2].title}</h1>
    </div>`

    

    // for (let i = 0; i < 5; i++) {
    //     container.innerHTML += divBox
    // }

    container.innerHTML = divBox + divBox + divBox + divBox + divBox
    

    
    
    