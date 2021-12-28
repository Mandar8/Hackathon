// Nan === Nan;
// Number.NaN === Nan;
// isNaN(Number.NaN);
// isNaN(Nan);
// Number.isNaN(NaN);

// var num = 15;
// var num1 = ++num;

// console.log(num1);
// console.log(num);

// // console.log(3**3);
// console.log("mandar " + 3);

// var year = 2021;
// if(year%4===0){
//     console.log("LEAP YEAR");
// }
// else{
//     console.log("Not a Leap year");
// 

// if(score = 0 ){
//     console.log("mNDe");
// }else{
//     console.log("anisj");
// 
// var num = 0;
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// var num = 5;
// do{
//     console.log(num);
//     num++
// }while(num<=10)

// let i;
// var num = [8,9,11,15];
// for(i=0;i<=num.length;i++){
// console.log(num[i]);
// }

// for(let i = 1 ; i<=10;i++){
//     console.log(8*i);
// }

// function sum(){
//     var a=10,b=20;
//     var total = a+b;
// console.log(total);
// }
// sum();

//  function sum(a,b){
//      console.log(total = a+b);
//  }
//  sum(20,30)
//  sum(50,60)

// var sum = function(a,b){
//     return total = a+b;   //anonymous function.
// }
// console.log(sum(10,20))

//Arrow function

// let prime = ( ) => {
//    num = 22;
//    if(num>=25){
//        console.log(num);

//    }else{
//        console.log("mein chala jaunag")
//    }
// }
// prime();

//Array

// var hey =['mandar','anish','rishi']

// for(let i=0;i<=hey.length;i++){
//     console.log(hey[i]);
// }

//TRaversal Array
//navigate through  an array

// var myfrnds = ['mandar','anish','rishi','khelan'];

// // console.log(myfrnds[1]);
// // console.log(myfrnds.length)

// for(var i=0;i<=myfrnds.length;i++){

//     console.log(myfrnds[i])
// }

// }

// for (let elements in myfrnds){
//     console.log(elements);
// }
// for(let elements of myfrnds){
//     console.log(elements);
// }

// .foreach loop - calls a function for each element in an array

// var myfrnds = ['mandar','anish','rishi','khelan'];
// myfrnds.forEach(function(element,index,array){
// console.log(array)
// });

// myfrnds.forEach((elment,index,array) => {
//     console.log(elment + " " + index + " " + array)
// });


// const animals = ['pig','lion','tiger'];

// animals.push('chicken','cat','dog');
// console.log(animals); // at last

// animals.unshift('chicen');
// console.log(animals); // at first



// console.log(animals.shift());
// console.log(animals) // removes the first element fromm an array and shows it


// const months = ['jan','march','april','june','july'];
// // const indexofMonth = months.indexOf('jan')
// const newMOnth = months.splice(3,1,'June')
// // console.log(indexofMonth);
// console.log(months);

//map function - return element for new array , after executing something 


// const  array1 = [1,4,9,16,25];
// let newArr = array1.map((ele,inx,arr)=>{
//     return `Index no = ${inx}  and ${arr}` ;
// });
// console.log(newArr);


// let newArr =  array1.map((element,index,arr)=>{
//     return element>9;

// })
// console.log(array1);
// console.log(newArr);

// let arr = [25,36,49,64,81];

// let newArr1 = arr.map((a)=>{
//     return Math.sqrt(a);

// })

// console.log(newArr1);
// console.log(arr);

// let arrr = [2,3,4,6,8];

// let arr2 = arrr.map((a)=>a*2).filter((a)=> a>10).reduce((acc,a) => {
//     return  acc += a ;

// });
// console.log(arr2);


// let arr =[5,6,2];

// let sum =arr.reduce((accumulator ,curElem , index , arr)=>{
//   return accumulator += curElem;  
// })
// console.log(sum);

// let arr = [1,2,3,4,5,6,7];

// let sum =arr.reduce((a,b)=>{
//       return a += b;
// })
// console.log(sum);

//String in javascript

// let myname = 'mandar kulkarni'

// console.log(myname.length);

//escape the character use back slash

// \"hey\"

// we can pass double quote in single quote

//finding string in string

// const mydata = 'My name is Mandar';

