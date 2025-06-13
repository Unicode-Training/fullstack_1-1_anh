# Ngôn ngữ lập trình JavaScript

## Tổng quan

- JavaScript (JS) là ngôn ngữ lập trình phía client (trình duyệt)
- Xử lý các tương tác giữa người dùng với trang web
- Có đầy đủ các thành phần của 1 ngôn ngữ lập trình nói chung

## Cách chạy JavaScript trên trình duyệt

- Thông qua html
- Gọi mã JavaScript thông qua thẻ <script></script>

Cách 1: Viết trực tiếp mã js vào file html thông qua thẻ <script></script>

Cách 2: Tách file .js và gọi vào file html thông qua thẻ <script src="duong-dan-file-js"></script>

Cách 3: Viết trực tiếp js vào thẻ html thông qua các sự kiện

## Biến (Variable)

- Dùng lưu trữ dữ liệu tạm thời

Khai báo:

```js
let tenbien;
let tenbien = giatri;
let tenbien1, tenbien2, tenbien3;
```

Quy tắc đặt tên biến

- Không được bắt đầu bằng số
- Chấp nhận: chữ cái (Hoa, Thường), số, gạch dưới, ký hiệu $
- Nên đặt tên biến bằng Tiếng Anh
- Tên biến phải tường minh
- Không được trùng với các từ khóa của ngôn ngữ lập trình js
- Nên đặt theo quy tắc camelCase

```js
let customerId;
let username;
let userEmail;
let customerShippingAddress;
```

- Giá trị của biến có thể gán sau hoặc gán ngay lúc khai báo
- Trong cùng 1 phạm vi, 1 biến không được khai báo nhiều lần

## Hằng số (Constants)

Các quy tắc giống như biến, chỉ khác

- Không được gán lại (Hằng số thì không thay đổi)
- Khai báo phải gán luôn

Cú pháp:

```js
const tenhang = giatri;
```

Trong 1 số trường hợp tên hằng số thường được viết HOA và nối với nhau bởi gạch dưới

Ví dụ:

```js
const TIMEOUT = 1000;
const ANIMATION_DURATION = 2000;
```

## Kiểu dữ liệu

1. string --> Chuỗi
2. number --> Số
3. undefined --> Không xác định
4. null --> Giá trị rỗng
5. bigInt --> Số nguyên lớn
6. Symbol
7. boolean --> Kiểu logic (true, false)
8. object --> Đối tượng

Cách kiểm tra kiểu dữ liệu của 1 biến dùng từ khóa `typeof tenbien hoặc giá trị` (Trừ null)

## Ép kiểu dữ liệu

Chuyển từ kiểu này sang kiểu khác để giải quyết 1 bài toán nào đó

1. Các kiểu dữ liệu khác sang chuỗi

2. Các kiểu dữ liệu khác sang số

3. Các kiểu dữ liệu khác sang boolean

## Toán tử

1. Toán tử số học

```
+, -, *, /
% --> Chia lấy dư
** --> Lũy thừa
++ --> Tăng lên 1 đơn vị
-- --> Giảm đi 1 đơn vị
```

Sự khác nhau giữa tenbien++ và ++tenbien

- Nếu đứng độc lập --> Giống nhau
- Nếu nó nằm trong 1 biểu thức --> Khác nhau:

* tenbien++ --> Trả về giá trị trước khi tăng
* ++tenbien --> Trả về giá trị sau khi tăng

2. Toán tử so sánh

```
>, <, >=, <=
==, ===
!=, !==
```

Lưu ý:

Toán tử so sánh luôn trả về kiểu dữ liệu boolean

3. Toán tử gán (=)

4. Toán tử kết hợp (Luận lý)

- &&
- ||
- !

Truthy: Khi giá trị được đưa vào biểu thức so sánh mà nó ép kiểu sang true --> truthy

Falsy: Khi giá trị được đưa vào biểu thức so sánh mà nó ép kiểu sang false --> falsy

Cách hoạt động của toán tử &&:

- Chạy từ trái sang phải
- Tìm falsy: Khi nào gặp giá trị là falsy --> Dừng lại và trả về giá trị falsy
- Nếu không tìm thấy falsy --> Trả về giá trị biểu thức cuối cùng

Cách hoạt động của toán tử ||

