var number = document.querySelectorAll('.number')[0],
	numberTwo = document.querySelectorAll('.number')[1],
	numberThree = document.querySelectorAll('.number')[2],
	numberFour = document.querySelectorAll('.number')[3],

	numberTop = number.getBoundingClientRect().top,
	numberTopTwo = numberTwo.getBoundingClientRect().top,
	numberTopThree = numberThree.getBoundingClientRect().top,
	numberTopFour = numberFour.getBoundingClientRect().top,

	start = +number.innerHTML,
	end = +number.dataset.max,

	startSecond = +numberTwo.innerHTML,
	endSecond = +numberTwo.dataset.max,

	startThird = +numberThree.innerHTML,
	endThird = +numberThree.dataset.max,

	startFourth = +numberFour.innerHTML,
	endFourth = +numberFour.dataset.max,

	usuallSpeed = 8,
	customSpeed = 0.0001;

window.addEventListener('scroll', function onScroll() {
	if (window.pageYOffset > numberTop - window.innerHeight) {
		this.removeEventListener('scroll', onScroll);
		var interval = setInterval(function() {
			number.innerHTML = ++start;
			if (start == end) {
				clearInterval(interval);
			}

		}, usuallSpeed + 100);
	}

	if (window.pageYOffset > numberTopTwo - window.innerHeight) {
		this.removeEventListener('scroll', onScroll);
		var intervalTwo = setInterval(function() {
			numberTwo.innerHTML = ++startSecond;
			if (startSecond == endSecond) {
				clearInterval(intervalTwo);
			}

		}, usuallSpeed);
	}

	if (window.pageYOffset > numberTopThree - window.innerHeight) {
		this.removeEventListener('scroll', onScroll);
		var intervalThree = setInterval(function() {
			numberThree.innerHTML = ++startThird;
			if (startThird == endThird) {
				clearInterval(intervalThree);
			} 

		}, usuallSpeed);
	}

	if (window.pageYOffset > numberTopThree - window.innerHeight) {
		this.removeEventListener('scroll', onScroll);
		var intervalFour = setInterval(function() {
			numberFour.innerHTML = ++startFourth;
			if (startFourth == endFourth) {
				clearInterval(intervalFour);
			} 

		}, usuallSpeed);
	}
});