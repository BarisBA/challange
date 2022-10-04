class Basket {
    basketProducts = [];
    basketPrices = [];
    amount = [];
    sum;
    finalSum;

    constructor(products, prices) {
        this.indexOf(products, prices);
    }

    indexOf(products, prices) {
        let index = this.basketProducts.indexOf(products);
        if (index == -1) {
            this.basketProducts.push(products);
            this.basketPrices.push(prices)
            this.amount.push(1);
        } else {
            this.amount[index]++;
        }
        this.renderBasket();
        //console.log(products);
    }

    renderBasket() {
        for (let j = 0; j < this.basketProducts.length; j++) {
            document.getElementById('basket').innerHTML += this.templateBasket(j);
        }
        this.resultBasket();
    }

    templateBasket(j) {
        return `
            <div class="">
            ${this.amount[j]}x ${this.basketProducts[j]} ${this.basketPrices[j]} €
            <img onclick="${this.increase(j)}" src="./img/plus.png">
            </div>
        `;
    }

    increase(j) {
        this.amount[j]++;
        //this.renderBasket();
        // console.log('yes');
    }

    resultBasket() {
        this.sum = 0;
        for (let i = 0; i < this.basketPrices.length; i++) {
            this.sum += this.basketPrices[i] * this.amount[i];
        }
        this.finalSum = this.sum + 1.00;
        document.getElementById('basketResult').innerHTML = this.templateBasketResult();
    }

    templateBasketResult() {
        return `
            <div>
                <span>Zwischensumme: ${this.sum.toFixed(2).replace('.', ',')} €</span>
            </div>
        `;
    }
}