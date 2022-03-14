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
   /**
    *
    * @param {*} searchKey keyword tìm kiếm
    * @param {*} category chủng loại
    * @param {*} page trang số bao nhiêu
    */
   getListProducts: async (searchKey, category, page, done) => {
      try {
         let productSnapshot = await db.collection("products").get();
         if (category) {
            productSnapshot = await db.collection("products").where("type", "==", category).get();
         }
         const productList = [];
         const MAX_AMOUNT = 20;
         // lấy ra toàn bộ các sản phẩm thỏa mãn tìm kiếm
         productSnapshot.forEach((pro) => {
            let data = pro.data();
            if (searchKey) {
               if (data.title.toLowerCase().includes(searchKey.toLowerCase()) || data.description.toLowerCase().includes(searchKey.toLowerCase())) {
                  productList.push(data);
               }
            } else productList.push(data);
         });
         // phân trang
         let endOfPage = ((page + 1) * MAX_AMOUNT) > productList.length ? productList.length : ((page + 1) * MAX_AMOUNT);
         console.log((page + 1) * MAX_AMOUNT);
         done({ result: productList.slice(page * MAX_AMOUNT, endOfPage), total: productList.length });
      } catch (error) {
         done({
            error: true,
            errorMsg: error.toString(),
         });
      }
   },

   getProductDetail: async (id, done) => {
      try {
         // lấy ra toàn bộ các sản phẩm từ firestore
         const listProductsSnapshot = await db.collection("products").get();
         const listProducts = [];
         listProductsSnapshot.forEach((pro) => {
            listProducts.push(pro.data());
         });
         // nesu tìm tháy sản phầm có id thỏa mãn thì trả về cho client, nếu không thì trả về lỗi trong catch
         const result = listProducts.filter((product) => product.id === id);
         done(result[0]);
      } catch (error) {
         done({
            error: true,
            errorMsg: error.toString(),
         });
      }
   },
};