// console.log(mydata.indexOf("Mandar"));


//Searching string in string

//.search()
  
//to extract from string

// .slice(start,end)
// substring(start,end)
// substr(start,end)
// end number will never be included

// var str = "apple,banana,kiwi"
// let res = str.slice(0,5);
// console.log(res);

 // when we put negative sign at the end position that means it will remove the last two index number

//  let mydata = "apple,banana,mango";

// //  let res = mydata.substr(7,-2);
// let res = mydata.substr(-4);
//  console.log(res);

//.replace(searchfor,replacewith)

// let mydata = 'My name is mandar'
 
// let res = mydata.replace('name','Name');
// console.log(res);

// charAt - shows which character is on the index number

// let str ="HEllO World"
 
// console.log(str.charAt(5));

// let myname = "mandar kulkarni"
// let myid = myname[0].toUpperCase();

// console.log(myid);

//concat()

//How to connvert string to an array!

//split() method

// var txt = "a,b,c,d,e"

// console.log(txt.split( ''));


//Date and time in Java Script

 //there are four ways to create a new date object

// let currdate = new Date()

// console.log(currdate);

// console.log(new Date().toLocaleString());
//gives a perfect dispay of time

// console.log(Date.now());
// date.now guves the milisecond since 1st jauary 1970

// January - 0 and December - 11

// var d = new Date(2021,10);

// console.log(d.toLocaleString());


// const currdate = new Date()
//  console.log(currdate.getDate());
//  console.log(currdate.getFullYear());
// console.log(currdate.getMonth());
// console.log(currdate.getDay());


// console.log(currdate.setDate(4))

//Math Object in Javascript

// console.log(Math.PI);

// let num = 10.2565

// console.log(Math.round(num));

// console.log(Math.pow(2,3));

// console.log(Math.sqrt(25));

// console.log(Math.abs(-58.5656))

// console.log(Math.ceil(4.44));

// console.log(Math.floor(99.11));

//   console.log(Math.trunc(4.6));


// DOM in JAVASCRIPT

// Windows vs Document 

//window is the main container whereas the DOM is the child of window object

//  Document is object of Window

//  alert(location.href);
//  if(confirm("Want to vist Youtube")){

//     location.href = "https://www.youtube.com/watch?v=KGkiIBTq0y0&t=27855s&ab_channel=ThapaTechnical"
//  }
//Important  for DOM

// how to find the node ...
// whether elements hass child node or not>
//query selcetor 
//to edit any html file with javascript we can use DOM
//document object model

//how to search and find elements

//<body>
//  <h1 id="heading">my name is Anish</h1>


//  <button onclick="changecontent()">click me</button>
 
//  <script>
//      const changecontent = () => {
//          document.getElementById('heading').innerHTML = "my name is Mandar"
//      }
     
//      </script>
//  </body>

//Events In Javascripts

//4 ways of writing evemts ij JS
//using alert();
//by calling function
//using inline evvents
//using Event listeners

// <div>
// <a href="#" class="button" onclick="alert('I am awwsome')">click me</a>
//     </div>
// <a href="#"  class="button" onclick="callingFunction()">click <meta name="viewport" content="width=device-width, initial-scale=1.0"></a>

// <a href="#" class="button" >Click Me</a>
// <span class="button" id="Rishi"> hey </span>

// <a href="#" class=" button" id="mandar">click me</a>

// <script>

// const callingFunction = () => {
//     alert("Main chala jaunga") 
// }

// const Rishi = document.getElementById('Rishi');

// Rishi.onclick = function(){
//     alert('my name is mandar');
// }


// const Mandar = document.querySelector('#mandar')

// Mandar.addEventListener('click',() =>{
//     alert('I love you')
// })

/* <a href="#" class="button" id="fourthway">Click</a>
<script>
const fourthway = document.getElementById('fourthway');

const checkEvent = () =>{
    alert('mandar')
    console.log(event);
    console.log(event.target);
    console.log(event.type);
}

fourthway.addEventListener('click',checkEvent);
 */


//Mouse Event - mouse related events 
// { <p id="mandar" onmousedown="mousedown()" onmouseup="mouseUp()">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ab sequi beatae est quia debitis non, et in repellendus, expedita deserunt ipsa, iste maiores. Tempore, dicta ipsa. Voluptatum, cupiditate omnis?</p>


