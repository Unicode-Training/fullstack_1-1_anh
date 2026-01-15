# Học Database (SQL)

## Các kiểu dữ liệu

1. String

- varchar(soluong)
- char(soluong)
- text
- tinytext
- longtext

2. Number

- tinyint
- int
- mediumint
- bigint
- float
- double

3. DateTime

- date: Hỗ trợ ngày tháng năm (Năm - Tháng - Ngày): 2025-01-09
- datetime: Hỗ trợ ngày tháng năm, giờ phút giây: 2025-01-09 19:00:30
- timestamp: Hỗ trợ ngày tháng năm, giờ phút giây, tự động quy đổi múi giờ khi lưu vào database (utc)

## Các lệnh sql

1. Thêm mới dữ liệu

```
INSERT INTO tenbang(tencot1, tencot2,...) VALUES(giatricot1, giatricot2,...)
```

2. Cập nhật dữ liệu

```
UPDATE tenbang SET tencot1=giatri1, tencot2=giatri2,.... WHERE dieukien
```

3. Xóa dữ liệu

```
DELETE FROM tenbang WHERE dieukien
```

4. Truy vấn dữ liệu

```
SELECT * FROM tenbang
```

```
SELECT tencot1, tencot2,... FROM tenbang
```

```
SELECT tencot1, tencot2,... FROM tenbang WHERE dieukien
```

Toán tử: >, >=, <, <=, =, <>, !=, AND, OR, NOT, IS NULL, IS NOT NULL, IN, EXISTS, LIKE, BETWEEN

Sắp xếp: ORDER BY tencot kieusapxep (ASC, DESC)

Giới hạn: LIMIT soluong OFFSET soluong

Join:

- Inner join: Lấy phần giao của 2 bảng
- Left join: Lấy toàn bộ bảng bên trái
- Right join: Lấy toàn bộ bảng bên phải

SELECT tencot1, tencot2,... FROM tenbang1 LOAIJOIN tenbang2 ON dieukienlienket

Yêu cầu:

Lấy danh sách posts của user có id = 3

Lấy danh sách posts của user có email = 'user3@gmail.com'

Lấy danh sách posts của users có email = 'user3@gmail.com' và trạng thái = 1

Lấy danh sách posts của users có số điện thoại là 01234 và trạng thái = 0

Lấy danh sách tên khóa học của users có số điện thoại là 01234

Hàm

- COUNT() --> Đếm số hàng của 1 trường nào đó hoặc của tất cả các trường
- SUM() --> Tính tổng các hàng theo trường
- MAX() --> Tính giá trị lớn nhất theo trường
- MIN() --> Tính giá trị nhỏ nhất theo trường
- AVG() --> Tính trung bình cộng theo trường

Group by

Having

SubQuery
