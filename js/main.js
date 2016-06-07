$( document ).ready(function() {


		var form_generate = $('#form_generate');
		var fib = [];
		var array_single_number = [];

		function reset_varriable(){
			 fib = [];
			 array_single_number = [];
			
		} 
		
		var color_bck = ['bg_one','bg_two','bg_three','bg_four', 'bg_five', 'bg_six', 'bg_seven', 'bg_height','bg_nine']

		var nLength = function(n) { 
	   	 return (Math.log(Math.abs(n)+1) * 0.43429448190325176 | 0) + 1; 
		}



		function fibo(nbr_start,nbr_repeat){
		fib[0] = nbr_start; 
		fib[1] = nbr_start + 1;
		fib[2] = fib[0] + fib[1]
		
		for(var i= 0; i<=nbr_repeat; i++) {

			if ( i >= 3) {
				fib[i] = fib[i-2] + fib[i-1];
			}
		    
		}

    };

    function split_array(fib){

    	array_single_number = [];

    	// console.log(fib);
    	for(var i= 0; i<= fib.length - 1; i++) {

		if ( nLength(fib[i]) >= 2 ){
			 
			var digits = [];
			var num = fib[i]

		while (num > 0) {
	    digits[digits.length] = num % 10;
	    num = parseInt(num / 10);
		}
		digits.reverse();
		// console.log(digits, 'digits');
		array_single_number = array_single_number.concat(digits)

	}

		else{
			array_single_number.push(fib[i]);
		}
		
		
		
    }
    $('#result').empty().html('number play : ' + array_single_number);

}

function play_music(array_single_number){
var piano = Synth.createInstrument('piano');


	for(var i= 0; i<= array_single_number.length - 1; i++) {
		//console.log( array_single_number[i]);
		(function(i) {
		setTimeout(function(){ 
			piano.play('C', array_single_number[i] + 1, 1);

			$('body').removeClass().addClass(color_bck[i]);

		}, 500 + (500 * i));
		 })(i);
		
	}

}

		form_generate.submit(function(event) {
			
			event.preventDefault();
			reset_varriable();
			var nbr_start = Math.round($('#nbr_start').val());
		var nbr_repeat = Math.round($('#nbr_repeat').val()) - 1;
		if (nbr_repeat >= 2 ) {
		fibo(nbr_start,nbr_repeat)
		split_array(fib);
		play_music(array_single_number);

		}
		else{
			reset_varriable();
			$('.error_input').fadeIn('slow');
		}
		

		});
		
});
