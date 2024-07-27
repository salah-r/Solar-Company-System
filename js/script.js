var productName = document.getElementById("productName");
var productPrice = document.getElementById("productPrice");
var productCat = document.getElementById("productCat");
var productDesc = document.getElementById("productDesc");
var mainBtn = document.getElementById("mainBtn");
var btn = "cerate";
var id;

var products;
if (localStorage.getItem("myProducts") == null) {
    products = [];
}
else {
    products = JSON.parse(localStorage.getItem("myProducts"));
    displayProducts();
};

function addProduct() {


    var Product = {
        name: productName.value,
        price: productPrice.value,
        categrie: productCat.value,
        description: productDesc.value
    };
    if (btn === "cerate") {
        products.push(Product);

    } else {
        products[id] = Product
        document.getElementById("mainBtn").innerHTML = "Add Product";
    }
    localStorage.setItem("myProducts", JSON.stringify(products));
    console.log(products);
    clearForm();
    displayProducts();
}
function clearForm() {
    productName.value = "";
    productPrice.value = "";
    productCat.value = "";
    productDesc.value = "";
}

function displayProducts() {
    var cartoona = ` `;
    for (var i = 0; i < products.length; i++) {

        cartoona += `  
        <tr>
        <td>`+ (i + 1) + `</td>
        <td>`+ products[i].name + `</td>
        <td>`+ products[i].price + `</td>
        <td>`+ products[i].categrie + `</td>
        <td>`+ products[i].description + `</td>
        <td><button onclick="updateProduct(`+ i + `)"  class="btn btn-warning">Update</button></td>
        <td><button  onclick="deleteProduct(`+ i + `)"  class="btn btn-danger">Delete</button></td>
        </tr> `;
    };
    document.getElementById("tableBody").innerHTML = cartoona;
}
function deleteProduct(productIndex) {

    products.splice(productIndex, 1);
    localStorage.setItem("myProducts", JSON.stringify(products));
    displayProducts()
}

function searchProduct(searchTerm) {

    var cartoona = ``;

    for (var i = 0; i < products.length; i++) {


        if (products[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true || products[i].categrie.toLowerCase().includes(searchTerm.toLowerCase()) == true) {


            cartoona += `<tr>
            <td>`+ (i + 1) + `</td>
            <td>`+ products[i].name + `</td>
            <td>`+ products[i].price + `</td>
            <td>`+ products[i].categrie + `</td>
            <td>`+ products[i].description + `</td>
            <td><button onclick="updateProduct(`+ i + `)"  class="btn btn-warning">Update</button></td>
            <td><button  onclick="deleteProduct(`+ i + `)"  class="btn btn-danger">Delete</button></td>
            </tr> `;
            document.getElementById("tableBody").innerHTML = cartoona;
        }

        else {
            console.log("m4 mowgod")
        }
    }

}

function updateProduct(productIndex) {

    productName.value = products[productIndex].name;
    productPrice.value = products[productIndex].price;
    productCat.value = products[productIndex].categrie;
    productDesc.value = products[productIndex].description;
    document.getElementById("mainBtn").innerHTML = "Update";
    btn = "update";
    id = productIndex;
}

















