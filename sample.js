

// ONE 
function highNum(){
    let number1 = document.getElementById('first').value;
    let number2 = document.getElementById('second').value;
    
    if (parseInt(number1) > parseInt(number2)) {
        alert(number1);
    }else if (parseInt(number1) < parseInt(number2)){
        alert(number2);
    }
}


// TWO

let planets = ['mercury','venus','earth','mars','jupiter','saturn','uranus','neptune'];
planets.sort().reverse();

for (i=0; i < planets.length; i++)
{
    document.write(planets[i] + '<br>');
}


// THREE

let numbers = ['one','two','three','four','five','six','seven','eight','nine','ten'];
numbers.unshift('zero');

numbers = numbers.map(function(x){
    return x.toUpperCase();
})

for (i=0; i < numbers.length; i++)
{
    document.write(numbers[i] + '<br>' + i + ':  ');
}


// FOUR

let array1 =['apple','banana','mango'];
let array2 =['orange','ponkan','melon'];
let array3 = array1.concat(array2);

document.getElementById('demo4').innerHTML = array3[4];


// // FIVE
// function replace (){
// let menu = ['Cinnamon Doughnuts','Waffles','Granola','Chorizo Burrito','French Toast'];
// let menu2 = menu.replace('Granola', 'Sunny');
// }

// document.getElementById('demo5').innerHTML = menu2;

//FIVE
let menu = ['Cinnamon Doughnuts', 'Waffles','Granola', 'Chorizo Burrito', 'French Toast'];
menu[2] = "Sunny Side Up";
document.getElementById("demo5").innerHTML = menu;









