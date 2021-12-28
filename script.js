document.body.innerHTML = `<div class = "heading-container">
<h1>Fire and Ice</h1>


</div>

<div id ="maincontainer" class = "main-container"></div>`;



const getData = async() => {
    try {
const data = await fetch("https://anapioficeandfire.com/api/books")
const Books = await  data.json();


maincontainer.innerHTML = " ";
 Books.forEach((books) => {
     displayData(books);
     
 });
     
 }


catch(error){
console.log(error)
}
};


getData();

const displayData =  (obj)=>{
    maincontainer.innerHTML += `
    <div class = "container">
    
<h3> Books Name :Name <span>Name:${obj.name}</span></h3>



    </div>`}