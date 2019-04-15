
window.addEventListener('keydown', function(e){
	
	const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.individual_drum[data-key="${e.keyCode}"]`);
	if(!audio) return;
	audio.currentTime=0;
	key.classList.toggle('upgrade');
	audio.play()
})

const drums = document.querySelectorAll('.individual_drum');
drums.forEach(key =>  key.addEventListener('transitionend', function(naman){
	if(naman.propertyName!== 'transform'){
		return;
	}
	console.log(naman.propertyName)
	this.classList.remove('upgrade');
}))
