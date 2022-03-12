const db = require("../database/database")

module.exports = {
    addToCart: async (userId, productId, done) => {
        try {
            // tìm cái cart thuộc về user hiện tại
        const cartRef = await db.collection('carts').where('user', '==', userId).get();
        const userCart = {};
        cartRef.forEach(cart => {
            userCart = cart.data();
        })
        // Nếu tìm thấy cart
        if (userCart) {
            // tìm danh sách các product trong cartt của user
            const cartProductsRef = await db.collection('cartProducts').where('cart', '==', userCart.id).get();
            const cartProducts = [];
            cartProductsRef.forEach(cp => {
                cartProducts.push(cp.data());
            })
            // **Làm phần này** // check xem cart đó có product có id == productId
            const selectedProduct = {id};

            const productRef = db.collection('cartProduct').where('id', '==', selectedProduct.id)
            // nếu có amount += 1
            const batch = db.batch();
            batch.update(productRef, {
                amont: selectedProduct.amount+1
            })
            const res = await batch.commit();
            // chưa có => insert một bản ghi mới với id sinh random (faker.datatype.uuid), amount = 1, cart = cart.id (current user's cart)
            const cardProRef = await db.collection('cartProducts').get()
            // **Làm phần này**

            batch.create(cardProRef, {
                amount: 1,
                cart: userCart.id,
                product: productId,
                id: faker.datatype.uuid()
            })
            const res = await batch.commit();
            done(res)
        }
        // kl tìm thấy thì trả về lỗi
        done({
            error: true,
            errorMEssage: 'k tim thay gio hang'
        })
        } catch (error) {
            console.error(error);
        }

    }
}