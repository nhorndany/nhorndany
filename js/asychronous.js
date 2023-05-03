function welcomeMessage(name){
    console.log(`welcome, ${name}`)
}
let firstName ="dany"
welcomeMessage(firstName)
// process sychronous

// fetch api: fetch()
let row = document.querySelector(".row")
let productAPI = 'https://api.escuelajs.co/api/v1/products'
function getAllProducts(){
    fetch(productAPI)
    .then(resp => resp.json())
    .then(response => response.map(res => row.innerHTML += `
    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
    <div class="card border-0 shadow-sm h-100"> 
        <img src=${res.images[0]} class="card-img-top alt="">
        <div class="card-body">
           <p class="card-text"> ${res.title}</p>
        </div>
    </div>
</div>
    `))
   
}
// getAllProducts()
let basePath ='https://image.tmdb.org/t/p/w440_and_h660_face/'
let moviesAPI ='https://api.themoviedb.org/3/movie/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1'
function getPopularMovies(){
    fetch(moviesAPI)
    .then(resp => resp.json())
    .then(response => response.results.map(res => row.innerHTML +=`
    <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
    <div class="card border-0 shadow-sm h-100"> 
        <img src=${basePath+res.poster_path} class="card-img-top alt="">
        <div class="card-body">
           <p class="card-text"> ${res.title}</p>
        </div>
    </div>
</div>
    `))
}

getPopularMovies()

// getPopularMovies()

const fetchUser = async () => {
    const resp = await fetch("")
    return resp.json()
}
fetchUser()
