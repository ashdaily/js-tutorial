var cities = [
    {name: "niigata", population: 1000, country: "JP"}, // 0
    {name: "tokyo", population: 10000, country: "JP"}, // 1
    {name: "nagoya", population: 1004500, country: "JP"},// 2
    {name: "chandigarh", population: 4500, country: "IN"}, // 3
    {name: "london", population: 45000, country: "UK"},// 4
    {name: "nyc", population: 45000, country: "USA"} // 5
]


for(cityIndex = 0; cityIndex < cities.length; cityIndex++){
    if(cities[cityIndex].population > 10000){
        printCityInfo(cityIndex)
    }
}

function printCityInfo(cityIndex){
    console.log(cities[cityIndex].name, cities[cityIndex].country, cities[cityIndex].population)
}