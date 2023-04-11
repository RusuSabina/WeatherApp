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
const albaIulia = document.querySelector(".dropdown-item.alba-iulia")
const pitesti = document.querySelector(".dropdown-item.pitesti")
const bacau = document.querySelector(".dropdown-item.bacau")
const bistrita = document.querySelector(".dropdown-item.bistrita")
const botosani = document.querySelector(".dropdown-item.botosani")
const braila = document.querySelector(".dropdown-item.braila")
const buzau = document.querySelector(".dropdown-item.buzau")
const resita = document.querySelector(".dropdown-item.resita")
const calarasi = document.querySelector(".dropdown-item.calarasi")
const sfantuGheorghe = document.querySelector(".dropdown-item.sfantuGheorghe")
const targoviste = document.querySelector(".dropdown-item.targoviste")
const craiova = document.querySelector(".dropdown-item.craiova")
const galati = document.querySelector(".dropdown-item.galati")
const giurgiu = document.querySelector(".dropdown-item.giurgiu")
const targuJiu = document.querySelector(".dropdown-item.targuJiu")
const deva = document.querySelector(".dropdown-item.deva")
const slobozia = document.querySelector(".dropdown-item.slobozia")
const baiaMare = document.querySelector(".dropdown-item.baiaMare")
const drobetaTurnuSeverin = document.querySelector(".dropdown-item.drobetaTurnuSeverin")
const targuMures = document.querySelector(".dropdown-item.targuMures")
const slatina = document.querySelector(".dropdown-item.slatina")
const ploiesti = document.querySelector(".dropdown-item.ploiesti")
const satuMare = document.querySelector(".dropdown-item.satuMare")
const zalau = document.querySelector(".dropdown-item.zalau")
const suceava = document.querySelector(".dropdown-item.suceava")
const alexandria = document.querySelector(".dropdown-item.alexandria")
const tulcea = document.querySelector(".dropdown-item.tulcea")
const vaslui = document.querySelector(".dropdown-item.vaslui")
const ramnicuValcea = document.querySelector(".dropdown-item.ramnicuValcea")
const focsani = document.querySelector(".dropdown-item.focsani")

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
albaIulia.addEventListener("click", function (){
    updateWeather("Alba Iulia");
})
pitesti.addEventListener("click", function (){
    updateWeather("Pitesti");
})
bacau.addEventListener("click", function (){
    updateWeather("Bacau");
})
bistrita.addEventListener("click", function (){
    updateWeather("Bistrita");
})
botosani.addEventListener("click", function (){
    updateWeather("Botosani");
})
braila.addEventListener("click", function (){
    updateWeather("Braila");
})
buzau.addEventListener("click", function (){
    updateWeather("Buzau");
})
resita.addEventListener("click", function (){
    updateWeather("Resita");
})
calarasi.addEventListener("click", function (){
    updateWeather("Calarasi");
})
sfantuGheorghe.addEventListener("click", function (){
    updateWeather("Sfantu Gheorghe");
})
targoviste.addEventListener("click", function (){
    updateWeather("Targoviste");
})
craiova.addEventListener("click", function (){
    updateWeather("Craiova");
})
galati.addEventListener("click", function (){
    updateWeather("Galati");
})
giurgiu.addEventListener("click", function (){
    updateWeather("Giurgiu");
})
targuJiu.addEventListener("click", function (){
    updateWeather("Targu Jiu");
})
deva.addEventListener("click", function (){
    updateWeather("Deva");
})
slobozia.addEventListener("click", function (){
    updateWeather("Slobozia");
})
baiaMare.addEventListener("click", function (){
    updateWeather("Baia Mare");
})
drobetaTurnuSeverin.addEventListener("click", function (){
    updateWeather("Drobeta-Turnu Severin");
})
targuMures.addEventListener("click", function (){
    updateWeather("Targu Mures");
})
slatina.addEventListener("click", function (){
    updateWeather("Slatina");
})
ploiesti.addEventListener("click", function (){
    updateWeather("Ploiesti");
})
satuMare.addEventListener("click", function (){
    updateWeather("Satu Mare");
})
zalau.addEventListener("click", function (){
    updateWeather("Zalau");
})
suceava.addEventListener("click", function (){
    updateWeather("Suceava");
})
alexandria.addEventListener("click", function (){
    updateWeather("Alexandria");
})
tulcea.addEventListener("click", function (){
    updateWeather("Tulcea");
})
vaslui.addEventListener("click", function (){
    updateWeather("Vaslui");
})
ramnicuValcea.addEventListener("click", function (){
    updateWeather("Ramnicu Valcea");
})
focsani.addEventListener("click", function (){
    updateWeather("Focsani");
})

