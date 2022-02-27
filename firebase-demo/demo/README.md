`# Cấu trúc project Backenr và các file, folder liên quan

## /database/database.js

Tile cấu hình tới firestore database, đây chỉ là cấu hình giúp project này có thể thao tác được với
fireatore của anh. Còn muốn truy cập để xem toàn bộ project, đương nhiên phải login account của anh.
Tại file này mình export cái db sau khi connect thành công ra để sử dụng tại những file khác.

## Code flow

- npm start = nodemon ./bin/www (nodemon là một thư viện giúp restart server mỗi khi lưu code)
- /bin/www: khởi tạo http server từ ./app.js. Chú ý tới biến port. Biến này là biến lưu trữ cổng đang chạy của server trên máy
  (Lưu ý: Mỗi máy có nhiều cổng. Mỗi cổng có thể run code BE để tạo 1 server. nhưng một khi cổng đã được sử dụng, chương trình khác
  sẽ không thể sử dụng được cổng đó)
- app.js: một số config quan trọng:

### app = express()

- Express là một framework BE dành cho Nodejs
- Khi muốn tạo một server bằng express ta import package express của npm và call
  hàm express(). Khi đó một thể hiện của server sẽ được tạo ra.
- Server này có đủ các function cần có của một web sẻver: hỗ trợ viết các method request(get,post,put, delete) // app.get, app.pót,...
- Chia router:
  Ví dụ ta có các route liên quan đến user, ta sẽ muốn route endpoint của chúng bắt đầu bằng /user và tách những route này viết vào file riêng
  Trong project này với /user ta sử dụng userRouter (import từ /routes/user.js), sử dụng hàm app.use(‘/user’, usserRouter) để quy định
  Trong các file của /routes ta sử dụng express.Router() để tạo route con phục vụ việc chia nhỏ route nói trên.
  Việc này giúp code dễ nhìn hơn và dễ debug hơn cho lập trình viên khi dồn toàn bộ route vào app.js

### session (import từ express session)

- Giống như localStorage trên FE, session là một dạng bộ nhớ được sử dụng trên BE để lưu trữ thông tin cục bộ (sẽ mất đi khi restart server). Thường những ttin này là ttin các người dùng đang đăng nhập.
- Khi user login vào hệ thống thì ttin user đó (có thể là id), sẽ được lưu lại session. Tránh việc lưu lại DB sau đó mỗi khi user request lại phải chọc DB để verify, gây hao tổn tgian
- Session có thể sử dụng nhiều loại: Memory RAM trên server, redis (một loại server DB lưu trữ nhanh truy cập dựa trên key-value)

### passport

- Công cụ để xác thực người dùng trong project nodejs
-

### cors

### endpoints
