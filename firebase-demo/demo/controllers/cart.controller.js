const db = require("../database/database");
const fakeCarts = require("../data.json").message.carts;

module.exports = {
    insertFakeCarts: async (done) => {
      try {
        let batch = db.batch();
        fakeCarts.forEach((car) => {
          const cartRef = db.collection("carts").doc();
          batch.create(cartRef, car);
        });
        const res = await batch.commit();
        done(res);
      } catch (error) {
        done(error);
      }
    },
  };
  
const db = require('../database/database');

module.exports = {
  getCartForUser: async (user, done) => {
    try {
      // các collection cần làm việc
      // lấy cart ứng với user từ userId
      const cartsSnapshot = await db.collection('carts').get();
      const carts = [];
      cartsSnapshot.forEach((cart) => {
        carts.push(cart.data());
      });
      const userCart = carts.filter((cart) => cart.user === user)[0];
      // Từ cart -> cartId -> collection cartProducts -> lấy
      // những thằng nào mà có trường cart = cartId
      const cartProductsSnapshot = await db.collection('cartProducts').get();
      const cartProducts = [];
      cartProductsSnapshot.forEach((cartProduct) => {
        cartProducts.push(cartProduct.data());
      });
      const userCartProducts = cartProducts.filter((cartProduct) => {
        return cartProduct.cart === userCart.id;
      });
      // với mỗi cartProduct.product, quay về colleciton products
      // lấy ra product tương ứng
      const productsSnapshot = await db.collection('products').get();
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
          ...product, // {amount: 1, cart: '...', product: 'ip-13', id: '...'}
          product: correspondingProduct, // stocks: 100,
        });
      });
      // nếu trả về cho user các sản phẩm nguồn thì user k thể biết trong giỏ hàng của mình có bao nhiêu mỗi loại
      // phải trả về cartProduct với trường product k phải product id nữa mà là 1 object của collection product vối id đó

      done({ userProducts, userCart });
    } catch (error) {
      done({
        error: true,
        errorMsg: error.toString(),
      });
    }
  },
  // addToCart: async (userId, productId, done) => {
  //     try {
  //         // tìm cái cart thuộc về user hiện tại
  //     const cartRef = await db.collection('carts').where('user', '==', userId).get();
  //     const userCart = {};
  //     cartRef.forEach(cart => {
  //         userCart = cart.data();
  //     })
  //     // Nếu tìm thấy cart
  //     if (userCart) {
  //         // tìm danh sách các product trong cartt của user
  //         const cartProductsRef = await db.collection('cartProducts').where('cart', '==', userCart.id).get();
  //         const cartProducts = [];
  //         cartProductsRef.forEach(cp => {
  //             cartProducts.push(cp.data());
  //         })
  //         // **Làm phần này** // check xem cart đó có product có id == productId
  //         const selectedProduct = {id};

  //         const productRef = db.collection('cartProduct').where('id', '==', selectedProduct.id)
  //         // nếu có amount += 1
  //         const batch = db.batch();
  //         batch.update(productRef, {
  //             amont: selectedProduct.amount+1
  //         })
  //         const res = await batch.commit();
  //         // chưa có => insert một bản ghi mới với id sinh random (faker.datatype.uuid), amount = 1, cart = cart.id (current user's cart)
  //         const cardProRef = await db.collection('cartProducts').get()
  //         // **Làm phần này**

  //         batch.create(cardProRef, {
  //             amount: 1,
  //             cart: userCart.id,
  //             product: productId,
  //             id: faker.datatype.uuid()
  //         })
  //         const res = await batch.commit();
  //         done(res)
  //     }
  //     // kl tìm thấy thì trả về lỗi
  //     done({
  //         error: true,
  //         errorMEssage: 'k tim thay gio hang'
  //     })
  //     } catch (error) {
  //         console.error(error);
  //     }

  // }
};
