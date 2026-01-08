<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $body = $_POST;
    //Yêu cầu: 
    // - Lấy email và password từ body
    // - So sánh email = 'admin@gmail.com' và password = '123456' --> Chuyển hướng về login.php và hiển thị thông báo đã đăng nhập thành công và không hiển thị form (Set session)

    //Cách chuyển hướng trong php
    // header('Location: ex01.php');

    $email = $body['email'];
    $password = $body['password'];
}
