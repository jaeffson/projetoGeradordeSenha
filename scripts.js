let slideElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePass = document.querySelector("#value")
let password = document.querySelector("#password")

let ContainerPass = document.querySelector("#pass-container")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@!#*"
let newPass =  ""

sizePass.innerHTML = slideElement.value
//oninput troca valores do input// 
slider.oninput = function(){
    sizePass.innerHTML = this.value
 }

 const geratePass = () =>{
    let pass = ""

    for (let i = 0, num = charset.length; i < slideElement.value; ++i){
       //pegar a posição da base charset pra gerar num aleatorio de acordo com o numero escolhido// 
        pass += charset.charAt(Math.floor(Math.random() * num))
        
    }
      ContainerPass.classList.remove("hide")
     password.innerHTML = pass;
        
 }
 function copy (){
    alert("senha copiada com sucesso!")
    navigator.clipboard.writeText(newPass)
 }