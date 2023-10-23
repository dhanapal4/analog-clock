
function setClock(){
    const currentDate=new Date()
    const secondsRatio=currentDate.getSeconds() / 60
    const minuteRatio = (secondsRatio+currentDate.getMinutes()) / 60
    const hourRatio=(minuteRatio+currentDate.getHours())/12

    const hourElement=document.querySelector('[data-hour]')
    const minuteElement=document.querySelector('[data-minute]')
    const secondElement=document.querySelector('[data-second]')
    
    setRotation(hourElement,hourRatio)
    setRotation(minuteElement,minuteRatio)
    setRotation(secondElement,secondsRatio)


}


function setRotation(element,value){
    element.style.setProperty('--rotate',value*360)
}

setClock()
setInterval(setClock,1000)