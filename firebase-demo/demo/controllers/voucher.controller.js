const db = require('../database/database');

module.export = {
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
  },
};
