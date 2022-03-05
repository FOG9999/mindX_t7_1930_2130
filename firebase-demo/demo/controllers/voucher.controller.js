const fakeVouchers = require("../data.json").message.vouchers;
const db = require("../database/database");

module.exports = {
  insertFakeVouchers: async (done) => {
    try {
      let batch = db.batch();
      fakeVouchers.forEach((vou) => {
        const voucherRef = db.collection("vouchers").doc();
        batch.create(voucherRef, vou);
      });
      const res = await batch.commit();
      done(res);
    } catch (error) {
      done(error);
    }
  },
};
