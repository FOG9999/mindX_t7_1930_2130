import { constants } from '../constants';
import {
    handleResponseWrapper,
    ResponseWrapper,
} from '../utils/ResponseHandler';

const productService = {
    searchProducts: (searchKey, category, page, done) => {
        let endpoint = new URL(constants.SERVER_API_URL + 'product/search');
        endpoint.search = new URLSearchParams({
            searchKey,
            category,
            page,
        }).toString(); // thêm tham số search dưới dạng http://localhost:5000?searchKey=a&category=ipad&page=2
        fetch(endpoint.href, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return new ResponseWrapper(res.headers, res.json(), res.status);
            })
            .then((responseWrapper) => {
                handleResponseWrapper(responseWrapper, done);
            });
    },

    getProductDetail: (id, done) => {
        fetch(constants.SERVER_API_URL + '/product/' + id, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                return new ResponseWrapper(res.headers, res.json(), res.status);
            })
            .then((responseWrapper) => {
                handleResponseWrapper(responseWrapper, done);
            });
    },
};

export { productService };
