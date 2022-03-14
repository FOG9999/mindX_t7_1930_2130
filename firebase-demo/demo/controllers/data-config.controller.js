const db = require("../database/database");

module.exports = {
   addFieldToProducts: async (done) => {
      try {
         const productRef = db.collection("products");
         const batch = db.batch();
         (await productRef.listDocuments()).forEach((proRef) => {
            batch.update(proRef, {
               listSpecs: JSON.stringify([
                  ["512GB", "2.4GHz Quad Core", "8GB RAM | 512Gb SSD"],
                  ["512GB", "2.4GHz Quad Core", "8GB RAM | 512Gb SSD"],
                  ["512GB", "2.4GHz Quad Core", "8GB RAM | 512Gb SSD"],
                  ["512GB", "2.4GHz Quad Core", "8GB RAM | 512Gb SSD"],
               ]),
               //    id: 1,
            });
         });
         const res = await batch.commit();
         done(res);
      } catch (error) {
         done(error);
      }
   },
};
