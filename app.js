var jsonc = []
//Downloading data about countries
async function getCountries(){
    const datac = await fetch("https://restcountries.com/v2/all")
    jsonc = await datac.json()
}
getCountries()
//creating message
function send(){
    const msg = document.getElementById("msg").value
    const p = document.createElement("p")
    p.innerHTML = msg
    p.classList.add("moje")
    p.classList.add("msg")
    document.getElementById("chatArea").appendChild(p)
    resp(msg)
    document.getElementById("msg").value = ""
}
function help(){
    //div to handle ig and msg from mango
    const div = document.createElement("div")
    div.classList.add("msg-div")
    
    //mango img before msg
    const icon = document.createElement("img")
    icon.src = "mango-64.png"
    icon.classList.add("logo")
    
    //element for msg
    const p = document.createElement("p")
    p.innerHTML = "I can do..."
    p.classList.add("twoje")
    p.classList.add("msg")

    div.appendChild(icon)
    div.appendChild(p)
    document.getElementById("chatArea").appendChild(div)

}
function resp(msg){
    greeting(msg)
    countries(msg)
}
function greeting(msg){
    if(msg.toLocaleLowerCase() == "hi" || msg.toLocaleLowerCase() == "hello"){
        hi="Hi how can i help you today?"
        res(hi)
    }
}
async function countries(msg){

    for(var i=0;i<=jsonc.length-1;i++){
        //capitals
        if(msg.toLocaleLowerCase().includes("capital") && msg.toLocaleLowerCase().includes(jsonc[i].name.toLocaleLowerCase())){
            res("The capital of"+jsonc[i].name+" is "+jsonc[i].capital)
        }
        if(msg.toLocaleLowerCase().includes("population")&& msg.toLocaleLowerCase().includes(jsonc[i].name.toLocaleLowerCase())){
            res("Population of "+jsonc[i].name+" is around "+jsonc[i].population+" people")
        }
    }
}
function res(res){

    const div = document.createElement("div")
    div.classList.add("msg-div")

    const icon = document.createElement("img")
    icon.src = "mango-64.png"
    icon.classList.add("logo")
    
    const p = document.createElement("p")
    p.innerHTML = res
    p.classList.add("twoje")
    p.classList.add("msg")

    div.appendChild(icon)
    div.appendChild(p)
    document.getElementById("chatArea").appendChild(div)
    
}
