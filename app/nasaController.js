function NasaController() {
//private 
var nasaService = new NasaService();

function drawSpaceData(day) {
var template=""
// for (let i = 0; i < arr.length; i++) {
//     const day = arr[i];
    template +=`
    <img src="${day.url}">
    <h1>Title: ${day.title}</h1>
    <h1>Date: ${day.date}</h1>
    <h1>Explanation: ${day.explanation}</h1>

    `
    document.getElementById("spaceInfo").innerHTML = template
}


nasaService.getSpaceData("&date=2018-01-02", drawSpaceData)
}/////////////////////////////






