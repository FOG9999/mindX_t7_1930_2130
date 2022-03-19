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
    };
  }
};
module.exports = {
  getVoucher: async (productId, done) => {
    try {
      const vouchersSnapshots = await db.collection('vouchers').get();
      const vouchers = [];
      vouchersSnapshots.forEach((voucher) => {
        const possibleVoucher = voucher.data();
        if (possibleVoucher.product == productId.id) {
          vouchers.push(possibleVoucher);
        }
      });
      done(vouchers);
    } catch (error) {
      done({
        error: true,
        errorMsg: error.toString(),
      });
    }
  }
}
