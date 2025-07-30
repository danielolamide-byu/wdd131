


const getYear = new Date();
const currentYear = getYear.getFullYear();

document.getElementById('currentyear').textContent = currentYear;
document.getElementById('lastModified').textContent = document.lastModified;



function windchill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
return (13.12 + 0.6215 * temp - 11.37 * (windSpeed ** 0.16)  + 0.3965 * temp * (windSpeed ** 0.16));
}
else {
    console.log(`NA`)
}
}

let windChill = windchill(10, 7);

document.getElementById(`chill`).textContent = windChill.toFixed(2);

