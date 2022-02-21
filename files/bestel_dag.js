<html>
    <head>
        <script type="text/javascript">
         function wenFunction() {
  var d = new Date();
  var n = d.getMonth();
  
	var days =[3,2,1,7,6,5,4];
	var d = new Date();
	d.setHours( d.getHours() + 5 )
	d.setDate(d.getDate()+days[d.getDay()]);
	var arrayOfWeekdays = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
    var arrayOfMonths = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]

	var weekdayNumber = d.getDay()
	var weekdayName = arrayOfWeekdays[weekdayNumber]
    var monthNumber = d.getMonth()
   	var monthName = arrayOfMonths[monthNumber]
    var dateNumber = d.getDate()
    var year = d.getFullYear()
    var takeAwayDay = weekdayName + " " + dateNumber + " " + monthName + " " + year;

  var str = document.getElementById("wensd").innerHTML; 
  var res = str.replace("dag", takeAwayDay);
  document.getElementById("wensd").innerHTML = res;
  

}

        function sunFunction() {
  var da = new Date();
 
  
	var dayss =[7,6,5,4,3,2,1];
	var da = new Date();
	da.setHours( da.getHours() + 5 )
	da.setDate(da.getDate()+dayss[da.getDay()]);
	var arrayOfWeekdayss = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"]
    var arrayOfMonthss = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]

	var weekdayNumbers = da.getDay()
	var weekdayNames = arrayOfWeekdayss[weekdayNumbers]
    var monthNumbers = da.getMonth()
   	var monthNames = arrayOfMonthss[monthNumbers]
    var dateNumbers = da.getDate()
    var years = da.getFullYear()
    var takeAwayDay = weekdayNames + " " + dateNumbers + " " + monthNames + " " + years;

  var str = document.getElementById("sund").innerHTML; 
  var res = str.replace("datum", takeAwayDay);
  document.getElementById("sund").innerHTML = res;
  

}

            </script>

    </head>
<body onload="sunFunction(); wenFunction()">
<p id="wensd">Als je nu besteld kan je afhalen op <strong>dag</strong>.</p>


</body>
</html>
    
        



