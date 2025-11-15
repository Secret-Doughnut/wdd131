let WindChill = document.querySelector(".chill");
const Temperature = -2;
const WindSpeed = 11;
let ChillAmount = 0;

ChillAmount = calculateWindChill(Temperature, WindSpeed);

if (Temperature <= 10 && WindSpeed > 4.8) {
    WindChill.textContent = `Wind Chill: ${ChillAmount.toFixed(2)} °C
    `;
}
else {
    WindChill.textContent = `Wind Chill: N/A`
}


function calculateWindChill(temp, speed) {
    answer = 13.12 + (0.6215 * temp) - (11.37 * (speed ** 0.16)) + (0.3965 * temp * (speed ** 0.16))
    
    return answer;
}