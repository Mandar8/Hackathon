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
    


<div class = "container">
<h3 class="Blue">Book Name : <span>${obj.name}</span></h3>
<p class = "main" > Author's Name <span>${obj.authors}</span></p>
<p class = "main" > Isbn : <span>${obj.isbn}</span></p>
<p class = "main"> Number Of Pages : <span>${obj.numberOfPages}</span></p>
<p class = "main" > Publisher's Name : <span>${obj.publisher}</span></p>
<p class = "main"> Date : <span>${obj.released}</span></p>

</div>

</div>`
}

    