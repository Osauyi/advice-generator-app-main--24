const url = "https://api.adviceslip.com/advice";

var id = 0 
var string = ""


function dice() {
  fetch(url)
  .then(res => res.json())
  .then((data) => {
    id = data.slip.id
    string = data.slip.advice

    document.querySelector("h1").textContent = `Advice #${id}`
    document.querySelector("p").textContent = `"${string}"`
    
  })
  console.log("sup")
}


document.querySelector("button").addEventListener("click", dice) 
dice()