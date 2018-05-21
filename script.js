//
//var cards = [
//	{
//		img: "images/1.jpg",
//		id: 1
//	},
//	{
//		img: "images/2.jpg",
//		id: 2
//	},
//	{
//		img: "images/3.jpg",
//		id: 3
//	},
//	{
//		img: "images.jpg",
//		id: 4
//	},
//	{
//		img: "images/5.jpg",
//		id: 5
//	},
//	{
//		img: "images/6.jpg",
//		id: 6
//	},
//	{
//		img: "images/7.jpg",
//		id: 7
//	},
//	{
//		img: "images/8.jpg",
//		id: 8
//	},
//	{
//		img: "images/9.jpg",
//		id: 9
//	},
//	{
//		img: "images/10.jpg",
//		id: 10
//	},
//	{
//		img: "images/11.jpg",
//		id: 11
//	},
//	{
//		img: "images/12.jpg",
//	}
//];

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
		setTimeout(startTimer, delay);	
		
		
	};

var timer = setTimeout(startTimer, delay);
