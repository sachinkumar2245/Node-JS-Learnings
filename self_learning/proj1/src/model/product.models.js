

export default class ProductModel {

    constructor(_id, _name, _desc, _price, _imageUrl) {
        this._id = _id
        this._name = _name
        this._desc = _desc
        this._price = _price
        this._imageUrl = _imageUrl
    }

    static get() {
        return products;
    }

    static add(productObj) {
        let newProduct = new ProductModel(
            products.length + 1,
            productObj.productName,
            productObj.productDesc,
            productObj.productPrice,
            productObj.productImage

        )
        products.push(newProduct)

    }
}


const products = [
    new ProductModel(
        1,
        'Product 1',
        'Description of product 1',
        19.99,
        'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
        2,
        'Product 2',
        'Description of product 2',
        29.99,
        'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg'
    ),
    new ProductModel(
        3,
        'Product 3',
        'Description of product 3',
        39.99,
        'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg'
    )
];


