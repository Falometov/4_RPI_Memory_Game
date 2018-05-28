var diff = null,
	startButton = document.getElementById("start"),
	backImage = 1,
	myTimer,
	game = false;

function changeBackground(obj){
	obj.value && (document.body.style.background = "url("+obj.value+") no-repeat fixed center top 0% / 100% auto");
}

function setDifficulty(obj){
	diff = obj.value;
	if (diff === 16){
		let workSpace = document.getElementById("");
	}
}

function setBack(obj){
	backImage = obj.value;
}

var cardsList = ["1","2","3","4","5","6","7","8","9","10","11","12"];

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
		let edit = document.getElementById("timer"),
			current_time = h+" : "+m+" : "+s+" . "+ms;
		edit.value = current_time;
		timer();			
	};

function timer(){
	myTimer = setTimeout(startTimer, delay);
}

function resetGame(){
	window.location.reload();
}

function startGame(event){
	if (!game){
		if (diff == null){
			alert("Please, choose difficulty level!");
		}else{
			event.preventDefault();
			game = true;
			if (!timerStatus){
				timerStatus = true;
				timer();
			}
			var firstCard = '',
				secondCard = '',
				arrayLength = diff,
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
					indexAfter = Math.floor(indexBefore * Math.random());
					indexBefore--;

					temp = array[indexBefore];
					array[indexBefore] = array[indexAfter];
					array[indexAfter] = temp;		
				}
				return(array);
			}

			shuffle(cards);

			var cardsNum = 0,
				previousTarget = null,
				workSpace = document.getElementById("work_space"),
				workDivs = document.createElement("section");
			workDivs.classList.add("work_divs");
			workDivs.style.heigh = 830+"px";

			i = 0;
			while (i < cards.length){
				var cardImage = document.createElement("div");
				cardImage.classList.add("card_img");
				cardImage.dataset.id = cards[i];

				var cardBack = document.createElement("div");
				cardBack.classList.add("card_back");
				if (backImage === 1){
					cardBack.classList.add("first_back");
				}else{
					cardBack.classList.add("second_back");
				}

				var cardFront = document.createElement("div");
				cardFront.classList.add("card_front");
				console.log(i);
				cardFront.style.backgroundImage = `url(images/${cards[i]}.jpg)`;

				workDivs.appendChild(cardImage);
				cardImage.appendChild(cardFront);
				cardImage.appendChild(cardBack);
				i++;
			}
			workSpace.appendChild(workDivs);
		}
	}
}

startButton.addEventListener("click", startGame);