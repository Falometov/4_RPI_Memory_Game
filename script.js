var rows = 4,
	columns,
	diff = 0,
	startButton = document.getElementById("start");

var delay = 100,
	i = 0,
	ms = 0,
	s = 0,
	m = 0,
	h = 0,
	timerStatus = false;
	startTimer = function(){
		ms += 1;
		if (ms == 10){
			ms = 0;
			s++;
			if (s == 60){
				s = 0;
				m++;
				if (m == 60){
					m = 0;
					h++;
				}
			}
		}
		var edit = document.getElementById("timer");
		var current_time = h+" : "+m+" : "+s+" . "+ms;
		edit.value = current_time;
		timer();			
	};

function timer(){
	setTimeout(startTimer, delay);
}

function startGame(event){
	if (diff == 0){
		alert("Please, choose difficulty level!");
	}else{
		event.preventDefault();
		if (!timerStatus){
			timerStatus = true;
			timer();
		}
		var cardsList = [
			{'id':"1",'img':"images/1.jpg"},
			{'id':"2",'img':"images/2.jpg"},
			{'id':"3",'img':"images/3.jpg"},
			{'id':"4",'img':"images/4.jpg"},
			{'id':"5",'img':"images/5.jpg"},
			{'id':"6",'img':"images/6.jpg"},
			{'id':"7",'img':"images/7.jpg"},
			{'id':"8",'img':"images/8.jpg"},
			{'id':"9",'img':"images/9.jpg"},
			{'id':"10",'img':"images/10.jpg"},
			{'id':"11",'img':"images/11.jpg"},
			{'id':"12",'img':"images/12.jpg"}],
			firstCard = '',
			secondCard = '',
			count = 0,
			arrayLength = rows * columns,
			cards = new Array(arrayLength),
			cardsArray = cardsList.concat(cardsList);

		for (var i = 0; i < arrayLength/2; i++){
			cards[i] = cardsArray[i];
			cards[i+(arrayLength/2)] = cardsArray[i+(cardsArray.length/2)];
		}

		function shuffle(array){
			let indexBefore = array.length,
				temp,
				indexAfter;
			while (indexBefore > 0){
				indexAfter = Math.floor(indexBefore * Math.random);
				indexBefore--;

				temp = array[indexBefore];
				array[indexBefore] = array[indexAfter];
				array[indexAfter] = temp;		
			}
			return(array);
		}

		shuffle(cards);
		
		
	}
}

startButton.addEventListener("click", startGame);

function changeBackground(obj){
	obj.value && (document.body.style.background = 'url('+obj.value+') no-repeat fixed center top 0% / 100% auto');
}

function setDifficulty(obj){
	diff = obj.value;
	columns = diff/rows;
}