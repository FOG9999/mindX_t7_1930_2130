const db = require("../database/database");
const { getRandomImages } = require("../generator/update-products");
const { parseProduct } = require("../utils/transform");

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
    updateProductImages: async (done) => {
        try {            
            const batch = db.batch();
            const productRef = db.collection("products");
            (await productRef.listDocuments()).forEach((proRef) => {
               const newImages = getRandomImages();
                batch.update(proRef, {
                    images: JSON.stringify(newImages),
                    //    id: 1,
                });
            });
            const res = await batch.commit();
            done(res);
        } catch (error) {
            done(error);
        }
    },
    updateCartProducts: async (done) => {
        try {
            const batch = db.batch();
            const cartProductCollection = db.collection("cartProducts");
            // loop through all cart prtoducts, set a selected color and a spec for each of them
            const listCartProducts = await cartProductCollection.listDocuments();
            await Promise.all(listCartProducts.map(cartProRef => {
                return (async () => {
                    const cartPro = (await cartProRef.get()).data();
                    const productObjSnapshot = (await db.collection('products').where('id', '==', cartPro.product).limit(1).get())
                    let productObj  = null;
                    productObjSnapshot.forEach(snap => {
                        productObj = parseProduct(snap.data());
                    });
                    if(productObj){
                        // pick a color
                        let selectedColorIndex = Math.floor(Math.random()*productObj.images.length);
                        // pick a spec
                        let selectedSpecIndex = Math.floor(Math.random()*productObj.listSpecs.length);
                        batch.update(cartProRef, {
                            selectedColorIndex,
                            selectedSpecIndex
                        })
                    }                
                })()
            })).catch(err => {
                console.error(err);
            })            
            const res = await batch.commit();
            done(res);
        } catch (error) {
            done({
                error: true,
                errorMessage: error.toString()
            })
        }
    }
};