// <script>
// function mousedown (){
//     document.getElementById("mandar").style.color = '#F8B627'

// }

// function mouseUp(){
//     document.getElementById("mandar").style.color = '#G4545F'
// }

// const Menter = document.getElementById("box")

// Menter.addEventListener('mouseenter',()=>{
//     Menter.style.backgroundColor = 'red';

//     console.log('mouse enter bro')


// })

// Menter.addEventListener('mouseleave',()=>{
//     Menter.style.backgroundColor = 'pink';
//     console.log('mouse leave bro');

// })

//Keyboard Event - events that occurs when we press any key on keyboard
// onkeypress ,onkeydown,onkeyup three ways which comes under keyboard events

//  const keypress = () => {
//      document.getElementById('keys').innerHTML = `you press ${event.key} and its code is ${event.code}`;
//  }
// const keydown = () =>{
//     document.getElementById('keys').innerHTML = 'key is down'
// }

// const keyup = () =>{
//     document.getElementById('keys').innerHTML = 'key is up '
// }
// setInterval(function,milliseconds)
// setTimeout(function , milliseconds)
// clearInterval
// clearTimeout
// time events
// {<p> Want to know my name</p>
// <p id="showname"></p>

// <button id="btn">Click here</button>

// </div>
// </div>

//     <script src="js/jquery-3.6.0.min.js"></script>
//     <script src="js/bootstrap.min.js"></script>
// </body>


// <script>
// const myname = document.querySelector('#showname');


// const btn = document.querySelector('#btn');

// const showname = () =>{
//    myname.innerHTML = 'LOading...'
   
//     setTimeout(()=>{
//        myname.innerHTML = 'mandar'
       
//    },1000)
// }

// btn.addEventListener('click',showname); */}

// <p>Hello my friends</p>

// <button onclick="myvar = setTimeout(myfunction,2000)" >try it</button>
// <button onclick="clearTimeout(myvar)">stop it</button>
// </div>



// </div>

// <script>

// const myfunction = () =>{
//    alert('hello mandar');
// }

// const mynum = document.querySelector('p');
// const btn = document.querySelector('#num')
// let num = 0 ;
// const stopnum = () =>{ 
//     mynum.innerHTML = 'loaadingg'

//     setInterval(() => {
//         mynum.innerHTML = `${num}`
//         num++;
//     }, 1000);

// }
// btn.addEventListener('click',stopnum);
//when we want to repeat the same procedure
//

// Oops in Javascrript

// const mydata = document.querySelector('#p');
// const btn = document.querySelector('#btn');
// const btn2 = document.querySelector('#btn2');
// let num = 0;

// const showdata = ()=>{

//     mydata.innerHTML = "loading...."
//    let   timeref = setInterval(() => {
//         mydata.innerHTML = `${num}`
//         num++;
//     }, 1000);
// }

// btn.addEventListener('click',showdata);

// btn2.addEventListener('click',()=>{
//     clearInterval(timeref);
// });

//oops in javascript

// object literal is simply a key:value pair data structue
//storing vairiablle and function in a container

// object = school bag

//How to create an object

// let biodata = {

// // }
// let Biodata ={ 
       
//     myname : {
    // realname : 'mandy',
    // channelname : 'mandygaming'
// }
//     myAge : 22,
//     mycollege : 'Symbiosis',
//     myplace : 'Pune' ,
//     getdata  : () =>{
//         console.log(`my name is ${Biodata.myname}`);
//     }
//     }
    
//     console.log(Biodata.mycollege);
//     console.log(Biodata.getdata())


// in object we can directly write function like this

/// getData(){
//}

/// what if we want object as a value in an object

//what is this object??

// let biodata = {
//     myName : {
//         realName : 'MAndar Kulkarni',
//         channelName : 'MAndyGaming'

//     },

//     getData(){
//         console.log(`my real name is ${this.myName.realName} and my channel name is ${this.channelName}`)
//     }
// }
// biodata.getData()

//DESTRUCTURING of An array

// const mybiodata = ['mandar','kulkarni',26];
// // console.log(myage);
// let [myFname,myLname , myage] = mybiodata;
// console.log(myage);

