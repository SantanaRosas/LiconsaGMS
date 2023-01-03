function App(){}
    window.onload=function(event){
        var app = new App();
        window.app = app;
    }
    App.prototype.processingButton= function(event){
        const btn = event.currentTarget
        const carruselList = event.currentTarget.parentNode;
        const track = event.currentTarget.parentNode.querySelector('#track');
        const carrusel = track.querySelectorAll('.carrusel');

        const carruselwidth = carrusel[0].offsetWidth;
        const trackWidth = track.offsetWidth;
        const listwidth = carruselList.offsetWidth;
        
        track.style.left == ""? leftPosition = track.style.left = 0: leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

        btn.dataset.button == "button-prev" ? prevAction(leftPosition,carruselwidth,track): nextAction(leftPosition,trackWidth, listwidth, carruselwidth, track);       

    }
    let prevAction = (leftPosition, carruselwidth, track)=>{
        if (leftPosition >0){
            track.style.left = `${-1 * (leftPosition - carruselwidth)}px`;
        }
    }
    let nextAction = (leftPosition, trackWidth, listwidth, carruselwidth, track)=>{
        if(leftPosition < (trackWidth - listwidth)){
            track.style.left = `${-1 * (leftPosition + carruselwidth)}px`;
        }
    }
