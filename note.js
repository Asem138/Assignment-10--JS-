var productNameInput = document.getElementById('productName')
var productCategoryInput = document.getElementById('productCategory')
var productPriceInput = document.getElementById('productPrice')
var productDescriptionInput = document.getElementById('productDescription')
var productImageInput = document.getElementById('productImage')

var productsContainer = []

if (localStorage.getItem('allProducts')) {
    productsContainer = JSON.parse(localStorage.getItem('allProducts'))
    displayProduct()
}

function addProduct() {

    var product = {
        Name: productNameInput.value,
        Category: productCategoryInput.value,
        Price: productPriceInput.value,
        Description: productDescriptionInput.value,
        Image: "Style/3.jpg",
    }
    productsContainer.push(product)
    displayProduct()
    clearInputs()

    localStorage.setItem('allProducts', JSON.stringify(productsContainer))

}

function displayProduct() {
    var cartona = ""

    for (let i = 0; i < productsContainer.length; i++) {

        cartona +=
            `
                    <div class="col-md-4 shadow-lg gap-3">
                <div class="product-image p-3">
                    <img src= "${productsContainer[i].Image}" class="w-100">
                </div>
                <div class="content text-center">
                    <h6 class="h3 text-capitalize">${productsContainer[i].Name}</h6>
                    <h5 class="text-capitalize">"${productsContainer[i].Category}"</h5>
                    <span>${productsContainer[i].Description}</span>
                    <p class="text-capitalize">${productsContainer[i].Price} EGP</p>
                    <button onclick="updateItem(${i})" class="btn btn-warning w-100 m-1">Update</button>
                    <button onclick="deleteItem(${i})" class="btn btn-danger w-100 m-1">Delete</button>

                </div>
            </div>

        `

    }

    document.getElementById('demo').innerHTML = cartona
}

function clearInputs() {
    productNameInput.value = "";
    productCategoryInput.value = "";
    productPriceInput.value = "";
    productDescriptionInput.value = "";
    productImageInput.value = "";
}

function deleteItem(i) {
    productsContainer.splice(i, 1)
    localStorage.setItem('allProducts', JSON.stringify(productsContainer))
    displayProduct()
}

var globalIndex;

function updateItem(i) {

    globalIndex = i
    document.getElementById('updateBtn').style.display = 'block'
    document.getElementById('addBtn').style.display = 'none'

    productNameInput.value = productsContainer[i].Name
    productCategoryInput.value = productsContainer[i].Category
    productPriceInput.value = productsContainer[i].Price
    productDescriptionInput.value = productsContainer[i].Description
}

function updateclick() {

    productsContainer[globalIndex].Name = productNameInput.value
    productsContainer[globalIndex].Category = productCategoryInput.value
    productsContainer[globalIndex].Price = productPriceInput.value
    productsContainer[globalIndex].Description = productDescriptionInput.value

    displayProduct()

    localStorage.setItem('allProducts', JSON.stringify(productsContainer))

    document.getElementById('updateBtn').style.display = 'none'
    document.getElementById('addBtn').style.display = 'block'

    clearInputs()
}

function search(inputValue) {

    // console.log(inputValue);

    var cartona = ''

    for (let i = 0; i < productsContainer.length; i++) {
        if (productsContainer[i].Name == inputValue) {
            cartona +=
                `
                    <div class="col-md-4 shadow-lg gap-3">
                <div class="product-image p-3">
                    <img src= "${productsContainer[i].Image}" class="w-100">
                </div>
                <div class="content text-center">
                    <h6 class="h3 text-capitalize">${productsContainer[i].Name}</h6>
                    <h5 class="text-capitalize">"${productsContainer[i].Category}"</h5>
                    <span>${productsContainer[i].Description}</span>
                    <p class="text-capitalize">${productsContainer[i].Price} EGP</p>
                    <button onclick="updateItem(${i})" class="btn btn-warning w-100 m-1">Update</button>
                    <button onclick="deleteItem(${i})" class="btn btn-danger w-100 m-1">Delete</button>

                </div>
            </div>

        `
        }

    }

    document.getElementById('demo').innerHTML = cartona;

    // console.log(document.getElementById('search').value); ==> other way to search.

}