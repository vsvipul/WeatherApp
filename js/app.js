
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
	var res1,res2,res3,res;
	$.ajax(
		{
			url: 'http://api.openweathermap.org/data/2.5/weather?q=' +cityname1+ "&units=metric" + "&APPID="+appid,
			type: "GET",
			dataType: "jsonp",
			success: function(data)
			{
				res1=parseFloat(data.main.temp);
				$.ajax(
				{
					url: 'http://api.openweathermap.org/data/2.5/weather?q=' +cityname2+ "&units=metric" + "&APPID="+appid,
					type: "GET",
					dataType: "jsonp",
					success: function(data)
					{
						res2=parseFloat(data.main.temp);
						$.ajax(
						{
							url: 'http://api.openweathermap.org/data/2.5/weather?q=' +cityname3+ "&units=metric" + "&APPID="+appid,
							type: "GET",
							dataType: "jsonp",
							success: function(data)
							{
								res3=parseFloat(data.main.temp);
								res=((res1+res2+res3)/3).toFixed(2);
								$('#showdata').html('<h1>The average temperature is: '+res+' <sup>o</sup>C</h1>');
							}
						});
					}

				});
			}
		});
}