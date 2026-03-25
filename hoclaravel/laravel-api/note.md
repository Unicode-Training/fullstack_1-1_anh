## Bài tập

Viết API đăng ký tài khoản:

POST /api/auth/register

{
"name": "",
"email": "",
"password": ""
}

Sau khi đăng ký xong, gửi email xác minh là mã số có 6 số

Viết API xác thực tài khoản

POST /api/auth/verify

{
"code": ""
}

- Nếu code không hợp lệ --> báo lỗi
- Nếu code hợp lệ --> Cập nhật trường email_verified_at ở trong bảng users

Sửa lại API login

- Nếu chưa xác thực tài khoản --> báo lỗi
- Nếu đã xác thực --> cho phép đăng nhập

Dựa vào trường email_verified_at
