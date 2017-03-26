
$("#submit").click(function () {
				var cityname=$('#city-name').val();	
              	getData();
            });	

function getData(){
	var cityname=$('#city-name').val();
	$('#showdata').html('<iframe src="http://api.openweathermap.org/data/2.5/weather?q='+cityname+'&mode=html&appid=4724aeb3679c3b760098a6a700b456fe">alternative content for browsers which do not support iframe.	</iframe>');
}

var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var dayNames = ["Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday", "Sunday"];
var date= new Date();
var day= dayNames[date.getDay()];
var datemonth= date.getDate()+' '+monthNames[date.getMonth()];
$('#dayname').html(day)
$('#datemonth').html(datemonth);
