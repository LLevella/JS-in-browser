
window.onload = function(){
	let curInd = 0;
	const imgArray = [
		'./i/breuer-building.jpg',
		'./i/guggenheim-museum.jpg',
		'./i/headquarters.jpg',
		'./i/IAC.jpg',
		'./i/new-museum.jpg',
	]

	const next = document.getElementById('nextPhoto');
	const prev = document.getElementById('prevPhoto');
	const galery = document.getElementById('currentPhoto');

	function getNext(step = 1){
		curInd += step;
		if(curInd < 0) curInd = imgArray.length - 1;
		if (curInd >= imgArray.length) curInd = 0;
		return imgArray[curInd];;
	}

	galery.src = getNext(0);

	next.onclick = function(){
		galery.src = getNext(1);
	}

	prev.onclick = function(){
		galery.src = getNext(-1);
	}
};