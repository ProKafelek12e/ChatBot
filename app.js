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
    p.innerHTML = "help"
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
            res("The capital of "+jsonc[i].name+" is "+jsonc[i].capital)
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
function ticTacToe(){
    //container for icon and message
    const div = document.createElement("div")
    div.classList.add("msg-div")
    //mango icon
    const icon = document.createElement("img")
    icon.src = "mango-64.png"
    icon.classList.add("logo")
    //message
    const p = document.createElement("p")
    p.classList.add("twoje")
    p.classList.add("msg")

    div.appendChild(icon)
    div.appendChild(p)
    document.getElementById("chatArea").appendChild(div)
    //ttt board
    const board = document.createElement("div")
    board.classList.add("board")

    for(var i =0;i<9;i++){
        const square = document.createElement("h1")
        square.setAttribute("id","sq"+i)
        square.setAttribute("onclick",`tttCC(${i})`)
        board.appendChild(square)
    }
    p.appendChild(board)
}
var chosen = 0 
var chosed = [
    {square:1,chosed:0,mark:""},
    {square:2,chosed:0,mark:""},
    {square:3,chosed:0,mark:""},
    {square:4,chosed:0,mark:""},
    {square:5,chosed:0,mark:""},
    {square:6,chosed:0,mark:""},
    {square:7,chosed:0,mark:""},
    {square:8,chosed:0,mark:""},
    {square:9,chosed:0,mark:""}
]
function tttCC(i){
    if(chosen==0 && chosed[i].chosed==0){
        document.getElementById("sq"+i).innerHTML = "X"
        chosen = 1
        chosed[i].chosed = 1
        chosed[i].mark = "x"
        console.log("c: x")

    }
    else if(chosen==1&& chosed[i].chosed==0){
        document.getElementById("sq"+i).innerHTML = "O"
        chosen = 0
        chosed[i].chosed = 1
        chosed[i].mark = "o"
        console.log("c: O")
    }
    tttw()
    console.log(chosed)
}
function tttw(){
    var end = 0
    //horizontal wins
    if(chosed[0].chosed==1 && (chosed[0].chosed==chosed[1].chosed && chosed[1].chosed==chosed[2].chosed)&&(chosed[0].mark == chosed[1].mark && chosed[1].mark == chosed[2].mark)){
        console.log("end h1")
        end =1
        if(chosed[0].mark=="o"){
            res("Wow i won")
        }
        if(chosed[0].mark=="x"){
            res("Congratulations you won")
        }
    }
    if(chosed[3].chosed==1 && (chosed[3].chosed==chosed[4].chosed && chosed[4].chosed==chosed[5].chosed)&&(chosed[3].mark==chosed[4].mark && chosed[4].mark==chosed[5].mark)){
        console.log("end h2")
        end =1
        if(chosed[3].mark=="o"){
            res("Wow i won")
        }
        if(chosed[3].mark=="x"){
            res("Congratulations you won")
        }
    }
    if(chosed[6].chosed==1 && (chosed[6].chosed==chosed[7].chosed && chosed[7].chosed==chosed[8].chosed)&&(chosed[6].mark==chosed[7].mark && chosed[7].mark==chosed[8].mark)){
        console.log("end h3")
        end =1
        if(chosed[6].mark=="o"){
            res("Wow I won")
        }
        if(chosed[6].mark=="x"){
            res("Congratulations you won")
        }
    }
    //vertical wins
    if(chosed[0].chosed==1 && (chosed[0].chosed==chosed[3].chosed && chosed[3].chosed==chosed[6].chosed)&&(chosed[0].mark == chosed[3].mark && chosed[3].mark == chosed[6].mark)){
        console.log("end v1")
        end =1
        if(chosed[0].mark=="o"){
            res("Wow i won")
        }
        if(chosed[0].mark=="x"){
            res("Congratulations you won")
        }
    }
    if(chosed[1].chosed==1 && (chosed[1].chosed==chosed[4].chosed && chosed[4].chosed==chosed[7].chosed)&&(chosed[1].mark==chosed[4].mark && chosed[4].mark==chosed[7].mark)){
        console.log("end v2")
        end =1
        if(chosed[1].mark=="o"){
            res("Wow i won")
        }
        if(chosed[1].mark=="x"){
            res("Congratulations you won")
        }
    }
    if(chosed[2].chosed==1 && (chosed[2].chosed==chosed[5].chosed && chosed[5].chosed==chosed[8].chosed)&&(chosed[2].mark==chosed[5].mark && chosed[5].mark==chosed[8].mark)){
        console.log("end v3")
        end =1
        if(chosed[2].mark=="o"){
            res("Wow i won")
        }
        if(chosed[2].mark=="x"){
            res("Congratulations you won")
        }
    }
    //diagonal wins
    if(chosed[0].chosed==1 && (chosed[0].chosed==chosed[4].chosed && chosed[4].chosed==chosed[8].chosed)&&(chosed[0].mark == chosed[4].mark && chosed[4].mark == chosed[8].mark)){
        console.log("end dLuRd")
        end =1
        if(chosed[0].mark=="o"){
            res("Wow i won")
        }
        if(chosed[0].mark=="x"){
            res("Congratulations you won")
        }
    }
    if(chosed[2].chosed==1 && (chosed[2].chosed==chosed[4].chosed && chosed[4].chosed==chosed[6].chosed)&&(chosed[2].mark==chosed[4].mark && chosed[4].mark==chosed[6].mark)){
        console.log("end dRuLd")
        end =1
        if(chosed[2].mark=="o"){
            res("Wow i won")
        }
        if(chosed[2].mark=="x"){
            res("Congratulations you won")
        }
    }   
    if(end==1){
        for(var i=0;i<=8;i++){
            chosed[i].chosed =2
        }
    }
}
function tttBot(){
   if(chosed[random()].chosed==0){
    chosed[random()].chosed = 1
    chosed[random()].makr = "O"
   } 
   else{
    tttBot()
   }
}
function random(){
    max= 8
    return Math.floor(Math.random() * max)
}