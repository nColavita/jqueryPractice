$(document).ready(function(){

//********* Digital Clock *********//

	function digitalClockExercise(){
//The core of getting the Hours/Minuts/Seconds	
		var date = new Date;

		var hours = date.getHours();
		var minutes = date.getMinutes();
		var seconds = date.getSeconds();
		if(hours > 12){
			hours -=12;
		}
//Adds a 0 in seconds & minutes
		if(seconds < 10){
			seconds = '0' + seconds;
		}

		if(minutes < 10){
			minutes = '0' + minutes;
		}

//if the minute is odd change clock background
		if(minutes % 2 !== 0){
			$('#background').css('background-color', 'blue');	
		}else{
			$('#background').css('background-color', 'grey');
		}
//Concatinating the clock to show the appropriate time
		var digitalClock = hours + ':' + minutes + ':' 	+ seconds;
//Displaying the Clock in my HTML	
		$('#clock').text(digitalClock);
	}

	setInterval(digitalClockExercise,1000);

//********* Javascript Problems *********//	

//Setting Validations on Form Submission
	var correctPass = '12345';
	var correctFirst = 'Nick';
	var correctLast = 'Colavita'


	$('form').submit(function(){
		var first = $('#firstname').val();
		var last = $('#lastname').val();
		var pass = $('#pass').val();

		if(first === '' && last === '' && pass === ''){
			$('h2').html("You Have Not Completed All of the Fields, <span style=\"color:#DB4848\">Try Again</span>.");
		}else if(first === '' || last === ''){
			$('h2').html("You Have Not Completed All of the Fields, <span style=\"color:#DB4848\">Try Again</span>.");
		}else if(first === correctFirst && last === correctLast && pass === correctPass){
			$('h2').html("You Have Completed All Fields, Log-In:<span style=\"color:green\"> Success</span>.");
		}else if(pass !== correctPass){
			$('h2').html("You Have Entered the Wrong Password, Log-In:<span style=\"color:#DB4848\"> Failed</span>.");	
		}
		return false;
	});


//Setting the Screen Resolution, Native Operating System, and Browser
	var width = screen.width;
	var height = screen.height;
	var os = navigator.platform;

	$('#resolution').text(width + 'x' + height);

	$('#operatingSystem').text(os);
	
//Setting Animation and Effects on Nav Bar Icons

	$('.nav').mouseover(function(){
		$(this).css('fontSize','1.3em');
	});
	$('.nav').mouseout(function(){
		$(this).css('fontSize', '1em');
	})

//Setting Animations of Social Media Icons
	$('img').mouseover(function(){
		$(this).fadeTo('slow', .4);
	});
	$('img').mouseout(function(){
		$(this).fadeTo('slow',1);
	})

})
