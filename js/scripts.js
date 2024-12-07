jsonDataWeather = JSON.parse(jsonDataWeather)

let table = document.createElement('table')
let input = document.getElementById("city-search")
let button = document.getElementById("city-search-button")
let tableContainer = document.getElementById('table-div')
let error = document.createElement('h2')
let errorContainer = document.getElementById('error-message-div')
errorContainer.classList.add('error-message')

function createHeaders() {
    let header = table.createTHead()
    let headerRow = header.insertRow()

    let th = document.createElement('th')
    let cityNameHeader = document.createTextNode("City")
    th.appendChild(cityNameHeader)
    headerRow.appendChild(th)
    

    let th2 = document.createElement('th')
    mainWeatherHeader = document.createTextNode("Weather")
    th2.appendChild(mainWeatherHeader)
    headerRow.appendChild(th2)

    let th3 = document.createElement('th')
    tempHeader = document.createTextNode("Temperature")
    th3.appendChild(tempHeader)
    headerRow.appendChild(th3)

    // let th4 = document.createElement('th')
    // tempUnitHeader = document.createTextNode("Degrees Unit")
    // th4.appendChild(tempUnitHeader)
    // headerRow.appendChild(th4)

    let th5 = document.createElement('th')
    feelsLikeHeader = document.createTextNode("Feels Like")
    th5.appendChild(feelsLikeHeader)
    headerRow.appendChild(th5)

    let th6 = document.createElement('th')
    rainChanceHeader = document.createTextNode("Rain Chance")
    th6.appendChild(rainChanceHeader)
    headerRow.appendChild(th6)
}

let cityQuery = ""
displayCities()

input.addEventListener("input", function(event) {
    cityQuery = event.target.value
})

button.addEventListener("click", displayCities)

function displayCities() {
    table.innerHTML = ""
    errorContainer.innerHTML = ""
    error.innerHTML = ""
    createHeaders()
    let noCities = true;
    for(let i = 0; i < jsonDataWeather.length; i++) {
        if(jsonDataWeather[i].CityName.toLowerCase().startsWith(cityQuery.toLowerCase()) == true) {
            noCities = false;
            
            // Highlights if an exact match
            if(jsonDataWeather[i].CityName.toLowerCase() == cityQuery.toLowerCase()) {
                table.classList.add("highlighted")
            } else {
                table.classList.remove("highlighted")
            }

            let row = table.insertRow()

            let cityNameCell = row.insertCell()
            let mainWeatherCell = row.insertCell()
            let tempCell = row.insertCell()
            // let tempUnitCell = row.insertCell()
            let feelsLikeCell = row.insertCell()
            let rainPossibilityCell = row.insertCell()

            let cityNameText = document.createTextNode(jsonDataWeather[i].CityName)
            let mainWeatherText = document.createTextNode(jsonDataWeather[i].MainWeather)
            let tempText = document.createTextNode(jsonDataWeather[i].Temp + "°" + jsonDataWeather[i].TempUnit.substring(0,1))
            // let tempUnitText = document.createTextNode(jsonDataWeather[i].TempUnit)
            let feelsLikeText = document.createTextNode(jsonDataWeather[i].FeelsLike + "°" + jsonDataWeather[i].TempUnit.substring(0, 1))
            let rainPossibilityText = document.createTextNode(jsonDataWeather[i].RainPossibilityPercentage + "%")

            cityNameCell.appendChild(cityNameText)
            mainWeatherCell.appendChild(mainWeatherText)
            tempCell.appendChild(tempText)
            // tempUnitCell.appendChild(tempUnitText)
            feelsLikeCell.appendChild(feelsLikeText)
            rainPossibilityCell.appendChild(rainPossibilityText)
        }
        
    }

    if(noCities) {
        table.innerHTML = ""
        let errorMessage = document.createTextNode("No results for '" + cityQuery +"'")
        error.appendChild(errorMessage)
        errorContainer.appendChild(error)
    }

    tableContainer.append(table)
}










