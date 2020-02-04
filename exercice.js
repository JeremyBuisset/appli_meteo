function ajaxRequest(){
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200){
            document.getElementById('ville').innerHTML = this.responseText;
            var meteo = this.responseText;

        }
        var weather = JSON.parse(meteo);
        //display city name
        document.getElementById('ville').innerHTML = weather.name;

        var timeStamp = weather.dt;
        var monthsArray = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

        var date = new Date(timeStamp*1000);
        // Year
        var year = date.getFullYear();

        // Month
        var month = monthsArray[date.getMonth()];
        // Day
        var day = date.getDate();

        // Display date in day month year
        var formatDate = day+' '+month+' '+year;
        document.getElementById('date').innerHTML = formatDate;
        document.getElementById('temperature').innerHTML =  weather.main.temp + "°C";
        document.getElementById('maxTemp').innerHTML = "Temp. max : "+weather.main.temp_max + "°C";
        document.getElementById('minTemp').innerHTML = "Temp. min : "+weather.main.temp_min + "°C";
        document.getElementById('pression').innerHTML = "Pression: "+weather.main.pressure + " HPa";
        document.getElementById('windVit').innerHTML = "Vitesse du vent : "+ weather.wind.speed*3.6 + " km/h";
        document.getElementById('humidity').innerHTML = "Humidité : " + weather.main.humidity + "%";

        document.getElementById('longitude').innerHTML = "Longitude : " + weather.coord.lon + " °";
        document.getElementById('lattitude').innerHTML = "Lattitude : "  +weather.coord.lat + " °";
    };

    var ville = document.getElementById('ville').value;

    xhttp.open("GET", "script.php?ville="+ville, true);
    xhttp.send();
}

document.getElementById("submit").addEventListener("click", ajaxRequest);