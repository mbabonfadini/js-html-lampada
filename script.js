//  status 0 = desligado; status 1 = ligado, status 3 = quebrado
var status = 0

function onoff() {
    if (status == 0) {
        status = 1
        window.document.getElementById("powerOff").style.display ="none"
        window.document.getElementById("powerOn").style.display ="block"
        window.document.getElementById("button").innerHTML = "Apaga"
    }
    else if (status == 1) {
        status = 0
        window.document.getElementById("powerOff").style.display ="block"
        window.document.getElementById("powerOn").style.display ="none"
        window.document.getElementById("button").innerHTML = "Acende"
        
    }
    else {
        status = 0
        window.document.getElementById("powerOff").style.display ="block"
        window.document.getElementById("powerOn").style.display ="none"
        window.document.getElementById("break").style.display ="none"
        window.document.getElementById("button").innerHTML = "Acende"
    }
}

function quebra(){
    status = 3
    window.document.getElementById("powerOff").style.display ="none"
    window.document.getElementById("powerOn").style.display ="none"
    window.document.getElementById("break").style.display ="block"
    window.document.getElementById("button").innerHTML = "Trocar Lampada"

}
