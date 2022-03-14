const db = require("../database/database");
const fakeUsers = require("../data.json").message.users;

module.exports = {
   getCartForUser: async (user, done) => {
      try {
         // các collection cần làm việc
         // lấy cart ứng với user từ userId
         const cartsSnapshot = await db.collection("carts").get();
         const carts = [];
         cartsSnapshot.forEach((cart) => {
            carts.push(cart.data());
         });
         const userCart = carts.filter((cart) => cart.user === user)[0];
         // Từ cart -> cartId -> collection cartProducts -> lấy
         // những thằng nào mà có trường cart = cartId
         const cartProductsSnapshot = await db.collection("cartProducts").get();
         const cartProducts = [];
         cartProductsSnapshot.forEach((cartProduct) => {
            cartProducts.push(cartProduct.data());
         });
         const userCartProducts = cartProducts.filter((cartProduct) => {
            return cartProduct.cart === userCart.id;
         });
         // với mỗi cartProduct.product, quay về colleciton products
         // lấy ra product tương ứng
         const productsSnapshot = await db.collection("products").get();
         const products = [];
         productsSnapshot.forEach((product) => {
            products.push(product.data());
         });
         const userProducts = [];
         userCartProducts.forEach((product) => {
            const correspondingProduct = products.filter((pro) => {
               return pro.id === product.product;
            })[0];
            userProducts.push({
               ...product,
               product: correspondingProduct,
            });
         });
         // nếu trả về cho user các sản phẩm nguồn thì user k thể biết trong giỏ hàng của mình có bao nhiêu mỗi loại
         // phải trả về cartProduct với trường product k phải product id nữa mà là 1 object của collection product vối id đó

         done(userProducts);
      } catch (error) {
         done({
            error: true,
            errorMsg: error.toString(),
         });
      }
   },
};
