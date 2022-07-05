`use strict`;


var user_name = prompt("Enter you name :");
console.log ("Name: " + user_name)

var user_gender = prompt("Enter you gender :");
console.log("Gender: " + user_gender)


const checkUserAge = (user_age) => {
    var user_age = prompt("Enter your age please :");

    if (user_age>0) {
        return user_age}

    else {
    alert("Plese enter your correct age");
    return   checkUserAge(user_age) ;}
}
var user_age = checkUserAge(user_age);
console.log("Age: " + user_age);

var w_massege = confirm ("If you want skip welcom massege plese press cancel");

function welcomeMessage(){
        
    if ( w_massege && (user_gender == "male") ) {
        alert(`Welcome Mr.${user_name}`)}

    else if ( w_massege && (user_gender == "female") ) {
    alert(`Welcome Ms.${user_name}`)}

    else if  ( w_massege || (user_gender == "non") ) {
        alert(`Welcome ${user_name}`)}
    }
welcomeMessage();


// part 2
var massege_two = confirm ("Do you want more question :");


if (massege_two){
    var ansquestion_one = prompt("Do you love programing || ANS ( Yes or No )");
    if (ansquestion_one == ""){ansquestion_one = "invaild"}

    var ansquestion_two = prompt("Do you have a free time to learn || ANS ( Yes or No )");
    if (ansquestion_two == ""){ansquestion_two = "invaild"}

    var ansquestion_three = prompt("Do you want start learning now || ANS ( Yes or No )");
    if (ansquestion_three == ""){ansquestion_three = "invaild"}
}

var array = [];
array.push(ansquestion_one,ansquestion_two,ansquestion_three);
console.log(array)