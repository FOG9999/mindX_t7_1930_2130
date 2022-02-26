import { constants } from "../constants";
import {
  handleResponseWrapper,
  ResponseWrapper,
} from "../utils/ResponseHandler";

const authService = {
  login: (username, password, done) => {
    fetch(constants.SERVER_API_URL + "api/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    })
      .then((res) => {
        return new ResponseWrapper(res.headers, res.json(), res.status);
      })
      .then((responseWrapper) => {
        handleResponseWrapper(responseWrapper, done);
      });
  },
};

export { authService };
