export class ResponseWrapper {
  headers;
  data;
  status;
  constructor(headers, data, status) {
    this.headers = headers;
    this.data = data;
    this.status = status;
  }
}

export function handleResponseWrapper(responseWrapper, done) {
  if (responseWrapper.status === 200) {
    done(responseWrapper.data);
  } else if (responseWrapper.status === 401) {
    done({
      error: true,
      errorMessage: "Không thể xác thực người dùng",
    });
  } else {
    done({
      error: true,
      errorMessage: "Có lỗi xảy ra",
    });
  }
}
