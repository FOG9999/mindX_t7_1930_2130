const { SHOPEE_IMAGE_SERVER } = require('./apis');

const shopeeProducts = require('./shopee-products.json').items;
let productImages = [];
shopeeProducts.forEach(pro => {productImages = [...productImages, ...pro.item_basic.images]})
// console.log(productImages);

const getRandomImages = () => {
    let numOfImages = Math.round(Math.random()*5)+5;
    let output = [];
    for(let i=0; i<numOfImages; i++){
        let randomIndex = Math.round(Math.random()*productImages.length);
        output.push(SHOPEE_IMAGE_SERVER+productImages[randomIndex]);
    }
    return output;
}

console.log(getRandomImages())

module.exports = { 
    productImages,
    getRandomImages
}