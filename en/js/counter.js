var number = document.querySelector('.numberOne'),
	numberTwo = document.querySelector('.numberTwo'),
	numberThree = document.querySelector('.numberThree'),
	numberFour = document.querySelector('.numberFour'),

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

	windowHeight = window.innerHeight,

	usuallSpeed = 8,
	customSpeed = 0.0001;

window.addEventListener('scroll', function onScroll() {
	if (window.pageYOffset > numberTop - windowHeight) {
		this.removeEventListener('scroll', onScroll);
		var interval = setInterval(function() {
			number.innerHTML = ++start;
			if (start == end) {
				clearInterval(interval);
			}

		}, usuallSpeed + 100);
	}

	if (window.pageYOffset > numberTopTwo - windowHeight) {
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

	if (window.pageYOffset > numberTopFour - window.innerHeight) {
		this.removeEventListener('scroll', onScroll);
		var intervalFour = setInterval(function() {
			numberFour.innerHTML = ++startFourth;
			if (startFourth == endFourth) {
				clearInterval(intervalFour);
			} 

		}, usuallSpeed);
	}
})
