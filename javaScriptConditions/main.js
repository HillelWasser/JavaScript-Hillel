//EX1.1
function roundOrOdd(num) {
    if(num % 2==0) {
        return 'true'
    } 
    else {
        return 'false!'
    }
}

//Ex1.2
function greaterNum(x,y,z) {
    if(x>y && x>z) {
return x;
    }
    else if (y>x && y>z) {
return y;
    }
    else if (z>x && z>y) {
        return z
    }
    else {
        return "tie!"
    }
}

console.log (greaterNum(x=100,y=100,z=0))
console.log (greaterNum(x=200,y=0,z=-10))

//Ex1.3
function helloWorld(lang) {
    if (lang==='es') {
        return 'Hola world!';
    }
    else if (lang==='he') {
        return 'שלום עולם';
    }
    else if (lang==='es') {
        return 'Hello world!';
    }
    else{
        return 'Hello world!';
    }

}
console.log(helloWorld('he'))
console.log(helloWorld('qqq'))

//Ex1.4
function assignGrade(num) {
    if(num >=90 &&  num<= 100 ) {
        return 'A'
    }
    else if(num >=80 && num <=89) {
        return 'B'
    }
    else if(num >=70 && num<=79) {
        return 'C'
    }
    else if(num >=60 && num<=69) {
        return 'D'
    }
    else if (num <=59) {
        return 'F'
    }
    else {
        return 'check again'
    }
}
console.log(assignGrade(200))
console.log(assignGrade(67))

//Ex1.5
function pluralize(string,num) {
    if(num>1) {
        return `${num} ${string}s`;
    }
    // else if(string===0) {
    //     return 'Eror, no string!'
    // }
    // else if(num===0) {
    //     return 'Eror, no number!'
    // }
}
console.log(pluralize('dgg',1))
console.log(pluralize('trees','30'))

//Ex1.6
// I would like an ice cream with strawberry && chocolate, || stracciatella, || an ice cream of any flavor != caramel." 
// Flavors: strawberry, chocolate, stracciatella, caramel.


//Ex1.7
// function helloFriend() {
//     let personName = prompt('hey! whats your name:');
//     if (personName=== '') {
//         document.write('Hello friend! Welcome!');
//     }
//     else {
//         document.write(`Hello ${personName} Welcome!`)
//     }
// }
// console.log(helloFriend());

//Ex1.8
function numbersResponse(num) {
    if(num>0 && num%2 != 0) {
        console.log('positive and odd') ;
    }
    else if(num>0 && num%2 === 0) {
        console.log('positive and even');
    }
    else if(num<0 && num%2 !=0) {
        console.log('negative and odd');
    }
    else if(num<0 && num%2 === 0) {
        console.log('negative and even')
    }
    else if (num===0) {
        console.log('Zero')
    }  
}
numbersResponse(0)
numbersResponse(-9)

//Ex1.9


//Ex1.10
function calculate(num1,num2,operator) {
    if(operator==='+') {
        return num1+num2;
    }
    if(operator==='-') {
        return num1-num2;
    }
    if(operator==='/') {
        return num1/num2;
    }
    if(operator==='/' && y===0) {
        return `Cannot divide by zero`;
    }
    if(operator==='/' && x===0) {
        return `Cannot divide by zero`;
    }
    if(operator==='^') {
        return 'Invalid operator';
    }
}
console.log(calculate(num1=5,num2=8,operator="+"))
console.log(calculate(num1=5,num2=8,operator="-"))
console.log(calculate(num1=10,num2=2,operator="/"))

//Ex1.11
function isLeapYear(year) {
    if(year%4===0) {
        if(year%100===0 && year%400===0) {
            return true
        }
        return false
    } 
    return false
}

console.log(isLeapYear(1900))


// function chooseProduct(budget) {
//     switch (budget) {
//         case budget < 100 : 
//          console.log('buy a laptop')
//         break;
//         case  budget > 100 : 
//          console.log('buy a dog')
//         break;
//         case  100 : 
//          console.log('buy a car')
//         break;
//         default: console.log("hello")
//         }
//  }
// chooseProduct(50)

//Ex1.13
function sortedNumbers(x,y,z) {
    const numbers = [x,y,z];
    const resualt = numbers.sort(function(a, b){return b-a});
 console.log(resualt);
}
sortedNumbers(100,-20,0)

//Ex1.15
function responseTocolor(color) {
    switch (color) {
        case "red": 
        console.log("Red is the color of danger")
        break;
        case "orange": 
        console.log("Orange is the color of caution")
        break;
        case "yellow": 
        console.log("Yellow is the color of sunshine")
        break;
        case "green": 
        console.log("Green is the color of nature")
        break;
        case "blue": 
        console.log("Blue is the color of the sky")
        break;
        case "purple": 
        console.log("Purple is the color of royalty")
        break;
        default: 
        console.log("Invalid color")
        break;
    }
}
responseTocolor('yellow')

//Ex2