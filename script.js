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
}

function setBack(obj){
	backImage = obj.value;
}

var cardsList = [{id:"1", img:"images/1.jpg"},
				{id:"2", img:"images/2.jpg"},
				{id:"3", img:"images/3.jpg"},
				{id:"4", img:"images/4.jpg"},
				{id:"5", img:"images/5.jpg"},
				{id:"6", img:"images/6.jpg"},
				{id:"7", img:"images/7.jpg"},
				{id:"8", img:"images/8.jpg"},
				{id:"9", img:"images/9.jpg"},
				{id:"10", img:"images/10.jpg"},
				{id:"11", img:"images/11.jpg"},
				{id:"12", img:"images/12.jpg"}];


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
		var edit = document.getElementById("timer"),
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
				var indexBefore = array.length,
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

			var playingCards = 0,
				previousTarget = null,
				workSpace = document.getElementById("work_space"),
				workDivs = document.createElement("section");
			if (diff == 16){
				workDivs.classList.add("work_divs16");
			}
			if (diff == 20){
				workDivs.classList.add("work_divs20");
			}
			if (diff == 24){
				workDivs.classList.add("work_divs24");
			}
			workDivs.style.heigh = 830+"px";

			i = 0;
			while (i < cards.length){
				var cardImage = document.createElement("div");
				cardImage.classList.add("card_img");
				cardImage.dataset.name = cards[i].id;

				var cardBack = document.createElement("div");
				cardBack.classList.add("card_back");
				if (backImage === 1){
					cardBack.classList.add("first_back");
				}else{
					cardBack.classList.add("second_back");
				}

				var cardFront = document.createElement("div");
				cardFront.classList.add("card_front");
				cardFront.style.backgroundImage = `url(${cards[i].img})`;
				
				workDivs.appendChild(cardImage);
				cardImage.appendChild(cardBack);
				cardImage.appendChild(cardFront);
				

				
				i++;
			}
			workSpace.appendChild(workDivs);
			
			var matchCards = function(){
				var selectedCard = document.querySelectorAll(".selected");
				selectedCard.forEach(function (card) {
					card.classList.add("match");
					diff--;
					if(diff == 0){
						clearTimeout(myTimer);
						alert("You win! Congratulations! Yor time: "+h+":"+m+":"+s+"."+ms);
					}
				});
			}
			
			var deleteCards = function(){
				console.log("del");
				previousTarget = null;
				FirstCard = '';
				SecondCard = '';
				playingCards = 0;
				var selectedCard = document.querySelectorAll(".selected");
				selectedCard.forEach(function (card) {
					card.classList.remove("selected");
				});
				var selectedCard = document.querySelectorAll(".turn");
				selectedCard.forEach(function (card) {
					card.classList.remove("turn");
				});
			};
			
			workDivs.addEventListener("click",function(event){
				
				var clicked = event.target;
				if (clicked.tagName === 'section' || clicked === previousTarget || clicked.parentNode.classList.contains("selected") || clicked.parentNode.classList.contains("match")) {
    				return;
  				}
				if (playingCards < 2){
					playingCards++;
					if (playingCards == 1){
						firstCard = clicked.parentNode.dataset.name;
						clicked.parentNode.classList.add("selected");
						clicked.classList.add("turn");
					}else{
						secondCard =  clicked.parentNode.dataset.name;
						clicked.parentNode.classList.add("selected");
						clicked.classList.add("turn");
					}
					function doNext(){
						console.log("vot tak vot");
						if (playingCards == 2){
							if (firstCard == secondCard){
								matchCards();
							}
							deleteCards();	
						}
					}
					setTimeout(doNext, 1000);
					previousTarget = clicked;
				}
			});		
		}
	}
}

startButton.addEventListener("click", startGame);