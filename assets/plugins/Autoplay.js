function AutoPlay(){}

AutoPlay.prototype.run = function(player){
 Player.mute();
 player.play();
}

export default AutoPlay;
