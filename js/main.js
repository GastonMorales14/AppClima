"use strict"

document.querySelector("#consult").addEventListener("click", loadWeather);


    const city = document.querySelector("#city").value;
    
    async function loadWeather(city){
        let query = `q=${city}`;
        let container = document.querySelector("#showCity");
        try{
            let response = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?${query}&appid=5f77f1147f90c7ed16e35adf41cc8b98&units=metric`
              );
            if (response.ok) {
                let cityweather = await response.json();
                container.innerHTML += `<h1>${city}</h1>`;
                container.innerHTML += `<p>Temperatura:  ${cityweather.main.temp}</p>`;
                container.innerHTML += `<p>MIN:  ${cityweather.main.temp_min}</p>`;
                container.innerHTML += `<p>MAX:  ${cityweather.main.temp_max}</p>`;
                container.innerHTML += `<p>Pais:  ${cityweather.sys.country}</p>`;
                
            }else {
                container.innerHTML = "<h1>Error - Failed URL!</h1>";
                console.log(response);
            }
        }catch(error){
            container.innerHTML = "<h1>Connection error</h1>";
            console.log(error);
        }
    }

;