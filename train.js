let reddiv = document.getElementById('red');
reddiv.onclick=()=>console.log('you clicked on the red ');



let yellowdiv = document.getElementById('yellow');
yellowdiv.onclick=()=>console.log('you clicked on the yellow');


let greendiv = document.getElementById('green');
greendiv.onclick=()=>console.log('you clicked on the green');              


const  buttons = document.querySelectorAll(".button") 
 buttons.forEach(buttony => {
buttony.onclick =()=>console.log(buttony.value)  
 });
 
