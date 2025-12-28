<?php
//request
// - URL
// - Headers
// - Body

// $data = [
//     'name' => 'Hoàng An',
//     'email' => 'hoangan.web@gmail.com'
// ];

// echo json_encode($data); //Chuyển về JSON

// echo '<pre>';
// print_r($_SERVER);
// echo '</pre>';

// echo $_SERVER['PHP_SELF'];

// echo $_SERVER['REQUEST_METHOD'];

//$_SERVER: Trả về thông tin request
//Ví dụ: Lấy query string: $_SERVER['QUERY_STRING']
// echo $_SERVER['QUERY_STRING'];

//$_GET: Lấy thông tin query string

//$_POST: Lấy thông tin body --> Chỉ hỗ trợ form-urlencoded

//Nếu muốn lấy dữ liệu từ json
// $bodyJson = file_get_contents("php://input");
// $body = json_decode($bodyJson, true);
// $name = $body['name'];
// echo $name;

//Header
// $headers = getallheaders();
// echo '<pre>';
// print_r($headers);
// echo '</pre>';
