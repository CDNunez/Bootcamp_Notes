class Bakery {
    constructor(name) {
        this.name = name;
        this.inventory = [];
        this.profit = 0;
    }

    addItem(batch) {
        this.inventory.push(batch);
    }

    sellItem(item, qty) {
        item.quantity -= qty;
        this.profit += Number((item.pricePer * qty).toFixed(2));
    }
}

class BakedGoods {
    static bakedInStore(item,qty,store,expense) {
        let price = (expense + (expense * .2)) * qty;
        const newItem = new BakedGoods(item,qty,store.name,price.toFixed(2));
        store.addItem(newItem);
        return newItem;
    }

    constructor(item,qty,store,price) {
        this.store = store;
        this.item = item;
        this.quantity = qty;
        this.pricePer = price;
    }

    // write a method that takes in a quantity as a parameter and update the baked goods quantity.
}

const proofInTheDough = new Bakery('Proof In The Dough');
const chocChipCookies = BakedGoods.bakedInStore(
    'chocolate chip cookies',12,proofInTheDough, .1
);
const cupCakes = BakedGoods.bakedInStore('cup cakes', 4,proofInTheDough,.8);

proofInTheDough.sellItem(chocChipCookies,4)
proofInTheDough.sellItem(cupCakes,1)
console.log(chocChipCookies);
console.log(proofInTheDough);

