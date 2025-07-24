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

## Ngôn ngữ định dạng CSS

- CSS ngôn ngữ định dạng giao diện trang web (Bố cục, màu sắc, làm đẹp,..)
- HTML giúp tạo nội dung cho trang web
- CSS không chạy trực tiếp trên trình duyệt mà cần thông qua HTML

### Cách viết CSS trong HTML

1. Viết trực tiếp css thông qua thẻ style (Internal css)

```
<style>
    Code CSS
</style>
```

2. Tách file .css và gọi vào file HTML thông qua thẻ link (External CSS)

```
<link href="duong-dan-file-css" rel="stylesheet" />
```

3. Viết trực tiếp CSS vào thẻ html thông qua thuộc tính style (Inline CSS)

### Cấu trúc của css

```
selector {
    thuoctinh1: giatri1;
    thuoctinh2: giatri2;
    thuoctinh3: giatri3;
}
```

### Comment trong CSS

```
/*Comment css*/
```

### Selector CSS

1. Chọn theo id

```
#id {
    code
}
```

2. Chọn theo class

```
.class {
    code
}
```

3. Chọn theo tag

```
tag {
    code
}
```

4. Selector kết hợp

4.1. Nằm trong (Dùng dấu cách)

```
selector1 selector2 selector3 {
    Code
}
```

4.2. Con (Dùng dấu >)

```
selector1 > selector2 > selector3 {
    Code
}
```

4.3. Cùng cấp

```
selector1selector2selector3 {
    Code
}
```

4.4. Kế thừa

```
selector1, selector2, selector3 {
    Code
}
```

4.5. Ngang hàng (Không liền kề)

```
selector1 ~ selector2 ~ selector3 {
    Code
}
```

Điều kiện:

- Các phần tử cùng thuộc 1 cha
- Phần tử được chọn phải nằm sau

  4.6. Ngang hàng (Liền kề)

```
selector1 + selector2 + selector3 {
    Code
}
```

5. Attribute Selector (Chọn theo thuộc tính)

- Chọn thẻ html có thuộc tính: tenthe[thuoctinh]
- Chọn thẻ html có thuộc tính = giá trị: tenthe[thuoctinh="giatri"]
- Chọn thẻ html có thuộc tính chứa giá trị: tenthe[thuoctinh*="giatri"]
- Chọn thẻ html có thuộc tính bắt đầu bằng giá trị: tenthe[thuoctinh^="giatri"]

### Pseudo

1. Phần tử giả

Cú pháp: selector::tenphantu

Danh sách phần tử giả

- before
- after
- first-letter
- first-line
- selection
- placeholder

2. Lớp giả

Cú pháp: selector:tenlopgia

Danh sách:

- active, hover
- focus: Chỉ áp dụng với form
- checked: Radio, Checkbox được check
- first-child
- last-child
- first-of-type: Chọn phần tử đầu tiên cùng kiểu
- last-of-type: Chọn phần tử cuối cùng cùng kiểu
- nth-child(i): Chọn phần tử con theo thứ tự
- nth-of-type(i): Chọn phần tử cùng kiểu theo thứ tự

### Các thuộc tính định dạng van bản

1. Thuộc tính color

- Thay đổi màu sắc của văn bản
- Cú pháp: color: mamau|tenmau
- Color Opacity: Độ trong suốt của 1 màu (Mặc định là 100%)
- Giá trị trong suốt: transparent

2. Thuộc tính font-size

- Thay đổi cỡ chữ của văn bản
- Cú pháp: font-size: cochu+donvi

Danh sách đơn vị

- px --> Tuyệt đối (1px = 1 điểm ảnh trên màn hình)
- em --> Tương đối (1em tỷ lệ với font-size của thẻ cha)
- rem --> Tương đối (1rem tỷ lệ với font-size mặc định của trình duyệt)

Lưu ý: font-size mặc định của trình duyệt có thể thay đổi bằng cách

- Thay ở phần cài đặt trình duyệt
- Thay đổi ở selector html

3. Thuộc tính line-height

- Thay đổi chiều cao của dòng văn bản (Giãn dòng)
- Cú pháp: line-height: tyle

4. Thuộc tính font-family

- Thay đổi font chữ của văn bản
- Cú pháp: font-family: tenfont1, tenfont2,...

5. Thuộc tính font-weight

- Thay đổi độ dày của văn bản (Phụ thuộc vào font chữ)
- Cú pháp: font-weight: 100|200|300|400|500|600|700|800|900
  - Mặc định là 400 (normal)
  - Giá trị bold là 700

6. Thuộc tính font-style

- Văn bản nghiêng
- Cú pháp: font-style: normal|italic

7. Thuộc tính text-decoration

