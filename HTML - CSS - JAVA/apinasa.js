sendApiRequest()

async function sendApiRequest(){
    let API_KEY = "QDOrJqDQxWc1S4TbrKIwLy4K9ceEbcm3wuK7XRYa"
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}


function useApiData(data){
    document.querySelector("#imgapi1").src = data.url
    document.querySelector("#api1").innerHTML = data.title
}
