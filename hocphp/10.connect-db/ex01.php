<?php
//PDO
$dbHost = '127.0.0.1'; //localhost
$dbUser = 'root';
$dbPass = '123456';
$dbPort = 3307;
$dbName = "anh-php";

$dsn = "mysql:host=$dbHost;dbname=$dbName;port=$dbPort";
$conn = new PDO($dsn, $dbUser, $dbPass);

//Thêm dữ liệu mới
// $sql = "INSERT INTO users(name, email, status, created_at, updated_at) VALUES(?, ?, ?, ?, ?)";
// $statement = $conn->prepare($sql);
// $statement->execute([
//     'Hoàng An',
//     'hoangan.web@gmail.com',
//     1,
//     date('Y-m-d H:i:s'),
//     date('Y-m-d H:i:s'),
// ]); //Thực thi câu lệnh sql

//Cập nhật
//Cập nhật tên, email của user có id = 4

//Xóa

//Lấy danh sách dữ liệu
// $sql = "SELECT * FROM users WHERE id > ?";
// $statement = $conn->prepare($sql);
// $statement->execute([3]);
// $users = $statement->fetchAll(PDO::FETCH_ASSOC);
// echo '<pre>';
// print_r($users);
// echo '</pre>';

//Lấy 1 bản ghi
// $sql = "SELECT * FROM users WHERE id = ?";
// $statement = $conn->prepare($sql);
// $statement->execute([3]);
// $user = $statement->fetch(PDO::FETCH_ASSOC);
// echo '<pre>';
// print_r($user);
// echo '</pre>';
$query = $_GET['query'] ?? "";
$orderBy = $_GET['orderBy'] ?? 'oldest';
$orderSql = $orderBy == 'latest' ? 'DESC' : 'ASC';
$sql = "SELECT * FROM users WHERE email LIKE ? OR name LIKE ? ORDER BY id $orderSql";
$statement = $conn->prepare($sql);
$statement->execute(
    [
        "%$query%",
        "%$query%",
    ]
);
$users = $statement->fetchAll(PDO::FETCH_ASSOC);
echo '<pre>';
print_r($users);
echo '</pre>';
