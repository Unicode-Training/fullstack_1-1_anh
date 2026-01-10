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
