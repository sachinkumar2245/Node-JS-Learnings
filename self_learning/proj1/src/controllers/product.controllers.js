import path from 'path'
import ProductModel from '../model/product.models.js'


export default class ProductController {
    getProducts(req, res){
        // console.log(path.resolve())
        
        //fetching the model database

        let products = ProductModel.get() //it will return all the products as an arrya
        // console.log(products) 

       return res.render("products", {products: products})
    }

    // getAddProduct(req, res, next){
    //     res.render('new-product', {errorMessage: null})
    // }

    getAddForm(req, res) {
        return res.render("new-product", {errorMessage: null})
    }

    addNewProduct(req, res){
       
      
        //acess data from form
        console.log(req.body)
        ProductModel.add(req.body)
        res.redirect('/');
        // let products = ProductModel.get()
        // res.render('products', {products : products})
    }
}