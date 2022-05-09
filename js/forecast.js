const key = 'dTixGsBj9k3239IhownaOmEx8tysQge6'; 

// pune city key : 204848

//for weather information
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];
}

//for city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search' ;

    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data =await response.json();

    return data[0];
};

// // call for city info.
// getCity('pune').then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// }) 


// //call for weather info
// getWeather('204848');


// // both the call together
// getCity('pune').then((data) => {
//         return getWeather(data.Key);
//     }).then((data) => {
//         console.log(data);
//     }).catch((err) => {
//         console.log(err);
//     }) 