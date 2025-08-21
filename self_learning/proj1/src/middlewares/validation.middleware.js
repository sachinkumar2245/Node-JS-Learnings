const validateRequest = (req, res, next) => {]
    //now we gon use express validator to validate our data and I'm gonna comment out the previous code
    /*
    const { productName, productPrice, productImage } = req.body;
    let errors = [];

    if (!productName || productName.trim() === '') {
        errors.push("Product Name is required");
    }

    if (!productPrice || parseFloat(productPrice) < 1) {
        errors.push("Product Price must be a positive value");
    }

    try {
        const validURL = new URL(productImage);
        if (!validURL.protocol.startsWith('http')) {
            errors.push("Product Image must be a valid HTTP or HTTPS URL");
        }
    } catch (error) {
        errors.push("Invalid image URL");
    }
*/


    //express validator code





    if (errors.length > 0) {
        return res.render('new-product', { errorMessage: errors[0] });
    }

    next();
};

export default validateRequest;
