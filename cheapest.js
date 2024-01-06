const phones = [
    {name: 'iPhone', camera: '12mp', storage: '128gb', color: 'black', price: 80000},
    {name: 'Samsung', camera: '120mp', storage: '128gb', color: 'black', price: 60000},
    {name: 'Vivo', camera: '36mp', storage: '256gb', color: 'blue', price: 45000},
    {name: 'Oppo', camera: '20mp', storage: '128gb', color: 'green', price: 20000},
    {name: 'OnePlus', camera: '18mp', storage: '512gb', color: 'black', price: 40000},
    {name: 'Huawei', camera: '12mp', storage: '128gb', color: 'black', price: 24000},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log('I want to buy', mySelection);