- Chạy từ trái sang phải
- Tìm truthy: Khi nào gặp giá trị là truthy --> Dừng lại và trả về giá trị truthy
- Nếu không tìm thấy falsy --> Trả về giá trị biểu thức cuối cùng

Cách hoạt động toán tử !

- Chuyển giá trị biểu thức thành boolean
- Trả về giá trị ngược lại

5. Toán tử Nullish (??)

Cú pháp:

```js
a ?? b;
```

Nếu a là null hoặc undefined --> Lấy b, ngược lại lấy a

6. Toán tử điều kiện 3 ngôi (?:)

Cú pháp:

```js
dieukien ? giatridung : giatrisai;
```

## Câu lệnh rẽ nhánh

### Câu lệnh if else

```js
if (dieukien) {
  Code;
}

if (dieukien) {
    Code 1
} else {
    Code 2
}

if (dieukien) {
    Code 1
} else if (dieukien) {
    Code 2
} else if (dieukien) {
    Code 3
} else {
    Code n
}

if (dieukien) {
    if (dieukien2) {
        Code
    } else {
        Code
    }
} else {
    Code
}
```

### Câu lệnh switch case

- Áp dụng trong trường hợp có quá nhiều nhánh hoặc nhiều điều kiện OR
- Chỉ có tác dụng với so sánh bằng (===)

```js
switch (bien) {
  case value1:
    Code;
    break;
  case value2:
    Code;
    break;
  case valuen:
    Code;
    break;
  default:
    Code;
    break;
}
```

## Vòng lặp

- Cú pháp của lập trình cho phép đoạn chương trình chạy lặp đi lặp lại theo số lần nhất định
- 2 loại chính

* Lặp với số lần xác định trước: for
* Lặp với số lần không xác định trước: while, do while

Ngoài ra: Cho 1 số loại vòng lặp liên quan đến kiểu dữ liệu: object

### Vòng lặp for

```js
for (bienchay = giatrikhoitao; dieukienchay; buocnhay) {
  Code;
}
```

Bước nhảy sẽ giúp bienchay thay đổi nhằm mục đích làm sao điều kiện chạy bị sai --> Vòng lặp sẽ thoát

Từ khóa break: Thoát vòng lặp dựa vào điều kiện

Từ khóa continue: Bỏ qua lần lặp để đi đến lần lặp tiếp theo

### Vòng lặp while

```
while (dieukien) {
  Code
}
```

```
do {
  Code
} while (dieukien)
```

## Function

- Cú pháp cho phép nhóm các đoạn chương trình con thành các hàm riêng biệt
- Mục đích: Gọn gàng, tái sử dụng, hỗ trợ 1 số bài toán phức tạp

Cú pháp khai báo:

```js
function tenham() {
  Code;
}

function tenham(thamso1, thamso2,...) {
  Code;
}
```

Cú pháp gọi hàm

```
tenham();
tenham(doiso1, doiso2,...)
```

Hàm có return

- Có giá trị trả về (Hàm mang ra giá trị, có thể tái sử dụng nhiều hơn)
- Thêm từ khóa return trong hàm để quy ước giá trị nào trả về

Hàm không return

- Mang giá trị undefined

Lưu ý: Khi dùng từ khóa return --> Hàm sẽ bị thoát (Các đoạn code bên dưới return không hoạt động)

Có thể gọi hàm khác trong 1 hàm đang định nghĩa

### Anonymus Function

```js
function() {
  Code
}
```

- Hàm ẩn danh hay còn gọi là hàm không tên
- Không chạy được trừ phi

* Gán vào 1 biến
* Truyền vào hàm khác thông qua tham số

1 hàm được gán vào 1 biến ==> Expression Function

### Arrow function

### Closure

- Hàm cho phép truy cập vào các biến ở phạm vi chứa nó
- Hàm con

### Tham số còn lại

- Áp dụng trong các tình huống không cố định đối số truyền vào
- Viết cuối cùng

```js
function tenham(thamso1, thamso2, ...thamsoconlai) {
  Code;
}
```

### Giải thuật đệ quy

- Gọi lại chính hàm đang định nghĩa
- Tạo ra 1 vòng lặp bằng cách sử dụng hàm
- Kiểm soát việc dừng lại

```js
function tenham() {
  //Logic
  tenham();
}
tenham();
```

- Trong web: Áp dụng cho các bài toán đa cấp

## Kiểu dữ liệu String
