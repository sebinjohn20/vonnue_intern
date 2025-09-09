let progress=document.getElementById("progress")
let song=document.getElementById("song")
let ctrlIcon=document.getElementById("ctrlIcon")

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;
}
function playPause(){
 if(ctrlIcon.classList.contains("fa-pause")){
    song.pause()
    ctrlIcon.classList.remove("fa-pause")
    ctrlIcon.classList.add("fa-play")
 }
 else {
    song.play()
    ctrlIcon.classList.add("fa-pause")
    ctrlIcon.classList.remove("fa-play")
 }
}
if(song.play()){
    setInterval(() => {
        progress.value=song.currentTime
    }, 500);
}

// Event handler triggered when the user changes the progress bar (seeks)
progress.onchange = function() {
    
    // Start playing the audio
    song.play();
    
    // Set the audio's current playback position to the progress bar's value
    song.currentTime = progress.value;
    
    // Update the control icon: remove the "pause" icon class
    ctrlIcon.classList.remove("fa-pause");
    
    // Add the "play" icon class to reflect that the user can press play next
    ctrlIcon.classList.add("fa-play");
}

