console.log("js script is started succesfully");

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
  }