
window.onload = function(){
	let interval = 5000; // 5 sec
	let curInd = 0;
	const imgArray = [
		'./i/airmax-jump.png',
		'./i/airmax-on-foot.png',
		'./i/airmax-playground.png',
		'./i/airmax-top-view.png',
		'./i/airmax.png',
	]
	const elem = document.getElementById('slider');

	function getNext(step = 0){
		curInd += step;
		if(curInd < 0) curInd = imgArray.length - 1;
		if (curInd >= imgArray.length) curInd = 0;
		return imgArray[curInd];;
	}


	elem.src = getNext();

	let timer = window.setInterval( function(){
		elem.src = getNext(1);
	}, interval);

};