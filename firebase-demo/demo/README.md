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
- Quy trình xử lý của passport với LocalStrategy: (đối với các Strategy khác có thể nghiên cứu ở link: https://www.passportjs.org/packages/)
  `*` LocalStrategy: login với username và password. một số strategy khác có thể sử dụng đến là login bằng tài khoản facebook, twitter,...
  `*` User gửi usename/password -> endpoint
  gọi passport.authenticate('local', {failureRedirect: '/'}): khi một endpoint có gọi hàm này thì sẽ xác minh người dùng, nếu không, endpoint đó sẽ không được bảo vệ và có thể call từ những user chưa login
  `*` Nếu request user gửi lên chưa tồn tại sessionId, trong cookies, (mỗi khi login, user tạo 1 cái gọi là session, và có 1 cái Id), thì sẽ dùng username và password để tạo session mới, lưu lại vào session-storage (ở đây là express-session package của npm).
  `*` Nếu request gửi lên có sessionId trong cookie thì sẽ đọc id đó (bởi passport.serialize), truy vấn database(DB) để xác thực người dùng với Id đó (passport.deserialize)

### endpoints (API)

- Ví dụ: POST http://localhost:5000/api/auth/login: là một endpoint, sử dụng POST method. Tại project này, ta chia endpoint thành các phần riêng để tránh trường hợp ghi toàn bộ endpoint vào cùng app.js, hay giảm lượt call các hàm trùng nhau với những API có phần giống nhau:
  `*` Ví dụ những API bắt đầu bằng http://..../users: những api này thường lấy thông tin người dùng hoặc update hay xóa người dùng, vì thế luôn cần phải xác thực request
  `*` Việc gộp các endpoint có điểm chung lại vừa giảm code, vừa dễ maintain cho developer.
- Các bước tạo 1 api mới: ví dụ /user/update và /product/update
  `*` Tìm kiếm xem dã có app.use('/user',...) chưa. Đây là cách để framework express phân tầng API như đã nói ở trên. Nếu đã có (/user/update) thì thêm vào file /routes/user.js theo cấu trúc như đã comment ở users.js. Nếu chưa có, tạo file có cấu trúc tương tự.
  `*` Update các file .controller hoặc trong folder /controllers với cấu trúc tượng tự những hàm có sẵn.
