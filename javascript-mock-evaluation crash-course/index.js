// catching all the important id which will be updated 
let cont = document.getElementById("cont")

let btn = document.getElementById("searchBtn")

let productSearch = document.getElementById("productSearch")

let category = document.getElementById("category")

let price = document.getElementById("price")

//fetching data from the fakestore api and displaying on the user-side

async function fetchData() {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    showData(data)
}
fetchData()

// In this section the product is showing by the category
category.addEventListener("change", async () => {
    let categoryValue = category.value
    try {
        let res = await fetch(`https://fakestoreapi.com/products/category/${categoryValue}`)
        let data = await res.json()
        showData(data)
    } catch (error) {
        console.error('Error fetching category data:', error);
    }
})

//sorting the product with the price 
price.addEventListener("change", async () => {
    let priceValue = price.value
    try {
        let res = await fetch(`https://fakestoreapi.com/products?sort=${priceValue}`)
        let data = await res.json()
        showData(data)
    } catch (error) {
        console.error('Error fetching category data:', error);
    }
})

// this is dynamic showdata function which help to show the data where ever it is called
function showData(arr) {
    cont.innerHTML = ""
    arr.forEach((ele) => {
        let div = document.createElement("div")
        div.className = "card"

        let img = document.createElement("img")
        img.src = ele.image
        img.className = "img"

        let title = document.createElement("h3")
        title.innerHTML = ele.title

        let price = document.createElement("p")
        price.innerHTML = `Price $ ${ele.price}`

        div.append(img, title, price)
        cont.append(div)
    })
}

// search functionality implemented
async function searchProduct(text) {
    let res = await fetch("https://fakestoreapi.com/products")
    let data = await res.json()
    let filteredData = data.filter((ele) => {
        return ele.title.toLowerCase().includes(text.toLowerCase());
    });
    showData(filteredData)
}

btn.addEventListener("click", () => {
    let value = productSearch.value.trim()
    searchProduct(value)
})