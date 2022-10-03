let products = ['Crossaint', 'Bread'];
let prices = ['1,49', '2,00']

function init() {
    showProducts();
}

function showProducts() {
    for (let i = 0; i < products.length; i++) {
        
        document.getElementById('products').innerHTML += templateShowProducts(i);
    }

    function templateShowProducts(i) {
        return `
            <div class="products">
                ${products[i]}  ${prices[i]} €
                <img onclick="addToBasket(${i})" src="./img/plus.png">
            </div>
        `;
    }
}

function addToBasket(i) {
    new Basket(products[i], prices[i]); 
}    
