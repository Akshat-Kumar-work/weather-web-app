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
let currentTab = userTab;
currentTab.classList.add("current-tab"); 
 


//this function switches the tab
function switchTab(clickedTab){
    //agar clicked tab current tab nahi hai toh karo
    if(clickedTab != currentTab ){
       // bhai phle class hta do jisme prop hai current tab vali
        currentTab.classList.remove("current-tab");
        //current tab ko clicked tab k equal krdo
        currentTab = clickedTab;
        //aur ab jo prop htai thi vo vapis dedo
        currentTab.classList.add("current-tab");
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
 


function switchTab(clickedTab){
    
    if(clickedTab !== currentTab){
        //remove all css properties from current tab
        currentTab.classList.remove("current-tab");
        //put current tab equal to clicked tab
        currentTab = clickedTab ;
        //add all properties of currentab
        currentTab.classList.add("current-tab");
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