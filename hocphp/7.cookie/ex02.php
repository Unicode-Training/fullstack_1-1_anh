<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $body = $_POST;
    //Yêu cầu: 
    // - Lấy email và password từ body
    // - So sánh email = 'admin@gmail.com' và password = '123456' --> Chuyển hướng về ex01.php và hiển thị thông báo đã đăng nhập thành công và không hiển thị form (Set cookie)

    //Cách chuyển hướng trong php
    // header('Location: ex01.php');

    $email = $body['email'];
    $password = $body['password'];
    if ($email == 'admin@gmail.com' && $password == '123456') {
        setcookie('email_login', $email, 0, '/');
        setcookie('message', 'Đăng nhập thành công', 0, '/');
    } else {
        setcookie('message', 'Đăng nhập thất bại', 0, '/');
    }
    header('Location: ex01.php');
}
