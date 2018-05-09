function NasaService () {
var baseUrl = "https://api.nasa.gov/planetary/apod?api_key=gdWSXaU82G7FuI1Cn9KDE88W2uTsP3SuGCCUNHAb"

this.getSpaceData = function getSpaceData(spaceData, cb) {
    $.get(baseUrl + spaceData)
    .then(data =>{
        console.log(data)
        var res = data
        cb(res)
    })
}





}