//object destructuring 
// const Biodata  = {
//     myFname : 'Mandar' ,
//     myLname : 'Kulkarni',
//     age : 23
// }
// let {myFname,myLname,age} = Biodata;

// console.log(myFname);
// if we want to use dynamic in object use square brackets
//spread operators
// const colors = ['yellow','red','black','white'];
// const myFavcolors = [...colors,'purple','pink']

// console.log(myFavcolors);
// </script>

// Event Propagation , mode detrmines in which order the elements recive the event
// const main = document.getElementById('main');
// const sub  = document.getElementById('sub')


// const Mains = ()=>{
//     alert('hey i am main')
// }
// const Subs = ()=>{
//     alert('hey i am sub')
//     event.stopPropagation();
// }

// main.addEventListener('click',Mains,);
// sub.addEventListener('click',Subs);

// //Higher Order Function
// / / const add = (a,b)=>{
//     return a+b;
// }

// const sub =(a,b)=>{
//     return a-b;

// }
// const mult = (a,b) =>{
//     return a*b
// }

// const calculator = (num1,num2,operator) =>{
//     return operator(num1,num2);
// };

// console.log(calculator(5,6,add));
//lexical scoping means now the inner function can 
//get acess to their parent functions variables 
//but the vice-versa is not true

// 'use strict';

// const url = 'https://restcountries.com/v3.1/currency/{currency}'

// function api_data(url){
//     let request = new XMLHttpRequest();
//     request.open = ('GET',url ,true);

//     request.onload = ()=>{
//         let data = request.responseText;

//         document.getElementById('data').innerHTML = JSON.stringify(data);
//     console.lg(data);
//     }
//     request.send()
// }
// api_data(url);
//FEtch Api - is a new approach to deal with HTTP request , provides js interface 
// it is part of a window object ,fetch return a promise , when you get response from a promise , then we have use .then()
// hw to use fetch("url") => {
// it takes only one argument - from where you have to fetch
//}



//DaY 4 Assignment

// var xhr = new XMLHttpRequest()

// xhr.onload = function(){
//     if(xhr.status>=200 && xhr.status <= 300){
//         var t= JSON.parse(this.response)
//         console.log(t);
//     }
// }

// xhr.open("GET",'https://restcountries.eu/rest/v2/all');
// xhr.send();

// const url = 'https://restcountries.eu/rest/v2/all';

// const xhr = new XMLHttpRequest();

// xhr.open("GET",url)

// xhr.onload = ()=>{
//     console.log(xhr.response);
// }

// xhr.send();

//Day 5 Assignment

//ANonymous Function 

//  var arr = [1,2,3,4,5,6,7,8]
//  var odd =function(){
//      for (let i = 0 ; i<= arr.length ; i++){
//          return arr[i] % 2 !==  0 ;
//      };
     
//  };
// console.log(odd());

// let employees=[
//     {
//       id:1,
//       first_name:"Sourav",
//       last_name:"Das",
//       email:"sourav@gmail.com",
//       gender:"Male",
//       ip_address:"160.192.178.21"
//     },
  
//     {
//       id:2,
//       first_name:"John",
//       last_name:"Paul",
//       email:"john@gmail.com",
//       gender:"Male",
//       ip_address:"160.292.178.21"
//     },
  
  
//     {
//       id:3,
//       first_name:"Pavan",
//       last_name:"Sai",
//       email:"pavan@gmail.com",
//       gender:"Male",
//       ip_address:"160.292.278.21"
//     },
  
//     {
//       id:4,
//       first_name:"Sangeetha",
//       last_name:"Paul",
//       email:"sangeetha@gmail.com",
//       gender:"Female",
//       ip_address:"160.092.378.21"
//     },
    
  
  
//     {
//       id:5,
//       first_name:"Pavni",
//       last_name:"Dhillon",
//       email:"pavni@gmail.com",
//       gender:"Female",
//       ip_address:"160.082.378.21"
//     },
  
  
//     {
//       id:6,
//       first_name:"Tushar",
//       last_name:"Vinocha",
//       email:"tushar@gmail.com",
//       gender:"Male",
//       ip_address:"160.092.378.21"
//     },
//   ]
  
  
//   //ALL the Employee Data 
//   let allEmpButton=document.querySelector("#all-emp-btn");
//   allEmpButton.addEventListener("click",function(){
//   displayEmployees(employees)
//   })
  
  
//   //Male employee data 
//   let maleEmpButton=document.querySelector("#male-emp-btn");
//   maleEmpButton.addEventListener("click",function(){
//     //Logic to filter out male data 
//     let maleEmployee=employees.filter(function(employee){
//       return employee.gender==="Male"
  
