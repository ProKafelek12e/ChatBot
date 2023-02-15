function send(){
    const msg = document.getElementById("msg").value
    const p = document.createElement("p")
    p.innerHTML = msg
    p.classList.add("moje")
    p.classList.add("msg")
    document.getElementById("chatArea").appendChild(p)
    resp(msg)
}
function resp(msg){
    if(msg.toLocaleLowerCase() == "hi"||msg.toLocaleLowerCase() =="hello"){
    const p = document.createElement("p")
    p.innerHTML = "Mango: Hi how can i help you?"
    p.classList.add("twoje")
    p.classList.add("msg")
    document.getElementById("chatArea").appendChild(p)
    }
}