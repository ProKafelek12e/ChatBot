function send(){
    const msg = document.getElementById("msg").value
    const p = document.createElement("p")
    p.innerHTML = msg
    p.classList.add("moje")
    p.classList.add("msg")
    document.getElementById("chatArea").appendChild(p)
    resp(msg)
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
    //div to handle ig and msg from mango
    const div = document.createElement("div")
    div.classList.add("msg-div")
    //element for msg
    const p = document.createElement("p")
    //mango img before msg
    const icon = document.createElement("img")
    icon.src = "mango-64.png"
    icon.classList.add("logo")
    //greeting
    if(msg.toLocaleLowerCase() == "hi"||msg.toLocaleLowerCase() =="hello"){
    
    p.innerHTML = "Hi how can i help you?"
    p.classList.add("twoje")
    p.classList.add("msg")
    }


    div.appendChild(icon)
    div.appendChild(p)
    document.getElementById("chatArea").appendChild(div)
}