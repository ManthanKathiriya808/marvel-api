let input = document.getElementById("input-box")
let button = document.getElementById("submit-btn")
let main = document.getElementById("main-container")
let list = document.getElementById("list-container")


let date = new Date()
console.log(date.getTime())

const [timestamp, apiKey, hashValue] = [ts, publicKey, hashVal]



function removeEle(){
    list.innerHTML="";


}


input.addEventListener("keyup",async () =>{

        removeEle();
        if(input.value.lenght < 4){
            return false
        }

        const url = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&nameStartsWith=${input.value}`

        const response = await fetch(url)
        const jsonData = await response.json()

        jsonData.data["results"].forEach((ele) =>{
            let name = ele.name
        })
})







button.addEventListener("click",(getResult = async ()=>{

    if(input.value.trim().length < 1){
        alert("Input can not be blank")
    }

    main.innerHTML = "";
    
const url = `http://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${apiKey}&hash=${hashValue}&name=${input.value}`

const response = await fetch(url)
const jsonData = await response.json()
jsonData.data["results"].forEach((ele) =>{

    main.innerHTML =   `
    
         <div class=" mx-auto bg-dark text-white  border-none lh-lg   rounded-3"  >
                <div class="p-3 bg-white rounded-circle mx-auto" style="width:340px"> 
                     <img src=${ele.thumbnail["path"] + "." + ele.thumbnail["extension"]} class="card-img-top w-100 img-thumbnail rounded-circle" alt="..." >
                </div>
                <div class="card-body mt-3">
                  <h2  class="card-title pb-2 text-center">${ele.name}</h2>
                  <h5  class="card-text lh-lg fw-lighter text-center">${ele.description}</h5>
                </div>
              </div> 
    `
})
}))



window.onload = getResult()