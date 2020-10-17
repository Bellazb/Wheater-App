//Interacting With the API

const key = 'PheSchexmTWlyn9JtNXS64Xg2LO4v6IC';

//get weather information
const getWeather = async (id) => {

    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;

    const response = await fetch(base + query);
    const data = await response.json();

   return data[0];

};

//get city information
const getCity = async (city) => {

    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

};

// getCity('Kuala Lumpur')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// getWeather("233776");

//Chain getCity and getWeather
// getCity('Kuala Lumpur').then(data => {
// return getWeather(data.Key);
// }).then(data => console.log(data))
// .catch(err => console.log(err));
