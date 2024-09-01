function ativar(){
     let musicOn = document.getElementById("music1")
     musicOn.play() 
     musicOn.controls = true

}

function desativar(){
    let musicOff = document.getElementById("music1")
    musicOff.pause()
    musicOff.controls = false
}
   

