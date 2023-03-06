const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


let currentCity = localStorage.getItem("city");
console.log("Current City", currentCity);

if (!currentCity) {
    localStorage.setItem("city", "Iasi");
    currentCity = "Iasi";
}

updateCurrentCity(currentCity);
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);