- Thiết lập các đường gạch chân, gạch ngang, gạch trên, gạch giữa cho văn bản
- Cú pháp: text-decoration: none|underline|overline|line-through

8. Thuộc tính text-transform

- Thiết lập chữ hoa, chữ thường
- Cú pháp: text-transform: none|uppercase|lowercase|captialize

9. Thuộc tính letter-spacing

- Thiết lập khoảng cách giữa các ký tự
- Cú pháp: letter-spacing: giatri + donvi

10. Thuộc tính word-spacing

- Thiết lập khoảng cách giữa các từ
- Cú pháp: word-spacing: giatri + donvi

11. Thuộc tính word-wrap

- Chủ động wrap văn bản khi nội dung bị tràn
- Cú pháp: work-wrap: normal|break-word

12. Thuộc tính text-align

- Căn chỉnh văn theo chiều ngang
- text-align: left|center|right|justify

### Thuộc tính background

- Thay đổi màu nền, ảnh nền của phần tử html

1. background-color: mamau|tenmau

2. background-image: url(link-ảnh)

3. background-repeat: repeat|no-repeat|repeat-x|repeat-y

4. background-position: x y

Thiết lập vị trí của ảnh nền

5. background-size: x y

Thiết lập kích thước của ảnh nền

Lưu ý:

- cover: Tính toán lấp đầy không gian chứa background
- contain: Giữ nguyên tỉ lệ của ảnh nền

5. background-attachment: scroll|fixed

- Cố định ảnh nên khi lăn chuột

6. background: color image repeat positiion / size attachment

Tổng hợp tất cả các giá trị trên

### Thuộc tính border

- Thiết lập đường viền cho phần tử html
- Cấu tạo của border = width + style + color

border-width: giatri + donvi (Độ dày)
border-style: none|solid|dashed|dotted|double
border-color: maumau|tenmau

Các thuộc tính mở rộng

Cú pháp: border-{side}-width|style|color

- border-top-width
- border-left-width
- border-right-width
- border-bottom-width

- border-top-style
- border-left-style
- border-right-style
- border-bottom-style

- border-top-color
- border-left-color
- border-right-color
- border-bottom-color

Các thuộc tính rút gọn

border: width style color
border-{side}: width style color

### Thuộc tính border-radius

- Bo tròn các góc
- Cú pháp: border-radius: giatri + donvi

border-top-left-radius
border-top-right-radius
border-bottom-left-radius
border-bottom-right-radius

### Thuộc tính padding

- Tạo khoảng cách đệm giữa content và border
- Cú pháp: padding: giatri + donvi

Thuộc tính mở rộng:

- padding-top
- padding-left
- padding-right
- padding-bottom

Lưu ý: Không có giá trị âm

### Thuộc tính margin

- Căn lề ngoài border
- Cú pháp: margin: giatri + donvi

Các lưu ý: cạnh, đơn vị phần trăm, inline --> Giống padding

Các thuộc tính mở rộng

- margin-top
- margin-left
- margin-right
- margin-bottom

### Position

- Thay đổi vị trí của các phần tử html
- 4 loại:

* static: Mặc định (Sắp xếp từ trên xuống, trái sang phải)
* relative: Tương đối
* absolute: Tuyệt đối
* fixed: Cố định khi kéo thanh cuộn

Cú pháp: position: giatri

Khi áp dụng position (Trừ static), có các thuộc tính

- top
- left
- right
- bottom
- z-index
- inset

### Flex

- Kỹ thuật chia bố cục trang web (Chia layout, dàn trang)
- 2 phần:

* flex container
* flex item

1. Các thuộc tính trong nhóm flex container

- display: flex --> Kích hoạt flexbox
- flex-direction --> Chọn hướng cho trục main (Mặc định hướng sẽ nằm ngang)

* row --> Mặc định
* row-reverse
* column
* column-reverse

- justify-content --> Tùy chỉnh vị trí các item theo hướng song song với trục main

* flex-start
* center
* flex-end
* space-around
* space-between
* space-evenly

- align-items --> Tùy chỉnh vị trí các item theo hướng song song với trục cross

* stretch --> Mặc định, kéo dãn các item theo kích thước của container
* flex-start
* center
* flex-end
* baseline

- flex-wrap

* nowrap
* wrap
* wrap-reverse

- gap: --> Tạo khoảng cách giữa các item
- row-gap
- column-gap

2. Các thuộc tính trong nhóm item

- flex-grow --> Tự động giãn các item theo tỷ lệ nhất định lấp đầy khoảng trống của container
- flex-shrink --> Tự động co lại khi kích thước các item vượt quá khỏi kích thước container
- flex-basis --> Thiết lập kích thước ban đầu của item
- flex --> Gộp của grow shrink basis
- order --> Sắp xếp các item theo thứ tự mong muốn (Mặc định = 0)

