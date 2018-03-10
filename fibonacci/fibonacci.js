function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}


var number

window.onload = function() {
	const element = document.querySelector('form');
	element.addEventListener('submit', event => {
		event.preventDefault();
		
		number = document.getElementById('number').value;

	    console.time('Test performance');
	    
	    console.log("Ha introducido el número:" + number);
	    var fcalc = fibonacci(number);
	    console.log("Su fibonacci es: " + fcalc);
	    console.timeEnd('Test performance');

	});
}


