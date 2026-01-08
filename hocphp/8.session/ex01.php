<?php
//Khởi tạo phiên làm việc --> tạo ra session_id
if (!session_id()) {
    session_save_path('./logs');
    session_start();
}

//Thêm session
// $_SESSION['email'] = 'hoangan.web@gmail.com';
// $_SESSION['name'] = 'hoangan';
// $_SESSION['age'] = 33;

// echo $_SESSION['name'] . '<br/>';
// echo $_SESSION['email'] . '<br/>';

// unset($_SESSION['name']);

// session_destroy();

// session_unset();
