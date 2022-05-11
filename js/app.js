const cityForm = document.querySelector('form');

const card = document.querySelector('.card');
const details = document.querySelector('.details');
const iconButton = document.querySelector('.iconButton');

const time = document.querySelector('img.time');
const icon = document.querySelector('.icon');


//updating UI
const updateUI = (data) => {

    const cityDetails = data.cityDetails;
    const weather = data.weather;

     details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}, ${cityDetails..Country.EnglishName}</h5>
        <div class="my-4">${weather.WeatherText}</div>
        <div class="display-5 my-4">
            <span><strong>${weather.Temperature.Metric.Value}</strong></span>
            <span><strong>&deg;C</strong></span>
        </div>
     `;

     //remove the d-none class 
     if(card.classList.contains('d-none')){
         card.classList.remove('d-none');
     }

     //day or night img update
     let timeSrc = null;
     if(weather.IsDayTime){
         timeSrc = "img/day.jpg";
     }
     else{
         timeSrc = "img/night.jpg"
     }
     time.setAttribute('src' , timeSrc);

     //icons update
     icon.innerHTML = `<img class = "weatherIcon" src="icons/${weather.WeatherIcon}.svg" alt="">`


};

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return{
        //  cityDetails: cityDetails,
        //  weather: weather

        //object short hand notation for above two line of code
        cityDetails,
        weather
    };

}

//submit event 
cityForm.addEventListener("submit", (e) => {
    //prevent default action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    // console.log(city);
    cityForm.reset();

    //update city ui with new city
    updateCity(city).then((data) => {
        updateUI(data);
    }).catch((err) => {
        console.log("err");
    })

})

// iconButton event listner 
iconButton.addEventListener("click", () => {

    //get city value
    const city = cityForm.city.value.trim();
    // console.log(city);
    cityForm.reset();

    //update city ui with new city
    updateCity(city).then((data) => {
        updateUI(data);
    }).catch((err) => {
        console.log("err");
    })

})
