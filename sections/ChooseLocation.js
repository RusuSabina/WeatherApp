const timisoara = document.querySelector(".dropdown-item.timisoara");
const bucuresti = document.querySelector(".dropdown-item.bucuresti");
const cluj = document.querySelector(".dropdown-item.cluj")
const oradea = document.querySelector(".dropdown-item.oradea");
const sibiu = document.querySelector(".dropdown-item.sibiu")
const arad = document.querySelector(".dropdown-item.arad")
const brasov = document.querySelector(".dropdown-item.brasov")
const iasi = document.querySelector(".dropdown-item.iasi")
const miercureaCiuc = document.querySelector(".dropdown-item.miercurea-ciuc")
const piatraNeamt = document.querySelector(".dropdown-item.piatra-neamt")
const constanta = document.querySelector(".dropdown-item.constanta")

function updateCurrentCity(city) {
    // selectam element-ul care contine orasul principal
    const currentyCityElement = document.querySelector(".current-city");
    currentyCityElement.innerHTML = city;
}

function updateWeather(city) {

    localStorage.setItem("city", city);
    updateCurrentCity(city);
    displayCurrentWeather(city);
    displayWeatherForecast(city);
}

// Adaugam evenimtente de "click" pentru fiecare element din dropdown
timisoara.addEventListener("click", function () {
    updateWeather("Timisoara");
})
bucuresti.addEventListener("click", function () {
    updateWeather("București");
})
cluj.addEventListener("click", function () {
    updateWeather("Cluj");
})
oradea.addEventListener("click", function () {
    updateWeather("Oradea");
})
sibiu.addEventListener("click", function () {
    updateWeather("Sibiu");
})
arad.addEventListener("click", function () {
    updateWeather("Arad")
})
brasov.addEventListener("click", function () {
    updateWeather("Brasov");
})
iasi.addEventListener("click", function () {
    updateWeather("Iasi");
})
miercureaCiuc.addEventListener("click", function () {
    updateWeather("Miercurea Ciuc");
})
piatraNeamt.addEventListener("click", function () {
    updateWeather("Piatra Neamt");
})
constanta.addEventListener("click", function () {
    updateWeather("Constanta");
})