//     });
//     //call the function 
//     displayEmployees(maleEmployee)
//   })
  
  
//   //Female
  
//   let femaleEmpButton=document.querySelector("#female-emp-btn");
//   femaleEmpButton.addEventListener("click",function(){
//     //Logic to filter out Female data 
//     let femaleEmployee=employees.filter(function(employee){
//       return employee.gender==="Female"
  
//     });
//     //call the function 
//     displayEmployees(femaleEmployee)
//   })
  
  
//   //Search Functionality
//   let searchBox=document.querySelector("#search-box");
  
//   searchBox.addEventListener("keyup",function(){
//    let textEntered= searchBox.value
//   console.log(textEntered);
  
  
//   //create an empty array 
//   let filteredEmployees=[];
//   if(textEntered!==""){
//     filteredEmployees=employees.filter(function(employee){
//     return employee.first_name.toUpperCase().startsWith(textEntered.toUpperCase())
//     });
//     document.querySelector("#table-body").innerHTML="";
//     displayEmployees(filteredEmployees);
  
//   }else{
//     document.querySelector("#table-body").innerHTML="";
//   }
  
//   })
//   let displayEmployees=(employees)=>{

//     //select table body  to target the data 
//     let tableBody=document.querySelector("#table-body");
  
//     //lets create one table row which is initially empty 
//     let tableRow="";
  
//     for(let employee of employees){
//       tableRow +=`<tr>
//      <td>${employee.id}</td>
//       <td>${employee.first_name}</td>
//       <td>${employee.last_name}</td>
//       <td>${employee.email}</td>
//       <td>${employee.gender}</td> 
//       <td>${employee.ip_address}</td> 
//       </tr>`;
//       tableBody.innerHTML=tableRow
//     }
//   };

// Day 5 Assignment

// ANonymous Function 

//  var arr = [1,2,3,4,5,6,7,8]
//  var odd =function(){
//      for (let i = 0 ; i< arr.length ; i++){
//          return arr[i] % 2 !==  0 ;
//      }
//      console.log(arr[i]);
//  };
// console.log(odd());

// var arr = ['mandar','anish','rishi']

// var UpperCaps = function(){
//     for(let i =0 ;i<=arr.length ; i++){
//          return arr[i].toUpperCase()
//     } 

// }
// console.log(UpperCaps());

// var arr = [ 1,2,3,4,5];
// let sum = 0 ;
// var Addnum = function(){


// for(let i =0 ; i<arr.length;i++){
//      sum += arr[i] ;

// // console.log(sum)
// }
// console.log(sum)
// }
// console.log(Addnum())

// var arr = [1,2,3,4,5,6,7]
// let i ;
// var prime = function(){
//     for(let i=2;i<=arr.length;i++){
//         if(arr[i] % 2 === 0){
          

//             return arr>1
//         }
//     console.log(arr[i])
//     }
// }
// console.log(prime());

// Palindrome

// let arr = [ 1, 2, 3, 2, 1 ];
// let n = arr.length;

// const palindrome = function(arr,n){
//     let flag = 0;
 
    
//     for (let i = 0; i <= n / 2 && n != 0; i++) {
 
    
//         if (arr[i] != arr[n - i - 1]) {
//             flag = 1;
//             break;
// }

//     }
// }
// console.log(palindrome());

// Return median of twwo sorted arrays of same size
// var arr = [ 1, 2, 2, 3, 4, 4, 4, 5, 5 ];
// var n = arr.length;

// const removeduplicates = function(){
//     if(n==0 || n==1)
//     return n;

//     var j =0 ;
//     for (i = 0; i < n - 1; i++)
//             if (arr[i] != arr[i + 1])
//                 arr[j++] = arr[i];
 
//         arr[j++] = arr[n - 1];
 
//         return j;
// }
// console.log(removeduplicates());

