

$("#submit").click(function () {
				var cityname=$('#city-name').val();	
              	getData();
            });	

function getData(){

	var cityname=$('#city-name').val();
	$('#showdata').html('<iframe src="http://api.openweathermap.org/data/2.5/weather?q='+cityname+'&mode=html&appid=4724aeb3679c3b760098a6a700b456fe?wmode=opaque">alternative content for browsers which do not support iframe.	</iframe>');

}
