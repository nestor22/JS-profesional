function AutoPlay(){
    //this is on porpuse
}

AutoPlay.prototype.run = function(player){
 player.mute();
 player.play();
}

export default AutoPlay;
