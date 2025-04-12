## Git

- Công cụ quản lý phiên bản code
- Git Local và Git Remote (Github, Gitlab)

1. Tạo repository trên github

2. Liên kết giữa Local với Github

3. Các thao tác với code

3.1. Đẩy code từ local lên github

Gõ 3 lệnh:

git add .
git commit -m "Noi dung bat ky"
git push

3.2. Clone repository của người khác

git clone link_git

3.3. Lấy code mới từ repository về local

git pull

3.4. Loại bỏ các file, folder không đẩy lên git

Tạo file `.gitignore`

Khai các folder, file cần loại bỏ --> Push file .gitignore lên git

## Ngôn ngữ đánh dấu HTML

### Giới thiệu

- Tạo ra nội dung trên trang web
- Không quyết định việc bố cục, trang chí, màu sắc,...
- Giống như khung xương của trang web
- Tạo bởi các thẻ (tag)
- Cú pháp:

```
<tenthe thuoctinh="giatri">Nội dung</tenthe> --> Thẻ đầy đủ
<tenthe thuoctinh="giatri" /> --> Thẻ tự động
```

- HTML có rất nhiều thẻ html, nhưng không nên học hết (30 thẻ)

### Các loại thẻ HTML

1. Thẻ block

- Luôn ở 1 hàng mới
- Chiều rộng mặc định = 100% so với chiều rộng thẻ cha

2. Thẻ inline

- Chiều rộng mặc định = nội dung của thẻ
- Các thẻ inline đứng cạnh nhau nằm trên 1 hàng

Lưu ý: Các thẻ html có thể lồng vào với nhau --> Tuân đủ nguyên tắc đóng mở

### Comment trong HTML

- Viết ghi chú để dễ hiểu hơn về đoạn code của mình
- Trình duyệt không biên dịch ghi chú đó
- Ngoài ra, giúp vô hiệu hóa đoạn code trong quá trình phát triển

### Các thẻ trong nhóm block

1. Thẻ heading

- Giúp định nghĩa các tiêu đề trên trang web
- 6 thẻ từ h1 đến h6 (Số càng to thì cỡ chữ càng nhỏ)

```
<h1>Nội dung</h1>
<h2>Nội dung</h2>
<h3>Nội dung</h3>
<h4>Nội dung</h4>
<h5>Nội dung</h5>
<h6>Nội dung</h6>
```

2. Thẻ định dạng văn bản

```
<p>Nội dung văn bản</p>
```

Lưu ý: Chỉ được chứa văn bản

3. Thẻ định dạng danh sách

3.1. Định dạng danh sách không sắp xếp

```
<ul>
    <li>Nội dung 1</li>
    <li>Nội dung 2</li>
    <li>Nội dung 3</li>
</ul>
```

3.2. Định dạng danh sách có sắp xếp

```
<ol>
    <li>Nội dung 1</li>
    <li>Nội dung 2</li>
    <li>Nội dung 3</li>
</ol>
```

Lưu ý: Thẻ ul, li thường được sử dụng trong các nội dung dạng liệt kê hoặc thể hiện các thanh điều hướng (menu, tab)

4. Thẻ phân chia nội dung (div)

- Nhóm các thẻ html khác để chia thành các khu vực
- Cần có sự can thiệp của css

5. Thẻ trích dẫn (blockquote)

- Trích dẫn nội dung của người nổi tiếng hoặc nội dung của 1 trang web

```
<blockquote>Học lập trình không khó</blockquote>
```

6. Thẻ gạch ngang (hr)

```
<hr />
```

### Các thẻ html trong nhóm inline

1. Thẻ chèn liên kết (a = anchor)

```
<a href="dia-chi-trang-web">Nội dung hiển thị</a>
```

Các thuộc tính

- href: Địa chỉ trang web hoặc đường dẫn (tương đối, tuyệt đối)
- target: `_blank` (Mở tab mới) hoặc `_self` (Mở tab hiện tại)
- title: Tiêu đề khi trỏ chuột vào

Đường dẫn tương đối và tuyệt đối

- Đường dẫn tương đối

* Suy ra từ url gốc trên web của mình (Phụ thuộc vào folder đang đứng)
* Ví dụ của đường dẫn tương đối

```
folder1/folder2/tenfile
./folder1/folder2/tenfile
../folder1/folder2/tenfile --> Đẩy ra ngoài cấp cha 1 cấp
```

- Đường dẫn tuyệt đối: Không phụ thuộc vào vị trí đang đứng

* Đường dẫn đầy đủ: scheme + domain + port + path
* Đường dẫn tuyệt đối theo tên miền của mình: /duong-dan

2. Thẻ chèn hình ảnh

Cú pháp:

```
<img src="duong-dan-anh" width="chieu-rong" height="chieu-cao" title="Tiêu đề khi trỏ chuột" alt="Văn bản thay thế" />
```

3. Thẻ định dạng kiểu (span)

- Hỗ trợ cho việc css mà đảm bảo nội dung vẫn được inline
- Cú pháp:

```
<span>Nội dung</span>
```

4. Thẻ định dạng: nghiêng, đậm, gạch chân, gạch ngang

- b: In đậm
- i: In nghiêng
- u: Gạch chân
- s: Gạch ngang

5. Thẻ liên quan đến công thức toán học, hóa học

6. Table

7. Form

- Biểu mẫu cho phép người nhập liệu, lựa chọn --> Gửi lên Server
- Ví dụ: Form đăng nhập, đăng ký
- Cấu tạo form:

* Trường nhập liệu, lựa chọn
* Nút gửi
