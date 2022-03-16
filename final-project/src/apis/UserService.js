import { constants } from '../constants';
import {
  handleResponseWrapper,
  ResponseWrapper,
} from '../utils/ResponseHandler';

const userService = {
  getCart: (done) => {
    fetch(constants.SERVER_API_URL + 'cart/get-cart', {
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

export { userService };
