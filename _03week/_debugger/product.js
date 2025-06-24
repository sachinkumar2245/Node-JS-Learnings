function calculateTotal(products){
    let total = 0 ;
    products.forEach((product) => {

        total += product.price * product.quantity;
        
    });

    return total;
}

const productsList = [
    {name: 'shoes', price: 30, quantity: 1},
    {name: 'shoes', price: 30, quantity: 1},
    {name: 'shoes', price: 30, quantity: 1}

]

// expected result = 90

const grandTotal = calculateTotal(productsList);

// print value

function printTotalValue(value){
    console.log(value)
}

//
printTotalValue(grandTotal)