### Transition

- Thuộc tính cho phép tạo hiệu ứng chuyển động dựa trên sẽ thay đổi của các giá trị trong các thuộc tính css (Ví dụ: Tăng width từ 0 đến 100px)
- Chỉ áp dụng với các thuộc tính có giá trị là số (Bao gồm cả màu)

Cú pháp:

- transition-property --> Khai báo các thuộc tính css muốn có transition
- transition-duration --> Thiết lập thời gian hoàn thành chuyển động
- transition-delay --> Thời gian chờ trước khi hiệu ứng bắt đầu chuyển động
- transition-timing-function --> Thiết lập tốc độ trong quá trình chuyển động diễn ra

* ease --> Mặc định, di chuyển chậm - nhanh - chậm
* ease-in --> Chậm - Nhanh
* ease-out --> Nhanh - Chậm
* ease-in-out --> Chậm - nhanh - chậm
* linear --> Tốc độ đều
* cubic-bezier --> Tự thiết lập tốc độ

- transition: property duration delay timing-function

### Transform

- Thuộc tính cho phép thay đổi hình dạng của phần tử html
- Có thể thay đổi: xoay, nghiêng, phóng to, thu nhỏ, di chuyển

Cú pháp: transform: value

- rotate(angle) --> Xoay theo trục Z
- rotateX(angle) --> Xoay theo trục X
- rotateY(angle) --> Xoay theo trục Y

- scale(x, y) --> Phóng to và thu nhỏ theo trục x, y (> 1 --> phóng to, < 1 --> Thu nhỏ)
- scaleX(value) --> Phóng to, thu nhỏ theo trục X
- scaleY(value) --> Phóng to, thu nhỏ theo trục Y

- skew(x, y) --> Nghiêng theo trục x, y (Đơn vị deg)
- skewX(value) --> Nghiêng theo trục X
- skewY(value) --> Nghiêng theo trục Y

- translate(x, y) --> Di chuyển theo trục x, y
- translateX(value) --> Di chuyển theo trục X
- translateY(value) --> Di chuyển theo trục Y

Lưu khi dùng translate với đơn vị phần trăm (Tỷ lệ theo kích thước của chính phần tử đang di chuyển)

### Animation

- Kỹ thuật css cho phép tạo hiệu ứng linh hoạt
- 2 phần

* Thuộc tính animation
* keyframes --> Thiết lập kịch bản hiệu ứng

```css
@keyframes ten_keyframe {
  from {
  }
  ... {
  }
  to {
  }
}
```

Lưu ý: from, to, khoảng phần trăm bất kỳ là tỷ lệ so với tổng thời gian hiện ứng

- from: Tương ứng với 0%
- to: Tương ứng với 100%

Ví dụ: Di chuyển phần tử từ 0 đến 300px trong khoảng thời gian 1s

```
from {

}
50% {

}
to {

}
```

- animation-name: ten_keyframe
- animation-duration: thời gian hoàn tành
- animation-delay: --> Thời gian trễ trước khi hiệu ứng chạy
- animation-timing-function --> Thiết lập tốc độ của hiệu ứng (Giống transition-timing-function)
- animation-interation-count: Số lần chạy hiệu ứng (infinite = Chạy vô hạn)

### Shadow

box-shadow: none|h-offset v-offset blur spread color

text-shadow: none|h-offset v-offset blur color

### Responsive

- Kỹ thuật để xây dựng trang web thích ứng với tất cả thiết bị
- Dùng css để thay đổi giao diện dựa vào kích thước màn hình
  Ví dụ:

- Nếu chiều rộng > 1200px --> Hiển thị title
- Nếu chiều rộng <= 1200px --> Hiện thị sub-title
- Nếu chiều rộn <= 992px --> Đổi màu title và ẩn sub-title

Những điểm kích thước màn hình mà tại đó giao diện sẽ bị thay đổi gọi là breakpoint

Không có breakpoint cố định cho mọi dự án mà chỉ có breakpoint phổ biến

- 1400px
- 1200px
- 992px
- 768px
- 576px

Media queries: Cú pháp của css cho phép tùy chỉnh các thuộc tính theo kích thước màn hình

```css
@media screen and (max-width: 1399.98px) {
  selector {
  }
}

@media screen and (max-width: 1199.98px) {
  selector {
  }
}

@media screen and (max-width: 991.98px) {
  selector {
  }
}

@media screen and (max-width: 767.98px) {
  selector {
  }
}

@media screen and (max-width: 575.98px) {
  selector {
  }
}
```

Với đa số các giao diện thường có 3 breakpoint dùng nhiều

- 992px
- 768px
- 576px

Bài tập: Xây dựng header

Breakpoint

- 992px
- 768px
