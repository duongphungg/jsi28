// - Tạo một đối tượng User bao gồm các thuộc tính: fullname, email, password

const User = {
    fullname: "PND",
    email: "123@gmail.com",
    password: 123 
}

User.fullname = "PNMH"

let age = 15
age = 51

console.log (age)

console.log (User)

const numberList = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// // Duyệt mảng
// console.log (numberList[0]);

// for (let i = 0; i < numberList.length; i++) {
//     numberList[i] +=1,
//     console.log(numberList[i]);
    
// }

// Hàm ES6: map(), filter(), find(): Bản chất là vòng lặp 

//Hàm map: Duyệt qua mảng đã chọn, có thể thay đổi giá trị phần tử của nó, sau đó trả về mảng mới

// Cú pháp: tên_mảng.map()

let newnumberList = numberList.map(function(number) {
    console.log(number);

    return number + 3;
}) 
console.log(newnumberList)

//Hàm filter: lọc ra những phần tử thỏa mãn điều kiện

let filterNumberList = numberList.filter(function (number) {
    return number > 10
    
})
console.log(filterNumberList)

//Hàm find
let findNumberList = numberList.find(function (number) {
    return number > 10
    
})
console.log(findNumberList)


// Nhiệm vụ về nhà:
// - Tìm hiểu về Arrow function
// - Lập trình hướng đối tượng