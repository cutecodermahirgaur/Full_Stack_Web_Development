// Break Ststement
// var grade=prompt("Enter your Grade: ");
//     switch(grade.toLowerCase()){
//     case 'a':
//         document.write("You passed with First_Class");
//         break;
//     case 'b':
//         document.write("You passed with Second_Class");
//         break;
//         case 'c':
//         document.write("You passed with Third_Class");
//         break;
//     case 'd':
//         document.write("You are Fail.");
//         break;
// }

//  Character classes in JavaScript
// pattern abc
var email=window.prompt("enter email");
var A=email.match(/[a-z]/g)
if(A!=null){
    document.write(A+"pattern is there");
    document.write("<hr>");
}
else{
    document.write(A+"pattern is not there");
    document.write("<hr>");   
}
// pattern 012
var email=window.prompt("enter email");
var A=email.match(/[0-9]/g)
if(A!=null){
    document.write(A+"pattern is there");
    document.write("<hr>");
}
else{
    document.write(A+"pattern is not there");
    document.write("<hr>");   
}
// pattern combine
var email=window.prompt("enter email");
var A=email.match(/[a-zA-Z0-9]/g)
if(A!=null){
    document.write(A+"pattern is there");
    document.write("<hr>");
}
else{
    document.write(A+"pattern is not there");
    document.write("<hr>");   
}
// PRINT commas of spaces
var email=window.prompt("enter email");
var A=email.match(/\s/g)
if(A!=null){
    document.write(A+"pattern is there");
    document.write("<hr>");
}
else{
    document.write(A+"pattern is not there");
    document.write("<hr>");   
}
// print without spaces
var email=window.prompt("enter email");
var A=email.match(/\S/g)
if(A!=null){
    document.write(A+"pattern is there");
    document.write("<hr>");
}
else{
    document.write(A+"pattern is not there");
    document.write("<hr>");   
}
// print special charecters
var email=window.prompt("enter email");
var A=email.match(/\W/g)
if(A!=null){
    document.write(A+"pattern is there");
    document.write("<hr>");
}
else{
    document.write(A+"pattern is not there");
    document.write("<hr>");   
}
// not print special characters
var email=window.prompt("enter email");
var A=email.match(/\w/g)
if(A!=null){
    document.write(A+"pattern is there");
    document.write("<hr>");
}
else{
    document.write(A+"pattern is not there");
    document.write("<hr>");   
}
// not print numbers
var email=window.prompt("enter email");
var A=email.match(/\D/g)
if(A!=null){
    document.write(A+"pattern is there");
    document.write("<hr>");
}
else{
    document.write(A+"pattern is not there");
    document.write("<hr>");   
}
//
var email=window.prompt("enter email");
var A=email.match(/\a?/g)
if(A!=null){
    document.write(A+"pattern is there");
    document.write("<hr>");
}
else{
    document.write(A+"pattern is not there");
    document.write("<hr>");   
}