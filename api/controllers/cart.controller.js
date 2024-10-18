const Cart = require("../models/cart.model");
const Product = require("../models/product.model");
const productsHelper = require("../../helpers/products")
// [GET] /cart/
module.exports.index = async(req, res) => {
    const cartId = '6711b771e8862ed8c1c83ac7';
    
    const cart = await Cart.findOne({
        _id: cartId
    });
    // console.log(`Cart: ${cart}`);
    
    res.json(cart);
}


