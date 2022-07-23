let counter = function () {
	const counters = document.querySelectorAll('.counter__value');
	const speed = 200;
	counters.forEach(counter => {
		counter.innerText = 0;
		const updateCount = () => {
			const target = +counter.getAttribute("data-");
			const count = counter.innerText;
			const inc = target / speed;
			if (count < target) {
				counter.innerText = parseInt(parseInt(count) + parseInt(inc.toFixed(0)));
				setTimeout(updateCount, 1);
			} else {
				counter.innerText = target;
			}	
		};
		updateCount();
	});
}

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
	  if (entry.isIntersecting) {
		counter();
	  }
	});
  });
  
  observer.observe(document.querySelector('.counter__value'));