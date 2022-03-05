const fakeProducts = require("../data.json").message.products;
const db = require("../database/database");

module.exports = {
  insertFakeProducts: async (done) => {
    try {
      let batch = db.batch();
      fakeProducts.forEach((pro) => {
        const productRef = db.collection("products").doc();
        batch.create(productRef, pro);
      });
      const res = await batch.commit();
      done(res);
    } catch (error) {
      done(error);
    }
  },
};
