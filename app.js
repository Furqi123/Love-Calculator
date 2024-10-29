

let check = ()=>{
    
    let boy = document.getElementById("boy")
     let girl = document.getElementById("girl")
    let percentage = document.getElementById('percentage')

     let randomNumber = Math.floor(Math.random()*10)

     if(randomNumber == 0){
        percentage.innerHTML = '10%'
     }

     else if(randomNumber == 1){
        percentage.innerHTML = '20%'
     }

     
     else if(randomNumber == 2){
        percentage.innerHTML = '30%'
     }

     
     else if(randomNumber == 3){
        percentage.innerHTML = '40%'
     }

     
     else if(randomNumber == 4){
        percentage.innerHTML = '50%'
     }

     
     else if(randomNumber == 5){
        percentage.innerHTML = '60%'
     }

     
     else if(randomNumber == 6){
        percentage.innerHTML = '70%'
     }

     
     else if(randomNumber == 7){
        percentage.innerHTML = '80%'
     }

     
     else if(randomNumber == 8){
        percentage.innerHTML = '90%'
     }

     else if(randomNumber == 9){
        percentage.innerHTML = '100%'
     }


     boy.value = ' '
     girl.value = ' '

}


