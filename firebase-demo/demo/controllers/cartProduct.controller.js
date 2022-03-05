const db = require("../database/database");
const fakeCartProducts = require("../data.json").message.cartProducts;

module.exports = {
    insertFakeCartProducts: async (done) => {
      try {
        let batch = db.batch();
        fakeCartProducts.forEach((carpro) => {
          const cartProductRef = db.collection("cartProducts").doc();
          batch.create(cartProductRef, carpro);
        });
        const res = await batch.commit();
        done(res);
      } catch (error) {
        done(error);
      }
    },
  };
  