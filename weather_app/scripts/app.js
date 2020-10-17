//DOM Manipulation and Event Handling

const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');

//update UI of the weather, city in the DOM
const updateUI = (data) => {

    // const cityDetails = data.cityDetails;
    // const weather = data.weather;

    //destructure properties
    const { cityDetails, weather} = data;

    //update details template
    details.innerHTML =
    `<h5 class="my-3">${cityDetails.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`;

    //remove the d-none class if present
    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    //update the night/day & icon images
    const iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);

    let timeSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    // let timeSrc = null;
    // if(weather.IsDayTime){
    //     timeSrc = 'img/day.svg';
    //     // console.log(weather.IsDayTime);
    // } else {
    //     timeSrc = 'img/night.svg';
    //     // console.log(weather.IsDayTime);
    // }
    time.setAttribute('src', timeSrc);

};

const updateCity = async (city) => {

    // console.log(city);
    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return { cityDetails, weather};

}

cityForm.addEventListener('submit', e =>{
    //prevent default refresh action
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    //update the ui with new city
    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    //set local storage
    localStorage.setItem('city', city);

});

if(localStorage.getItem('city')){
    updateCity(localStorage.getItem('city'))
    .then(data => updateUI(data)
    .catch(err => console.log(err)));

}

//ternary operator
// const result = true ? 'value 1' : 'value 2';
// console.log(result);