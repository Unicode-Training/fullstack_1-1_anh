<?php
//Yêu cầu: 
// - Nhận phương thức POST, nếu được gửi bằng phương thức khác -> Trả về mã lỗi 405
// - Body gửi lên bao gồm: name, email, password với các ràng buộc
// + name: Phải từ 2 ký tự trở lên
// + email: Bắt buộc
// + password: Phải từ 6 ký tự trở lên

//Nếu vi phạm các điều kiện, trả về thông báo lỗi như ở dưới và mã lỗi 400

// [
//     'message' => 'Lỗi validation',
//     'errors' => [
//         'name' => 'Tên phải từ ký tự',
//         'email' => 'Email không được để trống'
//     ]
// ]

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    //Lấy body
    //Kiểm tra từng field body
    $body = json_decode(file_get_contents('php://input'), true) ?? [];
    $errors = [];
    if (!isset($body['name']) || mb_strlen($body['name'], 'UTF-8') < 2) {
        $errors['name'] = 'Tên phải từ 2 ký tự trở lên';
    }
    if (!isset($body['email']) || $body['email'] == "") {
        $errors['email'] = 'Email không được để trống';
    }
    if (!isset($body['password']) || mb_strlen($body['password'], 'UTF-8') < 6) {
        $errors['password'] = 'Mật khẩu phải từ 6 ký tự trở lên';
    }
    if (count($errors) > 0) {
        http_response_code(400);
        echo json_encode([
            'message' => 'Lỗi validation',
            'errors' => $errors
        ]);
    } else {
        json_encode([
            'message' => 'success'
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'message' => 'Method not allow'
    ]);
}
