const db = require("../database/database");
const fakeCarts = require("../data.json").message.carts;

module.exports = {
    insertFakeProducts: async (done) => {
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
  