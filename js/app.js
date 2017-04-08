
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
var day= dayNames[date.getDay()-1];
var datemonth= date.getDate()+' '+monthNames[date.getMonth()];
$('#dayname').html(day)
$('#datemonth').html(datemonth);

$("#submit1").click(function () {
				var cityname1=$('#city-name1').val();
				var cityname2=$('#city-name2').val();
				var cityname3=$('#city-name3').val();	
              	getData2();
            });	

function getData2(){
	var cityname1=$('#city-name1').val();
	var cityname2=$('#city-name2').val();
	var cityname3=$('#city-name3').val();
	var appid='4724aeb3679c3b760098a6a700b456fe';
	var res1,res2,res3,res,p1,p2,p3,p,h1,h2,h3,h;
	$.ajax(
		{
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' +cityname1+ "&units=metric" + "&APPID="+appid,
			type: "GET",
			dataType: "jsonp",
			success: function(data)
			{
				res1=parseFloat(data.main.temp);
				p1=parseFloat(data.main.pressure);
				h1=parseFloat(data.main.humidity);
				$.ajax(
				{
					url: 'http://api.openweathermap.org/data/2.5/weather?q=' +cityname2+ "&units=metric" + "&APPID="+appid,
					type: "GET",
					dataType: "jsonp",
					success: function(data)
					{
						res2=parseFloat(data.main.temp);
						p2=parseFloat(data.main.pressure);
						h2=parseFloat(data.main.humidity);
						$.ajax(
						{
							url: 'http://api.openweathermap.org/data/2.5/weather?q=' +cityname3+ "&units=metric" + "&APPID="+appid,
							type: "GET",
							dataType: "jsonp",
							success: function(data)
							{
								res3=parseFloat(data.main.temp);
								p3=parseFloat(data.main.pressure);
								h3=parseFloat(data.main.humidity);
								res=((res1+res2+res3)/3).toFixed(2);
								p=((p1+p2+p3)/3).toFixed(2);
								h=((h1+h2+h3)/3).toFixed(2);
								$('#showdata').html('<h1>Average Temperature: '+res+' <sup>o</sup>C</h1><br><h1>Average Pressure: '+p+' hPa</h1><br><h1>Average Humidity: '+h+' %</h1>');
							}
						});
					}

				});
			}
		});
}
