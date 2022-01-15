



const getData = async()=>{
    try {
        const data =  await fetch("https://api.openbrewerydb.org/breweries")
        const books = await data.json()
     
        document.getElementById('maincontainer').innerHTML =""
        books.forEach((book )=> {
            displayData(book)
            
        });

    }catch(err){

        console.log(err)
    };

}
getData()
const displayData = (obj)=>{
  document.getElementById('maincontainer').innerHTML += `
 <div class = "container">
 <h3 class="red" > Brewery City :<span>${obj.city}</span></h3>
 <p class= "para-red"> Brewery Type: <span>${obj.brewery_type}</span></p>
 <p class= "para-red"> Brewery Phone : <span> ${obj.phone}</span></p>
 <p class= "para-red"> Brewery State : <span> ${obj.state}</span></p>
 `
}