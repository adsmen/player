let video;
let durationControl; 
let soundControl;
let intervalId;

$().ready(function(){
    video = document.getElementById("player"); 
    video.addEventListener('click', playStop);

    let playButtons = document.querySelectorAll(".play");
    for (let i = 0; i < playButtons.length;i++){
        playButtons[i].addEventListener('click',playStop);
    }

    let micControl = document.getElementById("mic");
    micControl.addEventListener('click',soundOf)
    
    durationControl = document.getElementById("durationLevel");    
    durationControl.addEventListener('click',setVideoDuration);
    durationControl.addEventListener('onmousemove',setVideoDuration);
    durationControl.addEventListener('mousedown', stopInterval);
    durationControl.min = 0;
    durationControl.value = 0;    

    soundControl = document.getElementById("micLevel");
    
    soundControl.min = 0;
    soundControl.max = 10;
    soundControl.value = soundControl.max;
    soundControl.addEventListener('click', changeSoundVolume);
    soundControl.addEventListener('onmousemove', changeSoundVolume);
    
});

function playStop(){
    $(".video__player-img").toggleClass("video__player-img--active");
    durationControl.max = video.duration;

    if (video.paused){
        video.play();
        intervalId = setInterval(updateDuration,1)
        // video.webkitRequestFullScreen();
    }else{
        video.pause();  
        clearInterval(intervalId);
        // document.webkitExitFullscreen();
    }
}

function soundOf(){    
    if (video.volume ===0){
        video.volume = soundLevel;
        soundControl.value = soundLevel*10;
    }else{
        soundLevel = video.volume;
        video.volume = 0;
        soundControl.value = 0;
    }    
}

function stopInterval(){
    clearInterval(intervalId);
}

function setVideoDuration(){
    video.currentTime = durationControl.value;   
    intervalId = setInterval(updateDuration,1000/66);    
}

function changeSoundVolume(){
    video.volume = soundControl.value/10;
}

function updateDuration(){    
    durationControl.value = video.currentTime;
}