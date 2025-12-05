<?php
// $str = "Tạ Hoàng An";
// if (is_string($str)) {
//     echo "Đây là chuỗi";
// }
// var_dump($str);

// $str = 'Nguyễn';
// echo mb_strlen($str, 'UTF-8');

//php extension: mbstring

//mb_strpos(): Lấy vị trí của chuỗi con đầu tiên tìm được (Giống indexOf trong js)
$str = 'Học PHP không PHP khó';
// echo mb_strpos($str, "PHP", 0, 'UTF-8');

//mb_strripos(): Lấy vị trí của chuỗi con cuối cùng tìm được (Giống indexOf trong js)
// echo mb_strripos($str, 'PHP', 0, 'UTF-8');

//mb_substr(): Cắt chuỗi
// var_dump(mb_substr($str, 5, 3, 'UTF-8'));

//trim(): Loại bỏ ký đầu và cuối chuỗi
// var_dump(trim($str, "Â"));

//mb_strtolower()
// echo mb_strtolower($str, 'UTF-8');

//mb_strtoupper()
// echo mb_strtoupper($str, 'UTF-8');

//mb_ucfirst()
// $str = 'an';
// echo mb_ucfirst($str, 'UTF-8');

// $str = 'ta hoang an';
// echo ucwords($str);
// echo ucfirst($str);

// $str = 'Học php không khó';
// echo str_replace('php', 'js', $str);

//explode() --> Tách chuỗi thành mảng
// $fullname = 'tạ hoàng an';
// $arr = explode(' ', $fullname);
// echo '<pre>';
// print_r($arr);
// echo '</pre>';

$fullname = 'Tạ Hoàng An';
$fullname[0] = 'A';
echo $fullname;
