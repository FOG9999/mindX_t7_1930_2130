export const parseProduct = (product) => {
    product.images = JSON.parse(product.images);
    product.listSpecs = JSON.parse(product.listSpecs);
    return product;
}