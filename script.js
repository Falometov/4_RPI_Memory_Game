var rows = 4,
	columns;

function startGame(event){
	event.preventDefault();
	var ArrayOfCards = [
		{'name':'1','picture':'images/1.jpg'},
		{'name':'2','picture':'images/2.jpg'},
		{'name':'3','picture':'images/3.jpg'},
		{'name':'4','picture':'images/4.jpg'},
		{'name':'5','picture':'images/5.jpg'},
		{'name':'6','picture':'images/6.jpg'},
		{'name':'7','picture':'images/7.jpg'},
		{'name':'8','picture':'images/8.jpg'},
		{'name':'9','picture':'images/9.jpg'},
		{'name':'10','picture':'images/10.jpg'},
		{'name':'11','picture':'images/11.jpg'},
		{'name':'12','picture':'images/12.jpg'}];
	var firstCard = '',
		secondCard = '',
		count = 0;
}

var delay = 100,
	i = 0,
	ms = 0,
	s = 0,
	m = 0,
	h = 0,
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

function changeBackground(obj){
	obj.value && (document.body.style.background = 'url('+obj.value+') no-repeat fixed center top 0% / 100% auto');
}

function setDifficulty(obj){
	var diff = obj.value;
	columns = diff/rows;
}