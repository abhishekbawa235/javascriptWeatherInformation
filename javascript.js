const input = document.querySelector('input');
const btn = document.getElementById('btn');
const icon = document.querySelector('.icon');
const weather = document.querySelector('.weather');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');

const apiKey = '124b0556cbe60818535dc50ef3068d55';

btn.addEventListener("click",()=>{
    let city = input.value;
    getWeather(city);
    console.log("clicked",input.value)
})

function getWeather(city){
    console.log(city);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'124b0556cbe60818535dc50ef3068d55'}
`).then(response=>{
        if (!response.ok) {
            throw new Error('Invalid City');
        }
        return response.json();
    })
.then(data=>{
    console.log('resposne',data)
    const iconCode = data.weather[0].icon;
   
    icon.innerHTML = `<img src="http://openweathermap.org/img/w/${iconCode}.png" alt="No Icon"/>`
    const weatherCity = data.name;
    const weatherCountry = data.sys.country;
    weather.innerHTML = `${weatherCity},${weatherCountry}`;
    let weatherTemperature = data.main.temp;
    weatherTemperature = weatherTemperature - 273;
    const temp = weatherTemperature.toFixed(2);
    temperature.innerHTML = `${temp}℃`
    const weatherDescription = data.weather[0].description;
    description.innerHTML = weatherDescription;
})   .catch(err => {
    alert('Invalid City');
    console.error(err);
});
}