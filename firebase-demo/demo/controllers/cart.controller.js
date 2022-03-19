const db = require("../database/database")

module.exports = {
    onAddProductToCart: async (cartProductId, done) => {
        // tìm ra cartProduct có id = cartProductId 
        const cartProductRef = await db.collection('cartProducts').where('id', '==', cartProductId).get();
        // update gia tri amount = amount + 1
        const batch = db.batch();
        batch.update(cartProductRef, { amount: cartProductRef.amount + 1 });
        // neu k co loi thì trả về object {error: false, msg: 'success'}
        const res = await batch.commit();
        done(res)
        // có lỗi trả về {error: true, msg: error.toString()}
    }
}