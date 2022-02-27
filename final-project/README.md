# Code Flow ReactJS trong project
## index.html
Chứa thành phần div#root sẽ render toàn bộ project. Nếu có các thư viện như bootstrap với link cdn, thì có thể import trong file này trong thẻ <link />
## index.js
Query select div#root trong index.html, nhét các component vào làm con của div này.
Thẻ <BrowserRouter> (react-router-dom) phải bao lấy <App/> vì trong App chưa các Route trỏ tới các trang (component) ứng với từng path
## App.js
Chứa các <Route path="/..." element={<Component />} />
Lưu ý: 
- Phải bọc các <Route> bằng <Routes>
- Đối với react-router version <=5, thuộc tính 'element' chuyển thành 'component'
## components
Chứa các component cho từng trang, hoặc từng thành phần trong 1 trang. Thường mỗi trang sẽ là 1 folder, folder đó bao gồm các component con của 1 component cha (container), ví dụ: folder /components/cart
## apis
CHứa các file trong đó mỗi file bao gồm các hàm fetch.
Hàm này là hàm dùng để giao tiếp với Backend
- ví dụ: AuthService.js
- login: (username, password, done) => {
    fetch(constants.SERVER_API_URL + "api/auth/login", {  // SERVER_API_URL='http://localhost:5000/' -> đường dẫn cơ bản tới Backend (BE), lưu trong constants.js
      method: "POST",									  // request method: POST
      headers: {										  // các thông tin gán vào header (bao gồm cả authen thẻ định danh)
        "Content-type": "application/json",  			  
      },
      credentials: "include", 							  // su dung cookie (F12 cùng hàng với tab console, tab Application->Cookies), một loại thẻ định danh
      body: JSON.stringify({ username, password }),       // thông tin muốn gửi đến BE
    })
      .then((res) => {
        return new ResponseWrapper(res.headers, res.json(), res.status);
      })
      .then((responseWrapper) => {
        handleResponseWrapper(responseWrapper, done);
      });
  }
## utils
/utils/Responsehander.js:
- class ResponseWrapper: lấy các thông tin quan trọng của response (headers, data trả về, status code), viết chung để sử dụng cho tất cả các api. Người sau viết chỉ cần copy paste phần .then(...).then(...):
- export class ResponseWrapper {
  headers;
  data;
  status;
  constructor(headers, data, status) {
    this.headers = headers;
    this.data = data;
    this.status = status;
  }
}
- function handleResponseWrapper: nhận instance của class ResponseWrapper, trả về data nếu mã lỗi = 200 (OK), nếu khác thì văng ra message
- export function handleResponseWrapper(responseWrapper, done) {
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
- Ngoài ra có thể tạo ra các file chứa các hàm tiện tích dùng chung cho cả project: hàm biến đổi object Date -> string, các hàm để validate,...