// rotate k times

// let arr = [1,2,3,4,5];
// let k  = 2;

// const rotate = function(arr,k){
//     for(let i = 0 ; i<k;i++){
//         let temp = arr[0];

//         for (let j=0 ; j<arr.length ; j++){
//             arr[i] = arr[i+1];
//         }
//      arr[arr.lenght-1] =temp
//     }
//     return arr;


// }
// console.log(rotate(arr,k))


// // Arrow Functions


//  var arr = [1,2,3,4,5,6,7,8]
//  const odd = ( ) =>{
//      for (let i = 0 ; i< arr.length ; i++){
//          return arr[i] % 2 !==  0 ;
//      }
//      console.log(arr[i]);
//  };
// console.log(odd());

// var arr = ['mandar','anish','rishi']

// const UpperCaps = ()=>{
//     for(let i =0 ;i<=arr.length ; i++){
//          return arr[i].toUpperCase()
//     } 

// }
// console.log(UpperCaps());

// var arr = [ 1,2,3,4,5];
// let sum = 0 ;
// const Addnum = ( )=>{


// for(let i =0 ; i<arr.length;i++){
//      sum += arr[i] ;

// // console.log(sum)
// }
// console.log(sum)
// }
// console.log(Addnum())

// var arr = [1,2,3,4,5,6,7]
// let i ;
// const prime = ()=>{
//     for(let i=2;i<=arr.length;i++){
//         if(arr[i] % 2 === 0){
          

//             return arr>1
//         }
//     console.log(arr[i])
//     }
// }
// console.log(prime());

// //Palindrome

// let arr = [ 1, 2, 3, 2, 1 ];
// let n = arr.length;

// const palindrome = (arr,n)=>{
//     let flag = 0;
 
    
//     for (let i = 0; i <= n / 2 && n != 0; i++) {
 
    
//         if (arr[i] != arr[n - i - 1]) {
//             flag = 1;
//             break;
// }

//     }
// }
// console.log(palindrome());

// // Return median of twwo sorted arrays of same size
// var arr = [ 1, 2, 2, 3, 4, 4, 4, 5, 5 ];
// var n = arr.length;

// const removeduplicates = () =>{
//     if(n==0 || n==1)
//     return n;

//     var j =0 ;
//     for (i = 0; i < n - 1; i++)
//             if (arr[i] != arr[i + 1])
//                 arr[j++] = arr[i];
 
//         arr[j++] = arr[n - 1];
 
//         return j;
// }
// console.log(removeduplicates());

// // rotate k times

// let arr = [1,2,3,4,5];
// let k  = 2;

// const rotate = ()=>{
//     for(let i = 0 ; i<k;i++){
//         let temp = arr[0];

//         for (let j=0 ; j<arr.length ; j++){
//             arr[i] = arr[i+1];
//         }
//      arr[arr.lenght-1] =temp
//     }
//     return arr;


// }
// console.log(rotate(arr,k))



// class  Students{ 
//     constructor(name,age,cls){
//         this.names = name;
//         this.ages = age;
//         this.classs = cls;
//     }
//     biodata(){
//         return `'Hi I am mandar' ${this.names} i am in ${this.ages}`;
//     }
// }
// class Players extends Students{
//     constructor(name,age,cls,game){
//     super(name,age,cls);
//     this.games = game;

//     }
//     play(){
//         console.log(`${super.biodata()} i play ${this.games}`)
//     }
// } 
// let obj1 = new Players('mandar',26,'MCS',"Football");

// console.log(obj1.play()) ;


// document.body.innerHTML = `<div class ="heading-container>
// <h1>Brewery List </h1>
// <img class = "icon"  src = ""
// </div>;

// <div id="maincontainer" class"main-container"></div>`;



// const getdata = async() => {
//     try{
//         const data = await fetch("");
//         const brewery = await data.json();
//         maincontainer.innerHTML = "";

//         brewery.array.forEach((brewerys) => {
               

            
//         });
//     }
// }


// OOPs Assignment

// class Movie {
//     constructor(title,studio,rating = "PG13"){
// this.title = title;
// this.studio =studio;
// this.rating = rating;


//     }
//    getPG(){
//        let 

//    }

//     }




// const Movies = new Movie('Casino Roayle','Eon Production','PG!3')


