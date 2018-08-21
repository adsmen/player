let video;
let soundLevel=1;

$().ready(function(){
    video = document.getElementById("player");    
});

function playStop(){
    $(".video__player-img").toggleClass("video__player-img--active");
    if (video.paused){
        video.play();
    }else{
        video.pause();
    }
}

function soundOf(){    
    if (video.volume ===0){
        video.volume = soundLevel;
    }else{
        soundLevel = video.volume;
        video.volume = 0;
    }    
}

