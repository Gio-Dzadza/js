let firstAlert = document.querySelector("html");

firstAlert.onload = function startAlert() {
    setUserName()
}

let myButton = document.getElementById('changeButton');
let myHeading = document.getElementById('choose');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        sessionStorage.setItem('name', myName);
        myHeading.textContent = 'Choose the Homework, ' + myName;
    }
    sessionStorage.setItem('name', myName);
    myHeading.textContent = 'Choose the Homework, ' + myName;
}

if(!sessionStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = sessionStorage.getItem('name');
    myHeading.textContent = 'Choose the Homework, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

// დავალება 1
let arr = ['javascript', 'php', 'c#', 'python', 'c++', 'kotlin', 'c', 'swift'];

for (let x = 0; x<arr.length; x++){
    if(arr[x].length>=5){
        console.log(arr[x])
    }
}

//დავალება 2

let arr2 = [2, -3, 5, 11, 1, -30, -11, 100, -1, -3, -4];

for (let x = 0; x<arr.length; x++){
    if(arr[x]>0){
        console.log(arr2[x])
    }
}

//დავალება 3
let arr3 = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]];

for (let x in arr3){
    for(let y in arr3[x]){
        if(arr3[x][y]>0){
            console.log(arr3[x][y])
        }
    }
}

//დავალება 4

let arr4 = [1, 15, 6, 30];

console.log(Math.max(...arr4));

//დავალება 5

let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isLoggedIn: true
}

function printName(x){
    if(x.isLoggedIn === true){
        console.log(x.firstname + ' ' + x.lastname)
    }else {
        console.log('false')
    }
}
printName(user)

function myFunction(){
    let homeW = document.getElementById('homeworkOption').value;
    if (homeW === 'homeWork1'){
        document.getElementById('homework11').style.display = 'block';
        document.getElementById('homework2').style.display = 'none';
        document.getElementById('homework3').style.display = 'none';
        document.getElementById('homework4').style.display = 'none';
        document.getElementById('homework5').style.display = 'none';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if (homeW === 'homeWork2'){
        document.getElementById('homework2').style.display = 'block';
        document.getElementById('homework11').style.display = 'none';
        document.getElementById('homework3').style.display = 'none';
        document.getElementById('homework4').style.display = 'none';
        document.getElementById('homework5').style.display = 'none';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if(homeW === 'homeWork3'){
        document.getElementById('homework2').style.display = 'none';
        document.getElementById('homework11').style.display = 'none';
        document.getElementById('homework3').style.display = 'block';
        document.getElementById('homework4').style.display = 'none';
        document.getElementById('homework5').style.display = 'none';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    }else if(homeW === 'homeWork4'){
        document.getElementById('homework2').style.display = 'none';
        document.getElementById('homework11').style.display = 'none';
        document.getElementById('homework3').style.display = 'none';
        document.getElementById('homework4').style.display = 'block';
        document.getElementById('homework5').style.display = 'none';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    }else if(homeW === 'homeWork5'){
        document.getElementById('homework2').style.display = 'none';
        document.getElementById('homework11').style.display = 'none';
        document.getElementById('homework3').style.display = 'none';
        document.getElementById('homework4').style.display = 'none';
        document.getElementById('homework5').style.display = 'block';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if (homeW === 'nothing'){
        document.getElementById('homework2').style.display = 'none';
        document.getElementById('homework11').style.display = 'none';
        document.getElementById('homework3').style.display = 'none';
        document.getElementById('homework4').style.display = 'none';
        document.getElementById('homework5').style.display = 'none';
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    }
}


function clickChange(){
    let homeW = document.getElementById('homeworkOption').value;
    if (homeW === 'homeWork1'){
        document.getElementById('result1').style.display = 'block';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if(homeW === 'homeWork2'){
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'block';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if(homeW === 'homeWork3'){
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'block';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'none';
    } else if(homeW === 'homeWork4'){
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'block';
        document.getElementById('result5').style.display = 'none';
    } else if(homeW === 'homeWork5'){
        document.getElementById('result1').style.display = 'none';
        document.getElementById('result2').style.display = 'none';
        document.getElementById('result3').style.display = 'none';
        document.getElementById('result4').style.display = 'none';
        document.getElementById('result5').style.display = 'block';
    }
}
