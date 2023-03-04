//fetching elements
const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");
const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchform]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");

//initials variables
const API_KEY = "a2c7be6a546f5dd34379dc42dddda488";
let oldTab = userTab;
oldTab.classList.add("current-tab"); 
 


//this function switches the tab
function switchTab(newTab){

    //agar clicked tab current tab nahi hai toh karo
    if(newTab != oldTab ){
       // bhai phle class hta do jisme prop hai current tab vali
        oldTab.classList.remove("current-tab");
        //current tab ko clicked tab k equal krdo
        oldTab = newTab;
        //aur ab jo prop htai thi vo vapis dedo
        oldTab.classList.add("current-tab");
    }

    //agar search form k andar active class nahi hai toh active class eske andar dalo
    if(!searchForm.classList.contains("active")){
        //userinfocontainer m se hta do active class
        userInfoContainer.classList.remove("active");
        //grantAcessContainer m se bhi htao active class
        grantAccessContainer.classList.remove("active");
        //searchform m add kardo active class
        searchForm.classList.add("active");
    }

    //mie phle search vale tab par tha ab your weather vala visible karna hai
    else{
        //search form sy active class hta do 
        searchForm.classList.remove("active");
        //user weather info sy bhi htado bhai
        userInfoContainer.classList.remove("active");
        //ab mai your weather tab me agya hu , toh weather bhi display karna pdega , toh check karo local storage for coordinates kya hamare pass hai ya nai unke hisab se weather show kardena bhai
        getfromSessionStorage(); 
    }
}

//event listener lga rhe hai user tab par taki click karne par switch tab vala function call ho sake
userTab.addEventListener("click",()=>{
    //on click pass the usertab tab input
    switchTab(userTab);
});

//event listener lga rhe hai search tab par taki click karne par switch tab vala function call ho sake
searchTab.addEventListener("click", ()=>{
    //on click pass the searchtab input
    switchTab(searchTab);
});


//y check karta hai ki coordinates hai hmare pass ya nahi
function getfromSessionStorage(){   //sessionStorage hume allow karta hai data store karne ko 
    const localCoordinates = sessionStorage.getItem("user-coordinates"); //sessionStorage.getItems check karta hai kya user-coordinates naam ki koi chiz hai sessionStorage m agar hai toh localCoordinates m vo ajaegi
    
    //agar local coordinates nai mile toh humne location ka access nahi dia 
    if(!localCoordinates){

        //toh grant access vali ko visible krwao active class add karke
        grantAccessContainer.classList.add("active");

    }

    //agar local coordinates pade hue hai
    else{
        //jo data coordinates, web serever sy mile hai vo json string form m hoty hai unko json object bnane k lie json parse kia 
        const coordinates = JSON.parse(localCoordinates);
        //aur fetchUserWeatherInfo function ko call kardia 
        fetchUserWeatherInfo (coordinates);
    }
}


//API call kar rahe hai weathe ki information k liye latitude aur longitude ki value use karke
async function fetchUserWeatherInfo (coordiantes){
    //coordinates vale variable m se lati aur longi nikalo 
    const {latitude , longitude} = coordiantes;
    //hmare pass coordinates hai toh grant location access vale ko hta do 
    grantAccessContainer.classList.remove("active");
    //loader vale ko dikha do
    loadingScreen.classList.add("acitve");

    //api ko call kar rhe hai
    try{
        //jo api call karke result aya hai usko response m dal dia
        const response = await fetch (`https:api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        //ab response ko json format m convert kardo
        const data = await response.json();
        //ab hmare pass data agya hai toh loading screen ko htao bhai data bhi dkhna hai
        loadingScreen.classList.remove("active");
        //ab weather ki info dkhne k lie user info container ko visible toh krwao
        userInfoContainer.classList.add("active");
        //jo weather info visible krwaya hai uske andar values bhi toh dalni hai toh renderWeatherInfo ko call karde bhai
        renderWeatherInfo(data);

    }
    catch(err){
        loadingScreen.classList.remove("active");
        console.log("error hai bhai", err);
    }

}

//jo bhi data mila hai API se , vo weather info k andar dalna hai
function renderWeatherInfo (data){
    //hum sbse phle elements ko fetch karnegy
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-countryIcon]");
    const desc = doucment.querySelector("[data-weatherDesc]");
    const weatherIcon= doucment.querySelector("[data-weatherIcon]");
    const temp= doucment.querySelector("[data-temp]");
    const windSpeed= doucment.querySelector("[data-windspeed]");
    const humidity= doucment.querySelector("[data-humidity]");
    const clouds= doucment.querySelector("[data-clouds]");

    //fetch values from weatherinfo object and put in ui elements
    //kisi json object k andar agar hum kisi propertie aur parameter ko access krna chahty hai toh hum optional chaining operator (?) se karskty hai
    //aur agar vo property aur parameter exist nahi karta toh optional chaining operator (?) undefined value dedega  
    cityName.innerText = data?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;
    temp.innerText = data?.main?.temp;
    windSpeed.innertext = data?.wind?.speed;
    humidity.innertext = data?.main?.humidity;
    clouds.innerText = data?.clouds?.all;
}


//location miljaegi es sy
function getLocation (){
    if(navigator.geolocation) { //it give access to location of devices
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("No geoLocation Support");
    }
}
 
//it give latitude and longitude of function
function showPosition(){

    const userCoordinates ={
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    }

    sessionStorage.setItem("user-coordinates",JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}


 //grant access button
 const grantAccessButton = doucment.querySelector("[data-grantAccess]");
 grantAccessButton.addEventListener("click",getLocation());
  
const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    let cityName = searchInput.ariaValueMax;

    
})
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 /*console.log("js script is started succesfully");

const API_KEY = "a2c7be6a546f5dd34379dc42dddda488";


// it display function on body by creating new para element and putting neccesary nodes inside it
function renderWeatherInfo(data){
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;
    document.body.appendChild(newPara);
}


//this function is  used to fetch details from weather api in response variable and convert data into json format , print converted data and call render function 
async function fetchWeatherDetails(){
  
try{

    let city = "Goa";

    // fetching data from weather api , using await keyword because more steps are dependent on it 
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); //calling API
    //converting fetched data into json format
        const data = await response.json();
    //printing converted data
        console.log( "weather data: " , data ); 
    
    //calling render function to get info on body
        renderWeatherInfo(data);
        console.log("renderWeatherInfo called succesfully")
}

catch(err){
    console.log("Errror Found" , err);
}

}



//this function is used to get weather by using custom latitude and longitude
async function getWeatherDetailsByLATandLONG(){

    try{

        let latitude = 18.666;
        let longitude =  16.888;
        // fetching data from weather api , using await keyword because more steps are dependent on it 
        const response = await fetch(`https:api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
       //converting fetched data into json format
        const data = await response.json();
        //printing converted data
        console.log("weather data: ",data);

        renderWeatherInfo(data);
        console.log("renderWeatherInfo called succesfully for custom info");
    }
    catch(err){
        console.log("Errror Found" , err);
    }
}
 


function switchTab(newTab){
    
    if(newTab !== oldTab){
        //remove all css properties from current tab
        oldTab.classList.remove("current-tab");
        //put current tab equal to clicked tab
        oldTab = newTab ;
        //add all properties of currentab
        oldTab.classList.add("current-tab");
    }
}

  function showLATandLONG(){
    let latitude = position.coords.latitude; //to get coordinates of latitude
    let longitude = position.coords.longitude; //to get coordinates of longitudes

  }

  function getLocation (){
    if(navigator.geolocation) { //it give access to location of devices
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("No geoLocation Support");
    }
  }*/