// class Car{
// constructor(color,fuel,rpm,speed,year){
// this.color = color;
// this.fuel = fuel;
// this.rpm = rpm;
// this.speed = speed;
// this.year = year;

// }
// specification(){
//     let specs   = `
//     Color :${this.color}
//     Fuel : ${this.fuel}
//     Rpm : ${this.rpm}
//     Speed : ${this.speed}
//     Year : ${this.year}`;
// return specs ;

// }

// }


// const car1 = new Car('red','petrol','7000',145,2019);


// console.log(car1.specification());

// class Product{
//     constructor(id,name, price , quantity ,status){
//         this.id = id;
//         this.name = name;
//         this.price = price;
//         this.quantity = quantity;
//         this.status = status;
//   }

//   getTotal(){
//      return this.price * this.quantity;
  

// }
// }

// const product1 = new Product('1','Mandar',50,5,true);

// console.log(product1.getTotal());


// class Calc{


//     getAverage(...data){
// if (data.length ===0){
//     return 0 ;
// }
// else{
//     let sum = 0 ;
//     for(let i = 0 ; i<data.length;i++){
//         sum += data[i]
//     }
// return sum/data.length;
// }


//     }
// }

// let obj1 = new Calc();


// let Average = obj1.getAverage(1,2,3,4,5)
// console.log(Average)


// OOPs Assignment

// class Movie {
//     constructor(title,studio,rating = "PG13"){
// this.title = title;
// this.studio =studio;
// this.rating = rating;


//     }
  
//         getPG(mov,Movie){
//             let mov = [];
//             let indexaray = 0 ;

//             for(let i = 0;i<mov.length;i++){
//                 if(mov[i].rating = ('PG')){
//                     Movie1[indexaray] = mov[i];
//                     indexaray++

//                 }
//             }
//             return Movie1;
//         }

//         }



//  const Movies = new Movie('Casino Royale','Eon Production')
//  const Movie1 = new Movie[mov.length];
// console.log(Movies)

// //Circle


// class Circle {

//     constructor(radius,color){
// this.color =color;
// this.radius

//     }

// getradius(){
//     return double;
// }
// setRadius(){

// }

// getColor(){
//     return `${this.color}`

// }
// getArea(){
//     return double;
// }
// getCircumferance(){
//     return double;
// }
// }


//  const Circles = new Circle(1,'red')

// console.log(Circles);

// //Person

// class Person{
// constructor(Name,Age,Gender,College){
//     this.Name = Name;
//     this.Age = Age;
//     this.Gender = Gender;
//     this.College = College;
// }

// getData(){
//     return `Hi THis is my Data ${this.Name}
//     ${this.Age}
//     ${this.Gender}
//     ${this.College}`

// }
// }

// const Person1 = new Person('Mandar',23,'Male',"Symbiosis")
// const Person2 = new Person('Rishi',23,'Male','NMIMS')


// console.log(Person1.getData());
// console.log(Person2.getData());

//Uber Price

// class Uber{
//     constructor(Model,Distance,Cost){
//         this.Model = Model;
//         this.Distance = Distance;
//         this.Cost = Cost;
//     }

//     getFare(){
//  const TotalFare = this.Cost * this.Distance
//  return TotalFare;

//     }
// }


// const Uber1 = new Uber('UberGO',56,7);
// const Uber2 = new Uber('UberPremier',56,10);

// console.log(Uber1.getFare());
// console.log(Uber2.getFare());

 //div is block element 
 //span is inline element
 //to show someone else's website on ours
 // embed  - src
 //iframe - src
//  object - data : {to add any pdf to web page}

// embed map on webpage
// to upload a file in form

<div class = "container">
<h3 class="Blue">Book Name : <span>${obj.name}</span></h3>
<p class = "main" > Author's Name <span>${obj.authors}</span></p>
<p class = "main" > Isbn : <span>${obj.isbn}</span></p>
<p class = "main"> Number Of Pages : <span>${obj.numberOfPages}</span></p>
<p class = "main" > Publisher's Name : <span>${obj.publisher}</span></p>
<p class = "main"> Date : <span>${obj.released}</span></p>
<p class = "main"> Characters : <span>${obj.characters}</span></p> 
`














