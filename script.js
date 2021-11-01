  fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}')
 .then(response =>{
    return response.json();
 }).then(data =>{
    console.log(data);
 }) 
const msg = document.querySelector(".top-banner .msg");
function cityinfo () {
    msg.textContent = "Please search for a valid city 😩";
}