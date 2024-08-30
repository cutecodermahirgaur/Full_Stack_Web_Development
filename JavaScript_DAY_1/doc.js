// console.log("Welcome to India");
// document.write("Hello Buddies");
// let age=12;
// let me;
// let you=null;
// let fullname="Karan Negi";
// console.log(fullname);

// document.write('<h1>Welcome to GLA University Mathura</h1>');
// document.write('<br>');
// document.write('<hr>');
// document.write('<h2>Branches in GLA</h2>');
// document.write('<br>');
// document.write('<h2>CSE</h2>');
// document.write('<br>');
// document.write('<h2>MECHANICAL</h2>');
// document.write('<br>');
// document.write('<h2>ELECTRICAL</h2>');
// document.write('<br>');
// document.write('<h2>ELECTRONICS</h2>');

// 
document.write("<h1>ZScaler Pvt.Ltd. Tokyo, Japan</h1>");
document.write("<h3>Our Great Employees</h3>");
document.write('<hr>');
var Eid=1001;
let EName="Manish Kumar";
document.write("Employee Name : " +EName);
document.write('<br>');
document.write("Employee Id : "+Eid);
document.write('<hr>');
EName="Mukul Kumar";
Eid=1002;
document.write("Employee Name : " +EName);
document.write('<br>');
document.write("Employee Id : "+Eid);
document.write('<hr>');
EName="Karan Negi";
Eid=1003;
document.write("Employee Name : " +EName);
document.write('<br>');
document.write("Employee Id : "+Eid);
document.write('<hr>');


//  
// var obj1=1000;
// var obj2=2000;
// var sum=obj1+obj2;
// console.log(sum);
// create alert
// window.alert("GLA");
// let yourage=prompt("Enter age : ");
// if(yourage>18){
//     window.alert("able to enter");
// }
// else{
//     window.alert("Stay far from here");
// }

// create alert using prompt

// var obj3=window.confirm("Do you want to continued ?");
// window.alert("The result is :"+obj1);
// console.log("The result is :"+obj1);
// document.write("The result is :"+obj1);
// document.write('<br>');
// if(obj3){
//     document.write("Hi Buddy");
// }
// else{
//     document.write("Next Buddy");
// }
// print value taking input from user
// let a=parseInt(prompt("Enter first Number"));
// let b=parseInt(prompt("Enter second number"));
// let result=parseInt(a+b);
// document.write(result);
// console.log(result);
// 
// var c=Number(window.prompt("enter value of c"))
// document.write("Welcome")

let productid=100;
let pname="Applel";
document.write("Product id : "+productid);
document.write("<br>");
document.write("Product id : "+pname);

// ARRAY CONCEPTS 
document.write("<br>")
const cars = ["Saab", "Volvo", "BMW"];
document.write("type of : "+typeof(cars))
document.write("<br>")
document.write("type of : "+typeof(cars))
document.write("<br>")
const product =new Array()
product[0]=1001;
product[1]="apple";
product[2]="1002";
product[3]="google";
document.write("product [] =" + "{" +product + "}");
// ARRAY CONSTRUCTOR
var items=new Array(1001,"apple",1002,"microsoft",1003,"google");
document.write("<br>")
console.log(items);
document.write("Items[] = "+items);
document.write("<br>")
// PUSH POP IN ARRAY
var student=[];
student.push("aman","manish","rahul","mukul","negi");
document.write("students [] = "+student)
document.write("<br>")
student.pop();
document.write("students [] = "+student)
document.write("<br>")
student.pop();
document.write("students [] = "+student)
// instance in object
document.write("<hr>");
var teachers=new Object()
teachers.tid=1001;
teachers.tname="Karan negi";
teachers.tsal=100000;
teachers.design="Web Developer";
teachers.college="GLA Mathura";
console.log("Teacher's Id : "+teachers.tid);
document.write("<br>");
document.write("Teacher's Id : "+teachers.tid);
document.write("<br>");
document.write("Teacher's Name : "+teachers.tname);
document.write("<br>");
document.write("Teacher's Salary : "+teachers.tsal);
document.write("<br>");
document.write("Teacher's Profession : "+teachers.design);
document.write("<br>");
document.write("Faculty Of : "+teachers.college);
document.write("<br>");
document.write("<hr>");
// functions in Java Script
function Worker(First_Name,Last_Name){
    this.First_Name="Kran";
    this.Last_Name="Negi"
}
var w1=new Worker()
console.log("First_Name is : "+w1.First_Name);
console.log("Last_Name is : "+w1.Last_Name);
document.write("First_Name is : "+w1.First_Name);
document.write("<br>");
document.write("Last_Name is : "+w1.Last_Name);
// function 1
function Test_Case1(){
    window.alert('Welcome to functions in 3s');
    console.log("Welcome to function in 3s");
}
// function 2
function Test_Case2(Eid,Ename,Esal,design,company){
    console.log("Eid is"+Eid);
    console.log("Ename is"+Ename);
    console.log("Esal is"+Esal);
    console.log("design in"+design);
    console.log("company in"+company);
}
document.write("<br>");
document.write("<hr>");
// function 3
function Test_Case3(){
    document.write("Angular Engineer")
    document.write("<br>")
    return "wipro technologies"
}
Test_Case3()
document.write(Test_Case3())
// function square
function square(num){
    return num*num;
}
var result=square(4);
console.log("the square of 4 : "+square(4));
console.log("the square of 5 : "+square(5));
document.write("<br>")
document.write("<hr>")
document.write("the square of 4 : "+square(4));
document.write("<br>")
document.write("the square of 5 : "+square(5));
document.write("<br>")
document.write("<hr>")
// function sum
function sum(num1,num2){
    return num1+num2;
}
var result1=sum(10,20);
console.log(result1);
document.write(result1);
document.write("<br>")
document.write("<hr>")
// function string capitalize
function capitalize(str){
    return str.toUpperCase();+str.slice(1);
}
console.log(capitalize('mahir'));
document.write(capitalize('mahir'));

// --- QUESTION
// write a javascript function to check the given no is even or not
// write a java script function to find the factorial of a number

//  Operators in Java Script
// Arithmetic Operators
// Logical operators
// Comparison Operators
// Bitwise operators
document.write("<hr>")
document.write("<br>")
// Examples of using "==" and "==="
var n=window.prompt("Enter the value of n")
var l=Number(window.prompt("enetr the value of l"));
result4 = n==l;
result5 = n===l;
document.write(n==l);
document.write("<br>")
document.write(typeof(result4));
document.write("<br>")
document.write(n===l);
document.write("<br>")
document.write(typeof(result5));
document.write("<hr>")
// function
