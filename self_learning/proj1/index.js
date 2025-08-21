import express from 'express';
import ProductController from './src/controllers/product.controllers.js';
import ejsLayouts from 'express-ejs-layouts';
import path from 'path';
import validateRequest from './src/middlewares/validation.middleware.js';

const app = express();
const PORT = 8080;

// Setup
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));  // ✅ folder only
app.use(ejsLayouts);
app.set("layout", "layout");  // Use layout.ejs as the main layout

// servers static files
app.use(express.static('src/views'));



// Create an instance of product controller
const productController = new ProductController();


//middlewares for parsing request bodies (otherwise the server wont understand the data coming from the frontend)

app.use(express.urlencoded({ extended: true }));


// Methods and routing
app.get('/', productController.getProducts);
app.get('/new', productController.getAddForm);
app.post('/', validateRequest, productController.addNewProduct);



app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
